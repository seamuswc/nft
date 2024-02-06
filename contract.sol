// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DAIForNFT is ERC721, Ownable(msg.sender) {
    IERC20 public dai; //arb: 0xda10009cbd5d07dd0cecc66161fc93d7c9000da1
    uint256 public tokenCounter;
    uint256 public NFT_COST; // NFT cost, set in constructor

    constructor(address _dai, uint256 _nftCost) ERC721("DAIForNFT", "D4N") {
        dai = IERC20(_dai);
        NFT_COST = _nftCost * 10**18; // Convert DAI to smallest unit
        tokenCounter = 0;
    }


    function viewApprovalAmount() public view returns (uint256) {
        return dai.allowance(msg.sender, address(this));
    }

    event NFTMinted(address indexed owner, uint256 indexed tokenId);

    function mintNFT() public {
        require(dai.transferFrom(msg.sender, address(this), NFT_COST), "DAI payment failed");
        
        tokenCounter++;
        _mint(msg.sender, tokenCounter);

        _setTokenURI(tokenCounter, "http://itadaku.xyz/meta.json");

        emit NFTMinted(msg.sender, tokenCounter);

    }

    function withdrawDAI(uint256 daiAmount) public onlyOwner {
        uint256 weiAmount = daiAmount * 10**18; // Convert DAI amount to wei
        require(dai.transfer(owner(), weiAmount), "DAI transfer failed");
    }



    // Optional: Implement _setTokenURI if you're setting token URIs
    // function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal { ... }
    mapping(uint256 => string) private _tokenURIs;


    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(ownerOf(tokenId) != address(0), "Token ID doesn't have a user: _setTokenURI");

        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(ownerOf(tokenId) != address(0), "Token ID doesn't have a user: tokenURI");

        string memory _tokenURI = _tokenURIs[tokenId];
        return _tokenURI;
    }


}

