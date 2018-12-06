"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ISmartToken = exports.ISmartToken = 
{
  "contractName": "ISmartToken",
  "abi": [
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "acceptOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_disable",
          "type": "bool"
        }
      ],
      "name": "disableTransfers",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
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
      "name": "issue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "destroy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\nimport './IERC20Token.sol';\nimport '../../utility/interfaces/IOwned.sol';\n\n/*\n    Smart Token interface\n*/\ncontract ISmartToken is IOwned, IERC20Token {\n    function disableTransfers(bool _disable) public;\n    function issue(address _to, uint256 _amount) public;\n    function destroy(address _from, uint256 _amount) public;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
    "exportedSymbols": {
      "ISmartToken": [
        8953
      ]
    },
    "id": 8954,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8927,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:31"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "./IERC20Token.sol",
        "id": 8928,
        "nodeType": "ImportDirective",
        "scope": 8954,
        "sourceUnit": 8902,
        "src": "25:27:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
        "file": "../../utility/interfaces/IOwned.sol",
        "id": 8929,
        "nodeType": "ImportDirective",
        "scope": 8954,
        "sourceUnit": 9888,
        "src": "53:45:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8930,
              "name": "IOwned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9887,
              "src": "156:6:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IOwned_$9887",
                "typeString": "contract IOwned"
              }
            },
            "id": 8931,
            "nodeType": "InheritanceSpecifier",
            "src": "156:6:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8932,
              "name": "IERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8901,
              "src": "164:11:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                "typeString": "contract IERC20Token"
              }
            },
            "id": 8933,
            "nodeType": "InheritanceSpecifier",
            "src": "164:11:31"
          }
        ],
        "contractDependencies": [
          8901,
          9887
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8953,
        "linearizedBaseContracts": [
          8953,
          8901,
          9887
        ],
        "name": "ISmartToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8938,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "disableTransfers",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8935,
                  "name": "_disable",
                  "nodeType": "VariableDeclaration",
                  "scope": 8938,
                  "src": "208:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8934,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:15:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8937,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "229:0:31"
            },
            "scope": 8953,
            "src": "182:48:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8945,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8943,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8940,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8945,
                  "src": "250:11:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8939,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:7:31",
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
                  "id": 8942,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8945,
                  "src": "263:15:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8941,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "249:30:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8944,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "286:0:31"
            },
            "scope": 8953,
            "src": "235:52:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8952,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8947,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8952,
                  "src": "309:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:31",
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
                  "id": 8949,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8952,
                  "src": "324:15:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8948,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "324:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "308:32:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8951,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "347:0:31"
            },
            "scope": 8953,
            "src": "292:56:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8954,
        "src": "132:218:31"
      }
    ],
    "src": "0:351:31"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
    "exportedSymbols": {
      "ISmartToken": [
        8953
      ]
    },
    "id": 8954,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8927,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:31"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/IERC20Token.sol",
        "file": "./IERC20Token.sol",
        "id": 8928,
        "nodeType": "ImportDirective",
        "scope": 8954,
        "sourceUnit": 8902,
        "src": "25:27:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IOwned.sol",
        "file": "../../utility/interfaces/IOwned.sol",
        "id": 8929,
        "nodeType": "ImportDirective",
        "scope": 8954,
        "sourceUnit": 9888,
        "src": "53:45:31",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8930,
              "name": "IOwned",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9887,
              "src": "156:6:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IOwned_$9887",
                "typeString": "contract IOwned"
              }
            },
            "id": 8931,
            "nodeType": "InheritanceSpecifier",
            "src": "156:6:31"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8932,
              "name": "IERC20Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8901,
              "src": "164:11:31",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20Token_$8901",
                "typeString": "contract IERC20Token"
              }
            },
            "id": 8933,
            "nodeType": "InheritanceSpecifier",
            "src": "164:11:31"
          }
        ],
        "contractDependencies": [
          8901,
          9887
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 8953,
        "linearizedBaseContracts": [
          8953,
          8901,
          9887
        ],
        "name": "ISmartToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 8938,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "disableTransfers",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8935,
                  "name": "_disable",
                  "nodeType": "VariableDeclaration",
                  "scope": 8938,
                  "src": "208:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8934,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:4:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:15:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8937,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "229:0:31"
            },
            "scope": 8953,
            "src": "182:48:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8945,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "issue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8943,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8940,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8945,
                  "src": "250:11:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8939,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:7:31",
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
                  "id": 8942,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8945,
                  "src": "263:15:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8941,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "263:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "249:30:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8944,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "286:0:31"
            },
            "scope": 8953,
            "src": "235:52:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 8952,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "destroy",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8947,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 8952,
                  "src": "309:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8946,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:31",
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
                  "id": 8949,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8952,
                  "src": "324:15:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8948,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "324:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "308:32:31"
            },
            "payable": false,
            "returnParameters": {
              "id": 8951,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "347:0:31"
            },
            "scope": 8953,
            "src": "292:56:31",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8954,
        "src": "132:218:31"
      }
    ],
    "src": "0:351:31"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-06T01:09:52.890Z"
}