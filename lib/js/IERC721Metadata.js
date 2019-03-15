"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IERC721Metadata = exports.IERC721Metadata = 
{
  "contractName": "IERC721Metadata",
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
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "operator",
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
          "name": "owner",
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
          "name": "balance",
          "type": "uint256"
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
          "name": "operator",
          "type": "address"
        },
        {
          "name": "_approved",
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
          "name": "data",
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./IERC721.sol\";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract IERC721Metadata is IERC721 {\n    function name() external view returns (string);\n    function symbol() external view returns (string);\n    function tokenURI(uint256 tokenId) external view returns (string);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Metadata.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Metadata.sol",
    "exportedSymbols": {
      "IERC721Metadata": [
        34892
      ]
    },
    "id": 34893,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34871,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:117"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 34872,
        "nodeType": "ImportDirective",
        "scope": 34893,
        "sourceUnit": 34831,
        "src": "26:23:117",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34873,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34830,
              "src": "235:7:117",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$34830",
                "typeString": "contract IERC721"
              }
            },
            "id": 34874,
            "nodeType": "InheritanceSpecifier",
            "src": "235:7:117"
          }
        ],
        "contractDependencies": [
          8725,
          34830
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 34892,
        "linearizedBaseContracts": [
          34892,
          34830,
          8725
        ],
        "name": "IERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 34879,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34875,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "262:2:117"
            },
            "payable": false,
            "returnParameters": {
              "id": 34878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34877,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34879,
                  "src": "288:6:117",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34876,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:6:117",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:8:117"
            },
            "scope": 34892,
            "src": "249:47:117",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34884,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34880,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "316:2:117"
            },
            "payable": false,
            "returnParameters": {
              "id": 34883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34882,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34884,
                  "src": "342:6:117",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34881,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:6:117",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "341:8:117"
            },
            "scope": 34892,
            "src": "301:49:117",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34891,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34886,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34891,
                  "src": "373:15:117",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:117",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:17:117"
            },
            "payable": false,
            "returnParameters": {
              "id": 34890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34889,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34891,
                  "src": "413:6:117",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34888,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "413:6:117",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "412:8:117"
            },
            "scope": 34892,
            "src": "355:66:117",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 34893,
        "src": "207:216:117"
      }
    ],
    "src": "0:424:117"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721Metadata.sol",
    "exportedSymbols": {
      "IERC721Metadata": [
        34892
      ]
    },
    "id": 34893,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34871,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:117"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/IERC721.sol",
        "file": "./IERC721.sol",
        "id": 34872,
        "nodeType": "ImportDirective",
        "scope": 34893,
        "sourceUnit": 34831,
        "src": "26:23:117",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34873,
              "name": "IERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34830,
              "src": "235:7:117",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC721_$34830",
                "typeString": "contract IERC721"
              }
            },
            "id": 34874,
            "nodeType": "InheritanceSpecifier",
            "src": "235:7:117"
          }
        ],
        "contractDependencies": [
          8725,
          34830
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 34892,
        "linearizedBaseContracts": [
          34892,
          34830,
          8725
        ],
        "name": "IERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 34879,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34875,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "262:2:117"
            },
            "payable": false,
            "returnParameters": {
              "id": 34878,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34877,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34879,
                  "src": "288:6:117",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34876,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:6:117",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:8:117"
            },
            "scope": 34892,
            "src": "249:47:117",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34884,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34880,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "316:2:117"
            },
            "payable": false,
            "returnParameters": {
              "id": 34883,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34882,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34884,
                  "src": "342:6:117",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34881,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "342:6:117",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "341:8:117"
            },
            "scope": 34892,
            "src": "301:49:117",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 34891,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34886,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34891,
                  "src": "373:15:117",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34885,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:7:117",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:17:117"
            },
            "payable": false,
            "returnParameters": {
              "id": 34890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34889,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34891,
                  "src": "413:6:117",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34888,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "413:6:117",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "412:8:117"
            },
            "scope": 34892,
            "src": "355:66:117",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 34893,
        "src": "207:216:117"
      }
    ],
    "src": "0:424:117"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.876Z",
  "devdoc": {
    "methods": {
      "supportsInterface(bytes4)": {
        "details": "Interface identification is specified in ERC-165. This function uses less than 30,000 gas.",
        "params": {
          "interfaceId": "The interface identifier, as specified in ERC-165"
        }
      }
    },
    "title": "ERC-721 Non-Fungible Token Standard, optional metadata extension"
  },
  "userdoc": {
    "methods": {
      "supportsInterface(bytes4)": {
        "notice": "Query if a contract implements an interface"
      }
    }
  }
}