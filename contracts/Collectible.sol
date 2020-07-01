pragma solidity >=0.4.21 <0.7.0;
pragma experimental ABIEncoderV2;

// Contracts
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";


contract Collectible is ERC721Full {
    struct FullAsset {
        string name;
        string description;
        string multiHash;
    }

    struct Asset {
        string name;
        string description;
        uint256 parentId;
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
        string memory description,
        string memory multiHash
    )
    public returns (uint256)
    {
        uint256 tokenId = _assets.push(
            Asset(name, description, _assets.length)) - 1;

        ERC721Enumerable._mint(msg.sender, tokenId);
        ERC721Metadata._setTokenURI(tokenId, multiHash);

        return tokenId;
    }

    function mint(
        string memory name,
        string memory description,
        string memory multiHash,
        uint256 parentId
    )
    public returns (uint256)
    {
        uint256 tokenId = _assets.push(Asset(name, description, parentId)) - 1;

        ERC721Enumerable._mint(msg.sender, tokenId);
        ERC721Metadata._setTokenURI(tokenId, multiHash);

        return tokenId;
    }

    function multiMint(FullAsset[] memory data) public returns (uint256) {
        uint256 parentId = this.mint(
            data[0].name,
            data[0].description,
            data[0].multiHash);

        for (uint i = 1; i < data.length; i++) {
            this.mint(data[i].name, data[i].description, data[i].multiHash, parentId);
        }
    }

    function collectibleData(uint256 tokenId) public view returns
    (
        string memory, string memory
    )
    {
        return (
            _assets[tokenId].name,
            _assets[tokenId].description
        );
    }

    function collectiblesOf(address owner) public view returns (uint256[] memory) {
        return ERC721Enumerable._tokensOfOwner(owner);
    }
}