"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var IContractFeatures = exports.IContractFeatures = 
{
  "contractName": "IContractFeatures",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_contract",
          "type": "address"
        },
        {
          "name": "_features",
          "type": "uint256"
        }
      ],
      "name": "isSupported",
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
      "constant": false,
      "inputs": [
        {
          "name": "_features",
          "type": "uint256"
        },
        {
          "name": "_enable",
          "type": "bool"
        }
      ],
      "name": "enableFeatures",
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
  "source": "pragma solidity ^0.4.24;\n\n/*\n    Contract Features interface\n*/\ncontract IContractFeatures {\n    function isSupported(address _contract, uint256 _features) public view returns (bool);\n    function enableFeatures(uint256 _features, bool _enable) public;\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractFeatures.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractFeatures.sol",
    "exportedSymbols": {
      "IContractFeatures": [
        9853
      ]
    },
    "id": 9854,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9836,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9853,
        "linearizedBaseContracts": [
          9853
        ],
        "name": "IContractFeatures",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9845,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isSupported",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9838,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 9845,
                  "src": "118:17:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9837,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "118:7:39",
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
                  "id": 9840,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 9845,
                  "src": "137:17:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "137:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "117:38:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 9844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9843,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9845,
                  "src": "177:4:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9842,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "177:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "176:6:39"
            },
            "scope": 9853,
            "src": "97:86:39",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9852,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "enableFeatures",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9847,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 9852,
                  "src": "212:17:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9846,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:7:39",
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
                  "id": 9849,
                  "name": "_enable",
                  "nodeType": "VariableDeclaration",
                  "scope": 9852,
                  "src": "231:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9848,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "231:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "211:33:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 9851,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "251:0:39"
            },
            "scope": 9853,
            "src": "188:64:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9854,
        "src": "64:190:39"
      }
    ],
    "src": "0:255:39"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/interfaces/IContractFeatures.sol",
    "exportedSymbols": {
      "IContractFeatures": [
        9853
      ]
    },
    "id": 9854,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 9836,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:39"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 9853,
        "linearizedBaseContracts": [
          9853
        ],
        "name": "IContractFeatures",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 9845,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isSupported",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9838,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 9845,
                  "src": "118:17:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 9837,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "118:7:39",
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
                  "id": 9840,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 9845,
                  "src": "137:17:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "137:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "117:38:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 9844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9843,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 9845,
                  "src": "177:4:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9842,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "177:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "176:6:39"
            },
            "scope": 9853,
            "src": "97:86:39",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 9852,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "enableFeatures",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 9850,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9847,
                  "name": "_features",
                  "nodeType": "VariableDeclaration",
                  "scope": 9852,
                  "src": "212:17:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9846,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:7:39",
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
                  "id": 9849,
                  "name": "_enable",
                  "nodeType": "VariableDeclaration",
                  "scope": 9852,
                  "src": "231:12:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9848,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "231:4:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "211:33:39"
            },
            "payable": false,
            "returnParameters": {
              "id": 9851,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "251:0:39"
            },
            "scope": 9853,
            "src": "188:64:39",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 9854,
        "src": "64:190:39"
      }
    ],
    "src": "0:255:39"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-06T01:09:52.927Z"
}