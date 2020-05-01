pragma solidity >=0.4.21 <0.7.0;
// pragma experimental ABIEncoderV2;

// Contracts
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";


contract Collectible is ERC721Full {
    struct Asset {
        string name;
        string details;
    }

    Asset[] _assets;


    constructor()
        ERC721Full("Asset Collectible", "AST")
        public
    {}

    function setBaseURI(string memory baseURI) public {
        ERC721Metadata._setBaseURI(baseURI);
    }

    function mint(
        string memory name,
        string memory details,
        string memory multiHash
    )
    public returns (bool)
    {
        uint256 tokenId = _assets.push(Asset(name, details)) - 1;

        ERC721Enumerable._mint(msg.sender, tokenId);
        ERC721Metadata._setTokenURI(tokenId, multiHash);
    }

    function collectibleData(uint256 tokenId) public view returns
    (
        string memory, string memory
    )
    {
        return (
            _assets[tokenId].name,
            _assets[tokenId].details
        );
    }

    function collectiblesOf(address owner) public view returns (uint256[] memory) {
        return ERC721Enumerable._tokensOfOwner(owner);
    }
}