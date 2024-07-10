// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; // declare the version of solidity to compile this contract. This must match the version of solidity in your hardhat.config.js file

// add ownable and ERC721.sol
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Supply.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

struct NFTListing {
    uint256 tokenId;
    uint256 price;
    address seller;
    string tokenURI;
}

contract ProsoccerNFT is ERC721URIStorage, Ownable {
    uint256 private _tokenId;
    mapping(uint256 => NFTListing) private _listings;

    event NFTTransfer(uint256 tokenID, address from, address to, string tokenURI, uint256 price);

    // pass arguments for name and symbol
    /* @dev Set the name and token tracker for our contract
     * @return This will name the token each time it is minted
     */
    constructor(
        address initialOwner,
        string memory name,
        string memory symbol
    ) Ownable(initialOwner) ERC721(name, symbol) {}

    function mint(string memory tokenURI) public payable onlyOwner {
        _safeMint(msg.sender, _tokenId);
        _setTokenURI(_tokenId, tokenURI);

        unchecked {
            _tokenId++;
        }
    }

    function mintAndListToken(string memory tokenURI) public payable onlyOwner {
        _safeMint(msg.sender, _tokenId);
        _setTokenURI(_tokenId, tokenURI);

        _transfer(msg.sender, address(this), _tokenId);

        _listings[_tokenId] = NFTListing(_tokenId, msg.value + 100, msg.sender, tokenURI);

        unchecked {
            _tokenId++;
        }
    }

    function listToken(uint256 tokenId, uint256 price) public {
        require(_ownerOf(tokenId) != address(0), "ERC721: Nonexistent token");
        require(ownerOf(tokenId) == msg.sender, "ERC721: Not the owner");

        _transfer(msg.sender, address(this), tokenId);

        _listings[tokenId] = NFTListing(tokenId, price, msg.sender, tokenURI(tokenId));
    }

    function getListing(uint256 tokenId) public view returns (NFTListing memory) {
        return _listings[tokenId];
    }

    function getAllListings() public view returns (NFTListing[] memory) {
        NFTListing[] memory listings = new NFTListing[](_tokenId);

        for (uint256 i = 0; i < _tokenId; i++) {
            listings[i] = _listings[i];
        }

        return listings;
    }

    function clearListing(uint256 tokenID) private {
        _listings[tokenID].price = 0;
        _listings[tokenID].seller = address(0);
    }

    // Function to delist a token
    function delistToken(uint256 tokenId) public {
        require(_ownerOf(tokenId) != address(0), "ERC721 Nonexistent token");
        // require(ownerOf(tokenId) == msg.sender, "ERC721: Not the owner");

        NFTListing memory listing = _listings[tokenId];
        require(listing.price > 0, "NFTMarket: nft not for sale");
        require(listing.seller == msg.sender, "NFTMarket: you're not the seller");
        _transfer(address(this), msg.sender, tokenId);
        clearListing(tokenId);
    }

    function onERC721Received(
        address,
        address,
        uint256,
        bytes calldata
    ) external pure returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }

    // Function to buy a token
    function buyToken(uint256 tokenId) public payable {
        require(_ownerOf(tokenId) != address(0), "ERC721: Nonexistent token");
        require(msg.value >= _listings[tokenId].price, "ERC721: Invalid price");
        address seller = _listings[tokenId].seller;
        address buyer = msg.sender;
        payable(seller).transfer(msg.value);
        _transfer(address(this), buyer, tokenId);

        clearListing(tokenId);
        emit NFTTransfer(tokenId, seller, buyer, getTokenURI(tokenId), msg.value);
    }

    // Function to withdraw funds
    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function getTokenURI(uint256 tokenId) public view virtual returns (string memory) {
        require(_ownerOf(tokenId) != address(0), "URI query for nonexistent token");
        return super.tokenURI(tokenId);
    }
}
