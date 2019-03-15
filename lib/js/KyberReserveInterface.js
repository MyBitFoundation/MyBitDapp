"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var KyberReserveInterface = exports.KyberReserveInterface = 
{
  "contractName": "KyberReserveInterface",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "srcToken",
          "type": "address"
        },
        {
          "name": "srcAmount",
          "type": "uint256"
        },
        {
          "name": "destToken",
          "type": "address"
        },
        {
          "name": "destAddress",
          "type": "address"
        },
        {
          "name": "conversionRate",
          "type": "uint256"
        },
        {
          "name": "validate",
          "type": "bool"
        }
      ],
      "name": "trade",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "src",
          "type": "address"
        },
        {
          "name": "dest",
          "type": "address"
        },
        {
          "name": "srcQty",
          "type": "uint256"
        },
        {
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "getConversionRate",
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
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/ERC20.sol\";\n\n/// @title Kyber Reserve contract\ninterface KyberReserveInterface {\n\n    function trade(\n        ERC20 srcToken,\n        uint srcAmount,\n        ERC20 destToken,\n        address destAddress,\n        uint conversionRate,\n        bool validate\n    )\n        external\n        payable\n        returns(bool);\n\n    function getConversionRate(ERC20 src, ERC20 dest, uint srcQty, uint blockNumber) external view returns(uint);\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/KyberReserveInterface.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/KyberReserveInterface.sol",
    "exportedSymbols": {
      "KyberReserveInterface": [
        15674
      ]
    },
    "id": 15675,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 15642,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:51"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 15643,
        "nodeType": "ImportDirective",
        "scope": 15675,
        "sourceUnit": 9534,
        "src": "26:33:51",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title Kyber Reserve contract",
        "fullyImplemented": false,
        "id": 15674,
        "linearizedBaseContracts": [
          15674
        ],
        "name": "KyberReserveInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 15660,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "trade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15656,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15645,
                  "name": "srcToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "158:14:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15644,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "158:5:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15647,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "182:14:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15646,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:4:51",
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
                  "id": 15649,
                  "name": "destToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "206:15:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15648,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "206:5:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15651,
                  "name": "destAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "231:19:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15650,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "231:7:51",
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
                  "id": 15653,
                  "name": "conversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "260:19:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15652,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:4:51",
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
                  "id": 15655,
                  "name": "validate",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "289:13:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 15654,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "289:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "148:160:51"
            },
            "payable": true,
            "returnParameters": {
              "id": 15659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15658,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "358:4:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 15657,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "358:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "357:6:51"
            },
            "scope": 15674,
            "src": "134:230:51",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 15673,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getConversionRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15662,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 15673,
                  "src": "397:9:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15661,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "397:5:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15664,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 15673,
                  "src": "408:10:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15663,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "408:5:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15666,
                  "name": "srcQty",
                  "nodeType": "VariableDeclaration",
                  "scope": 15673,
                  "src": "420:11:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15665,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:4:51",
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
                  "id": 15668,
                  "name": "blockNumber",
                  "nodeType": "VariableDeclaration",
                  "scope": 15673,
                  "src": "433:16:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15667,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "433:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "396:54:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 15672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15671,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15673,
                  "src": "473:4:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15670,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:6:51"
            },
            "scope": 15674,
            "src": "370:109:51",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 15675,
        "src": "95:386:51"
      }
    ],
    "src": "0:482:51"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/KyberReserveInterface.sol",
    "exportedSymbols": {
      "KyberReserveInterface": [
        15674
      ]
    },
    "id": 15675,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 15642,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:51"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/ERC20.sol",
        "file": "../interfaces/ERC20.sol",
        "id": 15643,
        "nodeType": "ImportDirective",
        "scope": 15675,
        "sourceUnit": 9534,
        "src": "26:33:51",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": "@title Kyber Reserve contract",
        "fullyImplemented": false,
        "id": 15674,
        "linearizedBaseContracts": [
          15674
        ],
        "name": "KyberReserveInterface",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 15660,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "trade",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15656,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15645,
                  "name": "srcToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "158:14:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15644,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "158:5:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15647,
                  "name": "srcAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "182:14:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15646,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "182:4:51",
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
                  "id": 15649,
                  "name": "destToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "206:15:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15648,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "206:5:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15651,
                  "name": "destAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "231:19:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15650,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "231:7:51",
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
                  "id": 15653,
                  "name": "conversionRate",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "260:19:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15652,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "260:4:51",
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
                  "id": 15655,
                  "name": "validate",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "289:13:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 15654,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "289:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "148:160:51"
            },
            "payable": true,
            "returnParameters": {
              "id": 15659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15658,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15660,
                  "src": "358:4:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 15657,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "358:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "357:6:51"
            },
            "scope": 15674,
            "src": "134:230:51",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 15673,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getConversionRate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15662,
                  "name": "src",
                  "nodeType": "VariableDeclaration",
                  "scope": 15673,
                  "src": "397:9:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15661,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "397:5:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15664,
                  "name": "dest",
                  "nodeType": "VariableDeclaration",
                  "scope": 15673,
                  "src": "408:10:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$9533",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15663,
                    "name": "ERC20",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 9533,
                    "src": "408:5:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$9533",
                      "typeString": "contract ERC20"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15666,
                  "name": "srcQty",
                  "nodeType": "VariableDeclaration",
                  "scope": 15673,
                  "src": "420:11:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15665,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:4:51",
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
                  "id": 15668,
                  "name": "blockNumber",
                  "nodeType": "VariableDeclaration",
                  "scope": 15673,
                  "src": "433:16:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15667,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "433:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "396:54:51"
            },
            "payable": false,
            "returnParameters": {
              "id": 15672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15671,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15673,
                  "src": "473:4:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15670,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:6:51"
            },
            "scope": 15674,
            "src": "370:109:51",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 15675,
        "src": "95:386:51"
      }
    ],
    "src": "0:482:51"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.644Z",
  "devdoc": {
    "methods": {},
    "title": "Kyber Reserve contract"
  },
  "userdoc": {
    "methods": {}
  }
}