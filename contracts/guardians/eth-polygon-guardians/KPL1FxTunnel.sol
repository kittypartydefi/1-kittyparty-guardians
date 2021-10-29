// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import { FxBaseRootTunnel } from '../../tunnel/FxBaseRootTunnel.sol';

interface IKPGuardian {
    function getAttributes(uint tokenId) external view returns (uint16 attributeSet);
    function ownerOf(uint256 tokenId) external view returns (address);
    function isGuardian(address _guardian) external view returns(bool);
}
/** 
 * @title FxStateRootTunnel
 */
contract KPL1FxTunnel is AccessControl, FxBaseRootTunnel {
    IKPGuardian public guardian;
    
    event SetKPGuardian(address _kpGuardian);
    constructor(address _checkpointManager, address _fxRoot) FxBaseRootTunnel(_checkpointManager, _fxRoot) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function _processMessageFromChild(bytes memory data) internal override {}

    function bringForthTheApprentices(uint tokenId) external {
        require(guardian.ownerOf(tokenId) == msg.sender);
        require(guardian.isGuardian(msg.sender));
        _sendMessageToChild(abi.encode(tokenId, guardian.getAttributes(tokenId)));
    }

    function setKPGuardian(IKPGuardian _kpGuardian) external onlyRole(DEFAULT_ADMIN_ROLE) {
        guardian = _kpGuardian;
        emit SetKPGuardian(address(_kpGuardian));
    }
}
