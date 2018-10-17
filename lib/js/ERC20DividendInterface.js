"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC20DividendInterface = exports.ERC20DividendInterface = 
{
  "contractName": "ERC20DividendInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
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
      "constant": false,
      "inputs": [
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "issueDividends",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
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
  "source": "pragma solidity ^0.4.24;\n\ninterface ERC20DividendInterface{\n  // @dev Function to mint tokens\n  // @param _to The address that will receive the minted tokens.\n  // @param _amount The amount of tokens to mint.\n  function mint(address _to, uint256 _amount) external returns (bool);\n\n  // @dev Function to stop minting new tokens.\n  function finishMinting() external returns (bool);\n\n  function issueDividends(uint _amount) external;\n\n  // @dev Total number of tokens in existence\n  function totalSupply() external view returns (uint256);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
    "exportedSymbols": {
      "ERC20DividendInterface": [
        6140
      ]
    },
    "id": 6141,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6115,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6140,
        "linearizedBaseContracts": [
          6140
        ],
        "name": "ERC20DividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6124,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6117,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6124,
                  "src": "225:11:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6116,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:21",
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
                  "id": 6119,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6124,
                  "src": "238:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6118,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6122,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6124,
                  "src": "273:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6121,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:21"
            },
            "scope": 6140,
            "src": "211:68:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6129,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6125,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6127,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6129,
                  "src": "373:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6126,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:21"
            },
            "scope": 6140,
            "src": "330:49:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6134,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6131,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6134,
                  "src": "407:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6130,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6133,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "429:0:21"
            },
            "scope": 6140,
            "src": "383:47:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6139,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6135,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "500:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6137,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6139,
                  "src": "526:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6136,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:9:21"
            },
            "scope": 6140,
            "src": "480:55:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6141,
        "src": "26:511:21"
      }
    ],
    "src": "0:538:21"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20DividendInterface.sol",
    "exportedSymbols": {
      "ERC20DividendInterface": [
        6140
      ]
    },
    "id": 6141,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6115,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:21"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6140,
        "linearizedBaseContracts": [
          6140
        ],
        "name": "ERC20DividendInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 6124,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6120,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6117,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 6124,
                  "src": "225:11:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6116,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "225:7:21",
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
                  "id": 6119,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6124,
                  "src": "238:15:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6118,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "238:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "224:30:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6122,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6124,
                  "src": "273:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6121,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "273:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "272:6:21"
            },
            "scope": 6140,
            "src": "211:68:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6129,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6125,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "352:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6127,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6129,
                  "src": "373:4:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6126,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "373:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "372:6:21"
            },
            "scope": 6140,
            "src": "330:49:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6134,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issueDividends",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6132,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6131,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 6134,
                  "src": "407:12:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6130,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:4:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "406:14:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6133,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "429:0:21"
            },
            "scope": 6140,
            "src": "383:47:21",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6139,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6135,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "500:2:21"
            },
            "payable": false,
            "returnParameters": {
              "id": 6138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6137,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6139,
                  "src": "526:7:21",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6136,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:21",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:9:21"
            },
            "scope": 6140,
            "src": "480:55:21",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 6141,
        "src": "26:511:21"
      }
    ],
    "src": "0:538:21"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-17T01:56:53.455Z"
}