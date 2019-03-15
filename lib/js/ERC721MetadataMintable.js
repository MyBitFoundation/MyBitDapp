"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC721MetadataMintable = exports.ERC721MetadataMintable = 
{
  "contractName": "ERC721MetadataMintable",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "minter",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_minter",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "mintWithTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishMinting",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "canMint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./ERC721Metadata.sol\";\n\n\n/**\n * @title ERC721MetadataMintable\n * @dev ERC721 minting logic with metadata\n */\ncontract ERC721MetadataMintable is ERC721, ERC721Metadata {\n\n    address public minter;\n    bool public mintingFinished;\n\n    // @notice constructor: initialized\n    constructor(address _minter)\n    public {\n        minter = _minter;\n    }\n\n    /**\n     * @dev Function to mint tokens\n     * @param to The address that will receive the minted tokens.\n     * @param tokenId The token id to mint.\n     * @param tokenURI The token URI of the minted token.\n     * @return A boolean that indicates if the operation was successful.\n     */\n    function mintWithTokenURI(address to, uint256 tokenId, string tokenURI)\n    public\n    returns (bool) {\n        require(canMint(msg.sender));\n        _mint(to, tokenId);\n        _setTokenURI(tokenId, tokenURI);\n        return true;\n    }\n\n    function finishMinting()\n    public\n    returns (bool) {\n      require(canMint(msg.sender));\n      mintingFinished = true;\n      return true;\n    }\n\n    function canMint(address sender)\n    public\n    view\n    returns (bool) {\n      return (!mintingFinished && sender == minter);\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721MetadataMintable.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721MetadataMintable.sol",
    "exportedSymbols": {
      "ERC721MetadataMintable": [
        34648
      ]
    },
    "id": 34649,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34562,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:112"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Metadata.sol",
        "file": "./ERC721Metadata.sol",
        "id": 34563,
        "nodeType": "ImportDirective",
        "scope": 34649,
        "sourceUnit": 34561,
        "src": "26:30:112",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34564,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34086,
              "src": "178:6:112",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$34086",
                "typeString": "contract ERC721"
              }
            },
            "id": 34565,
            "nodeType": "InheritanceSpecifier",
            "src": "178:6:112"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34566,
              "name": "ERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34560,
              "src": "186:14:112",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Metadata_$34560",
                "typeString": "contract ERC721Metadata"
              }
            },
            "id": 34567,
            "nodeType": "InheritanceSpecifier",
            "src": "186:14:112"
          }
        ],
        "contractDependencies": [
          8578,
          8725,
          34086,
          34560,
          34830,
          34892
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721MetadataMintable\n@dev ERC721 minting logic with metadata",
        "fullyImplemented": false,
        "id": 34648,
        "linearizedBaseContracts": [
          34648,
          34560,
          34892,
          34086,
          34830,
          8578,
          8725
        ],
        "name": "ERC721MetadataMintable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 34569,
            "name": "minter",
            "nodeType": "VariableDeclaration",
            "scope": 34648,
            "src": "208:21:112",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 34568,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "208:7:112",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 34571,
            "name": "mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 34648,
            "src": "235:27:112",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 34570,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "235:4:112",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34580,
              "nodeType": "Block",
              "src": "349:33:112",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34578,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 34576,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34569,
                      "src": "359:6:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34577,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34573,
                      "src": "368:7:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "359:16:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 34579,
                  "nodeType": "ExpressionStatement",
                  "src": "359:16:112"
                }
              ]
            },
            "documentation": null,
            "id": 34581,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34573,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 34581,
                  "src": "321:15:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34572,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "321:7:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "320:17:112"
            },
            "payable": false,
            "returnParameters": {
              "id": 34575,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "349:0:112"
            },
            "scope": 34648,
            "src": "309:73:112",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34611,
              "nodeType": "Block",
              "src": "783:135:112",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 34594,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "809:3:112",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 34595,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "809:10:112",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 34593,
                          "name": "canMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34647,
                          "src": "801:7:112",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 34596,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "801:19:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 34592,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "793:7:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "793:28:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34598,
                  "nodeType": "ExpressionStatement",
                  "src": "793:28:112"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34600,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34583,
                        "src": "837:2:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34601,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34585,
                        "src": "841:7:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34599,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33916,
                      "src": "831:5:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34602,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "831:18:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34603,
                  "nodeType": "ExpressionStatement",
                  "src": "831:18:112"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34605,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34585,
                        "src": "872:7:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34606,
                        "name": "tokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34587,
                        "src": "881:8:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 34604,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34529,
                      "src": "859:12:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 34607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "859:31:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34608,
                  "nodeType": "ExpressionStatement",
                  "src": "859:31:112"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 34609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "907:4:112",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 34591,
                  "id": 34610,
                  "nodeType": "Return",
                  "src": "900:11:112"
                }
              ]
            },
            "documentation": "@dev Function to mint tokens\n@param to The address that will receive the minted tokens.\n@param tokenId The token id to mint.\n@param tokenURI The token URI of the minted token.\n@return A boolean that indicates if the operation was successful.",
            "id": 34612,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mintWithTokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34583,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34612,
                  "src": "707:10:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34582,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "707:7:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34585,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34612,
                  "src": "719:15:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34584,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "719:7:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34587,
                  "name": "tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 34612,
                  "src": "736:15:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34586,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "736:6:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "706:46:112"
            },
            "payable": false,
            "returnParameters": {
              "id": 34591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34590,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34612,
                  "src": "777:4:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34589,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "777:4:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "776:6:112"
            },
            "scope": 34648,
            "src": "681:237:112",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34630,
              "nodeType": "Block",
              "src": "979:92:112",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 34619,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "1003:3:112",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 34620,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1003:10:112",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 34618,
                          "name": "canMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34647,
                          "src": "995:7:112",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 34621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "995:19:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 34617,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "987:7:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "987:28:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34623,
                  "nodeType": "ExpressionStatement",
                  "src": "987:28:112"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 34624,
                      "name": "mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34571,
                      "src": "1023:15:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 34625,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1041:4:112",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1023:22:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 34627,
                  "nodeType": "ExpressionStatement",
                  "src": "1023:22:112"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 34628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1060:4:112",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 34616,
                  "id": 34629,
                  "nodeType": "Return",
                  "src": "1053:11:112"
                }
              ]
            },
            "documentation": null,
            "id": 34631,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34613,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "946:2:112"
            },
            "payable": false,
            "returnParameters": {
              "id": 34616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34615,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34631,
                  "src": "973:4:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34614,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:4:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:6:112"
            },
            "scope": 34648,
            "src": "924:147:112",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34646,
              "nodeType": "Block",
              "src": "1149:60:112",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 34643,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 34639,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1165:16:112",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 34638,
                            "name": "mintingFinished",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34571,
                            "src": "1166:15:112",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 34642,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 34640,
                            "name": "sender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34633,
                            "src": "1185:6:112",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 34641,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34569,
                            "src": "1195:6:112",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1185:16:112",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1165:36:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 34644,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1164:38:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 34637,
                  "id": 34645,
                  "nodeType": "Return",
                  "src": "1157:45:112"
                }
              ]
            },
            "documentation": null,
            "id": 34647,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "canMint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34633,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 34647,
                  "src": "1094:14:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34632,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1094:7:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1093:16:112"
            },
            "payable": false,
            "returnParameters": {
              "id": 34637,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34636,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34647,
                  "src": "1143:4:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34635,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1143:4:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1142:6:112"
            },
            "scope": 34648,
            "src": "1077:132:112",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34649,
        "src": "143:1068:112"
      }
    ],
    "src": "0:1212:112"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721MetadataMintable.sol",
    "exportedSymbols": {
      "ERC721MetadataMintable": [
        34648
      ]
    },
    "id": 34649,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34562,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:112"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Metadata.sol",
        "file": "./ERC721Metadata.sol",
        "id": 34563,
        "nodeType": "ImportDirective",
        "scope": 34649,
        "sourceUnit": 34561,
        "src": "26:30:112",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34564,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34086,
              "src": "178:6:112",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$34086",
                "typeString": "contract ERC721"
              }
            },
            "id": 34565,
            "nodeType": "InheritanceSpecifier",
            "src": "178:6:112"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34566,
              "name": "ERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34560,
              "src": "186:14:112",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Metadata_$34560",
                "typeString": "contract ERC721Metadata"
              }
            },
            "id": 34567,
            "nodeType": "InheritanceSpecifier",
            "src": "186:14:112"
          }
        ],
        "contractDependencies": [
          8578,
          8725,
          34086,
          34560,
          34830,
          34892
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721MetadataMintable\n@dev ERC721 minting logic with metadata",
        "fullyImplemented": false,
        "id": 34648,
        "linearizedBaseContracts": [
          34648,
          34560,
          34892,
          34086,
          34830,
          8578,
          8725
        ],
        "name": "ERC721MetadataMintable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 34569,
            "name": "minter",
            "nodeType": "VariableDeclaration",
            "scope": 34648,
            "src": "208:21:112",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 34568,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "208:7:112",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 34571,
            "name": "mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 34648,
            "src": "235:27:112",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 34570,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "235:4:112",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34580,
              "nodeType": "Block",
              "src": "349:33:112",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34578,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 34576,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34569,
                      "src": "359:6:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34577,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34573,
                      "src": "368:7:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "359:16:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 34579,
                  "nodeType": "ExpressionStatement",
                  "src": "359:16:112"
                }
              ]
            },
            "documentation": null,
            "id": 34581,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34574,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34573,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 34581,
                  "src": "321:15:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34572,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "321:7:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "320:17:112"
            },
            "payable": false,
            "returnParameters": {
              "id": 34575,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "349:0:112"
            },
            "scope": 34648,
            "src": "309:73:112",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34611,
              "nodeType": "Block",
              "src": "783:135:112",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 34594,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "809:3:112",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 34595,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "809:10:112",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 34593,
                          "name": "canMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34647,
                          "src": "801:7:112",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 34596,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "801:19:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 34592,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "793:7:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34597,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "793:28:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34598,
                  "nodeType": "ExpressionStatement",
                  "src": "793:28:112"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34600,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34583,
                        "src": "837:2:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34601,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34585,
                        "src": "841:7:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 34599,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33916,
                      "src": "831:5:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34602,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "831:18:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34603,
                  "nodeType": "ExpressionStatement",
                  "src": "831:18:112"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34605,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34585,
                        "src": "872:7:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34606,
                        "name": "tokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34587,
                        "src": "881:8:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 34604,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34529,
                      "src": "859:12:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 34607,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "859:31:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34608,
                  "nodeType": "ExpressionStatement",
                  "src": "859:31:112"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 34609,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "907:4:112",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 34591,
                  "id": 34610,
                  "nodeType": "Return",
                  "src": "900:11:112"
                }
              ]
            },
            "documentation": "@dev Function to mint tokens\n@param to The address that will receive the minted tokens.\n@param tokenId The token id to mint.\n@param tokenURI The token URI of the minted token.\n@return A boolean that indicates if the operation was successful.",
            "id": 34612,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mintWithTokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34588,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34583,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34612,
                  "src": "707:10:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34582,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "707:7:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34585,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34612,
                  "src": "719:15:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34584,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "719:7:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34587,
                  "name": "tokenURI",
                  "nodeType": "VariableDeclaration",
                  "scope": 34612,
                  "src": "736:15:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34586,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "736:6:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "706:46:112"
            },
            "payable": false,
            "returnParameters": {
              "id": 34591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34590,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34612,
                  "src": "777:4:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34589,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "777:4:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "776:6:112"
            },
            "scope": 34648,
            "src": "681:237:112",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34630,
              "nodeType": "Block",
              "src": "979:92:112",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 34619,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "1003:3:112",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 34620,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1003:10:112",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "id": 34618,
                          "name": "canMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34647,
                          "src": "995:7:112",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 34621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "995:19:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 34617,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "987:7:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "987:28:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34623,
                  "nodeType": "ExpressionStatement",
                  "src": "987:28:112"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 34624,
                      "name": "mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34571,
                      "src": "1023:15:112",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 34625,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1041:4:112",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1023:22:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 34627,
                  "nodeType": "ExpressionStatement",
                  "src": "1023:22:112"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 34628,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1060:4:112",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 34616,
                  "id": 34629,
                  "nodeType": "Return",
                  "src": "1053:11:112"
                }
              ]
            },
            "documentation": null,
            "id": 34631,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34613,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "946:2:112"
            },
            "payable": false,
            "returnParameters": {
              "id": 34616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34615,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34631,
                  "src": "973:4:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34614,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "973:4:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "972:6:112"
            },
            "scope": 34648,
            "src": "924:147:112",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34646,
              "nodeType": "Block",
              "src": "1149:60:112",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "id": 34643,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 34639,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "1165:16:112",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 34638,
                            "name": "mintingFinished",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34571,
                            "src": "1166:15:112",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 34642,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 34640,
                            "name": "sender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34633,
                            "src": "1185:6:112",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 34641,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34569,
                            "src": "1195:6:112",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1185:16:112",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1165:36:112",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 34644,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1164:38:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 34637,
                  "id": 34645,
                  "nodeType": "Return",
                  "src": "1157:45:112"
                }
              ]
            },
            "documentation": null,
            "id": 34647,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "canMint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34633,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 34647,
                  "src": "1094:14:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34632,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1094:7:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1093:16:112"
            },
            "payable": false,
            "returnParameters": {
              "id": 34637,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34636,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34647,
                  "src": "1143:4:112",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34635,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1143:4:112",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1142:6:112"
            },
            "scope": 34648,
            "src": "1077:132:112",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34649,
        "src": "143:1068:112"
      }
    ],
    "src": "0:1212:112"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.875Z",
  "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "Approves another address to transfer the given token ID The zero address indicates there is no approved address. There can only be one approved address per token at a given time. Can only be called by the token owner or an approved operator.",
        "params": {
          "to": "address to be approved for the given token ID",
          "tokenId": "uint256 ID of the token to be approved"
        }
      },
      "balanceOf(address)": {
        "details": "Gets the balance of the specified address",
        "params": {
          "owner": "address to query the balance of"
        },
        "return": "uint256 representing the amount owned by the passed address"
      },
      "getApproved(uint256)": {
        "details": "Gets the approved address for a token ID, or zero if no address set Reverts if the token ID does not exist.",
        "params": {
          "tokenId": "uint256 ID of the token to query the approval of"
        },
        "return": "address currently approved for the given token ID"
      },
      "isApprovedForAll(address,address)": {
        "details": "Tells whether an operator is approved by a given owner",
        "params": {
          "operator": "operator address which you want to query the approval of",
          "owner": "owner address which you want to query the approval of"
        },
        "return": "bool whether the given operator is approved by the given owner"
      },
      "mintWithTokenURI(address,uint256,string)": {
        "details": "Function to mint tokens",
        "params": {
          "to": "The address that will receive the minted tokens.",
          "tokenId": "The token id to mint.",
          "tokenURI": "The token URI of the minted token."
        },
        "return": "A boolean that indicates if the operation was successful."
      },
      "name()": {
        "details": "Gets the token name",
        "return": "string representing the token name"
      },
      "ownerOf(uint256)": {
        "details": "Gets the owner of the specified token ID",
        "params": {
          "tokenId": "uint256 ID of the token to query the owner of"
        },
        "return": "owner address currently marked as the owner of the given token ID"
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted.     * Requires the msg sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "Safely transfers the ownership of a given token ID to another address If the target address is a contract, it must implement `onERC721Received`, which is called upon a safe transfer, and return the magic value `bytes4(keccak256(\"onERC721Received(address,address,uint256,bytes)\"))`; otherwise, the transfer is reverted. Requires the msg sender to be the owner, approved, or operator",
        "params": {
          "_data": "bytes data to send along with a safe transfer check",
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      },
      "setApprovalForAll(address,bool)": {
        "details": "Sets or unsets the approval of a given operator An operator is allowed to transfer all tokens of the sender on their behalf",
        "params": {
          "approved": "representing the status of the approval to be set",
          "to": "operator address to set the approval"
        }
      },
      "supportsInterface(bytes4)": {
        "details": "implement supportsInterface(bytes4) using a lookup table"
      },
      "symbol()": {
        "details": "Gets the token symbol",
        "return": "string representing the token symbol"
      },
      "tokenURI(uint256)": {
        "details": "Returns an URI for a given token ID Throws if the token ID does not exist. May return an empty string.",
        "params": {
          "tokenId": "uint256 ID of the token to query"
        }
      },
      "transferFrom(address,address,uint256)": {
        "details": "Transfers the ownership of a given token ID to another address Usage of this method is discouraged, use `safeTransferFrom` whenever possible Requires the msg sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      }
    },
    "title": "ERC721MetadataMintable"
  },
  "userdoc": {
    "methods": {}
  }
}