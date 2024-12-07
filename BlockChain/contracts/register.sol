// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

/// @title Land Registry Smart Contract
/// @notice This contract is used for seller registration and storing land document details.
/// @custom:dev-run-script ./scripts/deploy_and_interact.js
contract LandRegistry {
    struct Seller {
        string name;            // Seller's name
        string aadhaarNumber;   // Aadhaar card number
        string panCardNumber;   // PAN card number
        string landDocumentHash; // IPFS hash or file hash for land document
        address sellerAddress;   // Seller's Ethereum address
    }

    // Mapping to store seller data based on wallet address
    mapping(address => Seller) public sellers;

    // Event to notify the addition of seller data
    event SellerRegistered(
        address indexed sellerAddress,
        string name,
        string aadhaarNumber,
        string panCardNumber,
        string landDocumentHash
    );

    // Modifier to check if the sender is already registered
    modifier notRegistered() {
        require(bytes(sellers[msg.sender].name).length == 0, "Seller already registered");
        _;
    }

    // Function to register seller information
    function registerSeller(
        string memory _name,
        string memory _aadhaarNumber,
        string memory _panCardNumber,
        string memory _landDocumentHash
    ) public notRegistered {
        require(bytes(_name).length > 0, "Name is required");
        require(bytes(_aadhaarNumber).length > 0, "Aadhaar card number is required");
        require(bytes(_panCardNumber).length > 0, "PAN card number is required");
        require(bytes(_landDocumentHash).length > 0, "Land document hash is required");

        // Store seller data
        sellers[msg.sender] = Seller({
            name: _name,
            aadhaarNumber: _aadhaarNumber,
            panCardNumber: _panCardNumber,
            landDocumentHash: _landDocumentHash,
            sellerAddress: msg.sender
        });

        // Emit the registration event
        emit SellerRegistered(msg.sender, _name, _aadhaarNumber, _panCardNumber, _landDocumentHash);
    }

    // Function to retrieve seller information
    function getSeller(address _sellerAddress)
        public
        view
        returns (
            string memory name,
            string memory aadhaarNumber,
            string memory panCardNumber,
            string memory landDocumentHash
        )
    {
        Seller memory seller = sellers[_sellerAddress];
        require(bytes(seller.name).length > 0, "Seller not found");

        return (
            seller.name,
            seller.aadhaarNumber,
            seller.panCardNumber,
            seller.landDocumentHash
        );
    }
}
