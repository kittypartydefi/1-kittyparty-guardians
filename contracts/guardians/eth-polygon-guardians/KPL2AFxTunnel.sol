// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import { FxBaseChildTunnel } from '../../tunnel/FxBaseChildTunnel.sol';

interface IKPL2Guardian {
    function awakenTribe(uint tokenId, uint attributeSet) external;
}

/** 
 * @title FxStateChildTunnel
 */
contract KPL2AFxTunnel is AccessControl, FxBaseChildTunnel {

    uint256 public latestStateId;
    address public latestRootMessageSender;
    bytes public latestData;

    IKPL2Guardian public guardian;

    event SetKPChild(address _kpChild);
    event AwakenTheMinions(uint tokenId, uint16 attributeSet);

    constructor(address _fxChild) FxBaseChildTunnel(_fxChild) {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function _processMessageFromRoot(
        uint256 stateId, 
        address sender, 
        bytes memory data
    )
        internal
        override
        validateSender(sender) 
    {
        latestStateId = stateId;
        latestRootMessageSender = sender;
        (uint tokenId, uint16 attributeSet) = abi.decode(data,(uint,uint16));

        emit AwakenTheMinions(tokenId, attributeSet);
        guardian.awakenTribe(tokenId, attributeSet);
    }

    function setKPChild(IKPL2Guardian _kpGuardian) external onlyRole(DEFAULT_ADMIN_ROLE) {
        guardian = _kpGuardian;
        emit SetKPChild(address(_kpGuardian));
    }
}
