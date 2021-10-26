// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/** 
 * @title Kitty Party Apprentice Contract 
 */

contract KPL2AGuardianNFT is AccessControl, ERC721URIStorage, ERC721Enumerable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;
    
    struct Tribe {
        uint8 startIndex;
        uint8 endIndex;
        uint16 attributeSet;
        uint16 apprenticeId;
    }
    
    struct Apprentice {
        uint8 attribute1;
        uint8 attribute2;
        uint16 attributeSet;
    }

    bytes32 constant DAO_AGENT_ROLE = keccak256("DAO_AGENT_ROLE");
    bytes32 constant L2A_TUNNEL_ROLE = keccak256("L2A_TUNNEL_ROLE");

    string public baseURI;
    address public daoTreasury;
    address public crossChainAdapter;
    uint public creationTime = block.timestamp;
    address internal _connectedToken;

    mapping(address => bool) guardians;
    mapping(uint => bool) awakenedGuardians;
    mapping(uint => Tribe) guardianTribe;
    mapping(uint => Apprentice) apprentices;
    mapping(address => uint) pendingWithdrawals;

    event ApprenticeSeededBy(address);
    event AwakenTheTribe(uint);
    event SetCrossChainAdapter(address);
    event SetKPFxL2ATunnel(address _kpL2AFXTunnel);
    event SetBaseURI(string baseURI);
    event SetAttributes(uint, uint8, uint8, uint16);
    

    constructor(
        address _daoTreasury, 
        address _kpL2AFXTunnel,
        address _l1TokenAddress
        ) 
        ERC721("PPGUARD", "PPG") 
    {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(L2A_TUNNEL_ROLE, _kpL2AFXTunnel);
        _setupRole(DAO_AGENT_ROLE, _daoTreasury);

        daoTreasury = _daoTreasury;
        _connectedToken = _l1TokenAddress;
        _tokenIdCounter._value = 88;
        emit ApprenticeSeededBy(_daoTreasury);
    }

    modifier crossChainActive() {
        require(block.timestamp >= creationTime + 365 days, "Cross Chain Mint not active yet!");
        _;
    }

    modifier onlyCrossChainAdapter() {
        require(msg.sender == crossChainAdapter, "Only cross chain adapter can mint!");
        _;
    }

    /***  
    *@dev This is the minting function that has to be called at the start of the universe
    */
    function joinTheForce(uint guardianId) external payable {
        require(block.timestamp >= creationTime + 58 days, "Apprentice minting not yet active");
        require(totalSupply() < 8800, "Mint exceeds supply");
        require(msg.value >= 88 ether);
        require(awakenedGuardians[guardianId], "Guardian not awakened");

        require(guardianTribe[guardianId].startIndex != guardianTribe[guardianId].endIndex);
        guardianTribe[guardianId].startIndex++;
        pendingWithdrawals[daoTreasury] += msg.value;
        _safeMint(msg.sender, _tokenIdCounter.current());
        _setAttributes(_tokenIdCounter.current(), 0, 0, guardianTribe[guardianId].attributeSet);
        guardianTribe[guardianId].apprenticeId = uint16(_tokenIdCounter.current());
        _tokenIdCounter.increment();
    }

    /*** @dev Schedule mint for the apprentices called by the guardian from mainnet
    */
    function awakenTribe(uint guardianId, uint8 _attributeSet) external onlyRole(L2A_TUNNEL_ROLE) {
        require(guardianId >=0 && guardianId <= 87, "Invalid ID");
        awakenedGuardians[guardianId] =  true;
        guardianTribe[guardianId].startIndex = 0;
        guardianTribe[guardianId].endIndex = 99;
        guardianTribe[guardianId].attributeSet = _attributeSet;
        emit AwakenTheTribe(guardianId);
    }

    /* @dev This allows the DAO treasury to withdraw the raised funds from this contract
    *       The daoTreasury can only be set by the current DAO
    */
    function withdrawAll() external onlyRole(DAO_AGENT_ROLE) {
        uint amount = pendingWithdrawals[msg.sender];
        pendingWithdrawals[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    function isGuardian(address _candidateAddress) public view returns(bool) {
        return guardians[_candidateAddress];
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function setCrossChainAdapter(address _crossChainAdapter) external onlyRole(DAO_AGENT_ROLE) {
        crossChainAdapter = _crossChainAdapter;
        emit SetCrossChainAdapter(_crossChainAdapter);
    }

    function setBaseURI(string memory __baseURI) external onlyRole(DAO_AGENT_ROLE) {
        baseURI = __baseURI;
        emit SetBaseURI(__baseURI);
    }

    /* @notice A guardian can request the DAO to level up an apprentice as a proposal
    */
    function levelUpApprentice(uint256 _tokenId, uint8 _attribute1, uint8 _attribute2) external onlyRole(DAO_AGENT_ROLE) {
         uint16 _attributeSet = apprentices[_tokenId].attributeSet;
        _setAttributes(_tokenId, _attribute1, _attribute2, _attributeSet);
    }

    /* @dev This allows an adapter in future to mint the necessary tokens
    *       if they are not locked in a deposit account in the adapter
    */
    function mint(
        address to, 
        uint _tokenId, 
        string memory _tokenURI
    )
        public 
        onlyCrossChainAdapter() 
        crossChainActive() 
    {
        require(totalSupply() < 8888);
        _safeMint(to, _tokenId);
        //TODO: check the tokenURI overrides here and compliance
        _setTokenURI(_tokenId, _tokenURI);
    }

    function burn(uint256 tokenId) public onlyCrossChainAdapter() crossChainActive() {
        require(tokenId > 87);
        _burn(tokenId);
    }

    function connectedToken() public view returns (address) {
      return _connectedToken;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }   

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(AccessControl, ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _beforeTokenTransfer(
        address from, 
        address to, 
        uint256 tokenId
    )
        internal
        override(ERC721, ERC721Enumerable)
    {
        require(balanceOf(to) == 0, "KP: Already a guardian!");

        guardians[from] = false;
        guardians[to] = true;

        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId) internal override( ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
    
    /*** 
    *@dev initialize and upgrade the attributes of the apprentice
    */
    function _setAttributes(uint256 _tokenId, uint8 _attribute1, uint8 _attribute2, uint16 _attributeSet) private {
        apprentices[_tokenId].attribute1 = _attribute1;
        apprentices[_tokenId].attribute2 = _attribute2;
        apprentices[_tokenId].attributeSet = _attributeSet;
        _setTokenURI(_tokenId, string(abi.encodePacked(_attributeSet, _attribute1,_attribute2)));
        emit SetAttributes(_tokenId, _attribute1, _attribute2, _attributeSet);
    }

}
