// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract TestErc1155 is ERC1155 {    
    uint256 public constant Coins = 0;
    uint256 public constant TShirt = 1;

    constructor() ERC1155("https://raw.githubusercontent.com/moisesmarques/nft-assets/main/metadata{id}.json") {
        _mint(msg.sender, Coins, 10**27, "");
        _mint(msg.sender, TShirt, 10**9, "");
    }
}