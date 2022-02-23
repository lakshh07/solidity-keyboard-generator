//SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "hardhat/console.sol";

contract Keyboards {
    string[] public createdKeyboards;

    function getKeyboards() public view returns (string[] memory) {
        return createdKeyboards;
    }

    function create(string calldata _description) external {
        createdKeyboards.push(_description);
    }
}
