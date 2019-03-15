"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC165Checker = exports.ERC165Checker = 
{
  "contractName": "ERC165Checker",
  "abi": [],
  "bytecode": "0x604c602c600b82828239805160001a60731460008114601c57601e565bfe5b5030600052607381538281f30073000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820a728dd4d6c8d51ca850c6b676d498a95a2794e184b3e3a621319cb295f8aee910029",
  "deployedBytecode": "0x73000000000000000000000000000000000000000030146080604052600080fd00a165627a7a72305820a728dd4d6c8d51ca850c6b676d498a95a2794e184b3e3a621319cb295f8aee910029",
  "sourceMap": "193:5313:25:-;;132:2:-1;166:7;155:9;146:7;137:37;252:7;246:14;243:1;238:23;232:4;229:33;270:1;265:20;;;;222:63;;265:20;274:9;222:63;;298:9;295:1;288:20;328:4;319:7;311:22;352:7;343;336:24",
  "deployedSourceMap": "193:5313:25:-;;;;;;;;",
  "source": "pragma solidity ^0.4.24;\n\n/**\n * @title ERC165Checker\n * @dev Use `using ERC165Checker for address`; to include this library\n * https://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md\n */\nlibrary ERC165Checker {\n    // As per the EIP-165 spec, no interface should ever match 0xffffffff\n    bytes4 private constant _InterfaceId_Invalid = 0xffffffff;\n\n    bytes4 private constant _InterfaceId_ERC165 = 0x01ffc9a7;\n    /**\n     * 0x01ffc9a7 ===\n     *     bytes4(keccak256('supportsInterface(bytes4)'))\n     */\n\n    /**\n     * @notice Query if a contract supports ERC165\n     * @param account The address of the contract to query for support of ERC165\n     * @return true if the contract at account implements ERC165\n     */\n    function _supportsERC165(address account) internal view returns (bool) {\n        // Any contract that implements ERC165 must explicitly indicate support of\n        // InterfaceId_ERC165 and explicitly indicate non-support of InterfaceId_Invalid\n        return _supportsERC165Interface(account, _InterfaceId_ERC165) &&\n            !_supportsERC165Interface(account, _InterfaceId_Invalid);\n    }\n\n    /**\n     * @notice Query if a contract implements an interface, also checks support of ERC165\n     * @param account The address of the contract to query for support of an interface\n     * @param interfaceId The interface identifier, as specified in ERC-165\n     * @return true if the contract at account indicates support of the interface with\n     * identifier interfaceId, false otherwise\n     * @dev Interface identification is specified in ERC-165.\n     */\n    function _supportsInterface(address account, bytes4 interfaceId) internal view returns (bool) {\n        // query support of both ERC165 as per the spec and support of _interfaceId\n        return _supportsERC165(account) &&\n            _supportsERC165Interface(account, interfaceId);\n    }\n\n    /**\n     * @notice Query if a contract implements interfaces, also checks support of ERC165\n     * @param account The address of the contract to query for support of an interface\n     * @param interfaceIds A list of interface identifiers, as specified in ERC-165\n     * @return true if the contract at account indicates support all interfaces in the\n     * interfaceIds list, false otherwise\n     * @dev Interface identification is specified in ERC-165.\n     */\n    function _supportsAllInterfaces(address account, bytes4[] interfaceIds) internal view returns (bool) {\n        // query support of ERC165 itself\n        if (!_supportsERC165(account)) {\n            return false;\n        }\n\n        // query support of each interface in _interfaceIds\n        for (uint256 i = 0; i < interfaceIds.length; i++) {\n            if (!_supportsERC165Interface(account, interfaceIds[i])) {\n                return false;\n            }\n        }\n\n        // all interfaces supported\n        return true;\n    }\n\n    /**\n     * @notice Query if a contract implements an interface, does not check ERC165 support\n     * @param account The address of the contract to query for support of an interface\n     * @param interfaceId The interface identifier, as specified in ERC-165\n     * @return true if the contract at account indicates support of the interface with\n     * identifier interfaceId, false otherwise\n     * @dev Assumes that account contains a contract that supports ERC165, otherwise\n     * the behavior of this method is undefined. This precondition can be checked\n     * with the `supportsERC165` method in this library.\n     * Interface identification is specified in ERC-165.\n     */\n    function _supportsERC165Interface(address account, bytes4 interfaceId) private view returns (bool) {\n        // success determines whether the staticcall succeeded and result determines\n        // whether the contract at account indicates support of _interfaceId\n        (bool success, bool result) = _callERC165SupportsInterface(account, interfaceId);\n\n        return (success && result);\n    }\n\n    /**\n     * @notice Calls the function with selector 0x01ffc9a7 (ERC165) and suppresses throw\n     * @param account The address of the contract to query for support of an interface\n     * @param interfaceId The interface identifier, as specified in ERC-165\n     * @return success true if the STATICCALL succeeded, false otherwise\n     * @return result true if the STATICCALL succeeded and the contract at account\n     * indicates support of the interface with identifier interfaceId, false otherwise\n     */\n    function _callERC165SupportsInterface(address account, bytes4 interfaceId)\n      private\n      view\n      returns (bool success, bool result)\n    {\n        bytes memory encodedParams = abi.encodeWithSelector(_InterfaceId_ERC165,interfaceId);\n\n        // solium-disable-next-line security/no-inline-assembly\n        assembly {\n            let encodedParams_data := add(0x20, encodedParams)\n            let encodedParams_size := mload(encodedParams)\n\n            let output := mload(0x40)    // Find empty storage location using \"free memory pointer\"\n            mstore(output, 0x0)\n\n            success := staticcall(\n                30000,                                 // 30k gas\n                account,                            // To addr\n                encodedParams_data,\n                encodedParams_size,\n                output,\n                0x20                                     // Outputs are 32 bytes long\n            )\n\n            result := mload(output)    // Load the result\n        }\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/ERC165Checker.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/ERC165Checker.sol",
    "exportedSymbols": {
      "ERC165Checker": [
        8715
      ]
    },
    "id": 8716,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8580,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:25"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ERC165Checker\n@dev Use `using ERC165Checker for address`; to include this library\nhttps://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md",
        "fullyImplemented": true,
        "id": 8715,
        "linearizedBaseContracts": [
          8715
        ],
        "name": "ERC165Checker",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 8583,
            "name": "_InterfaceId_Invalid",
            "nodeType": "VariableDeclaration",
            "scope": 8715,
            "src": "295:57:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 8581,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "295:6:25",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30786666666666666666",
              "id": 8582,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "342:10:25",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4294967295_by_1",
                "typeString": "int_const 4294967295"
              },
              "value": "0xffffffff"
            },
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 8586,
            "name": "_InterfaceId_ERC165",
            "nodeType": "VariableDeclaration",
            "scope": 8715,
            "src": "359:56:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 8584,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "359:6:25",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783031666663396137",
              "id": 8585,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "405:10:25",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_33540519_by_1",
                "typeString": "int_const 33540519"
              },
              "value": "0x01ffc9a7"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 8604,
              "nodeType": "Block",
              "src": "802:322:25",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 8602,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 8594,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8588,
                          "src": "1016:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 8595,
                          "name": "_InterfaceId_ERC165",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8586,
                          "src": "1025:19:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
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
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "id": 8593,
                        "name": "_supportsERC165Interface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8693,
                        "src": "991:24:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (address,bytes4) view returns (bool)"
                        }
                      },
                      "id": 8596,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "991:54:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 8601,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "1061:56:25",
                      "subExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 8598,
                            "name": "account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8588,
                            "src": "1087:7:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 8599,
                            "name": "_InterfaceId_Invalid",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8583,
                            "src": "1096:20:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
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
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          ],
                          "id": 8597,
                          "name": "_supportsERC165Interface",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8693,
                          "src": "1062:24:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                            "typeString": "function (address,bytes4) view returns (bool)"
                          }
                        },
                        "id": 8600,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1062:55:25",
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
                    "src": "991:126:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8592,
                  "id": 8603,
                  "nodeType": "Return",
                  "src": "984:133:25"
                }
              ]
            },
            "documentation": "@notice Query if a contract supports ERC165\n@param account The address of the contract to query for support of ERC165\n@return true if the contract at account implements ERC165",
            "id": 8605,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_supportsERC165",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8588,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 8605,
                  "src": "756:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8587,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "756:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "755:17:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 8592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8591,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8605,
                  "src": "796:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8590,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "796:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "795:6:25"
            },
            "scope": 8715,
            "src": "731:393:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8623,
              "nodeType": "Block",
              "src": "1689:194:25",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 8621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 8615,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8607,
                          "src": "1806:7:25",
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
                        "id": 8614,
                        "name": "_supportsERC165",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8605,
                        "src": "1790:15:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 8616,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1790:24:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 8618,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8607,
                          "src": "1855:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 8619,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8609,
                          "src": "1864:11:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
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
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "id": 8617,
                        "name": "_supportsERC165Interface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8693,
                        "src": "1830:24:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (address,bytes4) view returns (bool)"
                        }
                      },
                      "id": 8620,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1830:46:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1790:86:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8613,
                  "id": 8622,
                  "nodeType": "Return",
                  "src": "1783:93:25"
                }
              ]
            },
            "documentation": "@notice Query if a contract implements an interface, also checks support of ERC165\n@param account The address of the contract to query for support of an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@return true if the contract at account indicates support of the interface with\nidentifier interfaceId, false otherwise\n@dev Interface identification is specified in ERC-165.",
            "id": 8624,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8607,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 8624,
                  "src": "1623:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8606,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1623:7:25",
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
                  "id": 8609,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8624,
                  "src": "1640:18:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8608,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1640:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1622:37:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 8613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8612,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8624,
                  "src": "1683:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8611,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1683:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1682:6:25"
            },
            "scope": 8715,
            "src": "1595:288:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8668,
              "nodeType": "Block",
              "src": "2456:430:25",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 8637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2512:25:25",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 8635,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8626,
                          "src": "2529:7:25",
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
                        "id": 8634,
                        "name": "_supportsERC165",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8605,
                        "src": "2513:15:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 8636,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2513:24:25",
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
                  "falseBody": null,
                  "id": 8641,
                  "nodeType": "IfStatement",
                  "src": "2508:68:25",
                  "trueBody": {
                    "id": 8640,
                    "nodeType": "Block",
                    "src": "2539:37:25",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 8638,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2560:5:25",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 8633,
                        "id": 8639,
                        "nodeType": "Return",
                        "src": "2553:12:25"
                      }
                    ]
                  }
                },
                {
                  "body": {
                    "id": 8664,
                    "nodeType": "Block",
                    "src": "2696:126:25",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 8659,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "2714:51:25",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 8654,
                                "name": "account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8626,
                                "src": "2740:7:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 8655,
                                  "name": "interfaceIds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8629,
                                  "src": "2749:12:25",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes4_$dyn_memory_ptr",
                                    "typeString": "bytes4[] memory"
                                  }
                                },
                                "id": 8657,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 8656,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8643,
                                  "src": "2762:1:25",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2749:15:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
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
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              ],
                              "id": 8653,
                              "name": "_supportsERC165Interface",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8693,
                              "src": "2715:24:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                "typeString": "function (address,bytes4) view returns (bool)"
                              }
                            },
                            "id": 8658,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2715:50:25",
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
                        "falseBody": null,
                        "id": 8663,
                        "nodeType": "IfStatement",
                        "src": "2710:102:25",
                        "trueBody": {
                          "id": 8662,
                          "nodeType": "Block",
                          "src": "2767:45:25",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "66616c7365",
                                "id": 8660,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2792:5:25",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "false"
                              },
                              "functionReturnParameters": 8633,
                              "id": 8661,
                              "nodeType": "Return",
                              "src": "2785:12:25"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8649,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 8646,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8643,
                      "src": "2666:1:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 8647,
                        "name": "interfaceIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8629,
                        "src": "2670:12:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes4_$dyn_memory_ptr",
                          "typeString": "bytes4[] memory"
                        }
                      },
                      "id": 8648,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2670:19:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2666:23:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8665,
                  "initializationExpression": {
                    "assignments": [
                      8643
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 8643,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 8669,
                        "src": "2651:9:25",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 8642,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2651:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 8645,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 8644,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2663:1:25",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2651:13:25"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 8651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2691:3:25",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 8650,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8643,
                        "src": "2691:1:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 8652,
                    "nodeType": "ExpressionStatement",
                    "src": "2691:3:25"
                  },
                  "nodeType": "ForStatement",
                  "src": "2646:176:25"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 8666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2875:4:25",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 8633,
                  "id": 8667,
                  "nodeType": "Return",
                  "src": "2868:11:25"
                }
              ]
            },
            "documentation": "@notice Query if a contract implements interfaces, also checks support of ERC165\n@param account The address of the contract to query for support of an interface\n@param interfaceIds A list of interface identifiers, as specified in ERC-165\n@return true if the contract at account indicates support all interfaces in the\ninterfaceIds list, false otherwise\n@dev Interface identification is specified in ERC-165.",
            "id": 8669,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_supportsAllInterfaces",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8626,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 8669,
                  "src": "2387:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8625,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2387:7:25",
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
                  "id": 8629,
                  "name": "interfaceIds",
                  "nodeType": "VariableDeclaration",
                  "scope": 8669,
                  "src": "2404:21:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes4_$dyn_memory_ptr",
                    "typeString": "bytes4[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 8627,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "2404:6:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "id": 8628,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2404:8:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                      "typeString": "bytes4[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2386:40:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 8633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8632,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8669,
                  "src": "2450:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8631,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2450:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2449:6:25"
            },
            "scope": 8715,
            "src": "2355:531:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8692,
              "nodeType": "Block",
              "src": "3675:296:25",
              "statements": [
                {
                  "assignments": [
                    8679,
                    8681
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8679,
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "scope": 8693,
                      "src": "3848:12:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 8678,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "3848:4:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 8681,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 8693,
                      "src": "3862:11:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 8680,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "3862:4:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8686,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8683,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8671,
                        "src": "3906:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8684,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8673,
                        "src": "3915:11:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
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
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 8682,
                      "name": "_callERC165SupportsInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8714,
                      "src": "3877:28:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$_t_bool_$",
                        "typeString": "function (address,bytes4) view returns (bool,bool)"
                      }
                    },
                    "id": 8685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3877:50:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bool_$",
                      "typeString": "tuple(bool,bool)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3847:80:25"
                },
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
                        "id": 8689,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 8687,
                          "name": "success",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8679,
                          "src": "3946:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 8688,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8681,
                          "src": "3957:6:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "3946:17:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 8690,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3945:19:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8677,
                  "id": 8691,
                  "nodeType": "Return",
                  "src": "3938:26:25"
                }
              ]
            },
            "documentation": "@notice Query if a contract implements an interface, does not check ERC165 support\n@param account The address of the contract to query for support of an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@return true if the contract at account indicates support of the interface with\nidentifier interfaceId, false otherwise\n@dev Assumes that account contains a contract that supports ERC165, otherwise\nthe behavior of this method is undefined. This precondition can be checked\nwith the `supportsERC165` method in this library.\nInterface identification is specified in ERC-165.",
            "id": 8693,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_supportsERC165Interface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8674,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8671,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 8693,
                  "src": "3610:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8670,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3610:7:25",
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
                  "id": 8673,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8693,
                  "src": "3627:18:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8672,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "3627:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3609:37:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 8677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8676,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8693,
                  "src": "3669:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8675,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3669:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3668:6:25"
            },
            "scope": 8715,
            "src": "3576:395:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 8713,
              "nodeType": "Block",
              "src": "4634:870:25",
              "statements": [
                {
                  "assignments": [
                    8705
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8705,
                      "name": "encodedParams",
                      "nodeType": "VariableDeclaration",
                      "scope": 8714,
                      "src": "4644:26:25",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 8704,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4644:5:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8711,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8708,
                        "name": "_InterfaceId_ERC165",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8586,
                        "src": "4696:19:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8709,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8697,
                        "src": "4716:11:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 8706,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34910,
                        "src": "4673:3:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 8707,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "encodeWithSelector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4673:22:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes4) pure returns (bytes memory)"
                      }
                    },
                    "id": 8710,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4673:55:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4644:84:25"
                },
                {
                  "externalReferences": [
                    {
                      "encodedParams": {
                        "declaration": 8705,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4862:13:25",
                        "valueSize": 1
                      }
                    },
                    {
                      "encodedParams": {
                        "declaration": 8705,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4921:13:25",
                        "valueSize": 1
                      }
                    },
                    {
                      "success": {
                        "declaration": 8700,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "5082:7:25",
                        "valueSize": 1
                      }
                    },
                    {
                      "result": {
                        "declaration": 8702,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "5443:6:25",
                        "valueSize": 1
                      }
                    },
                    {
                      "account": {
                        "declaration": 8695,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "5187:7:25",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 8712,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    let encodedParams_data := add(0x20, encodedParams)\n    let encodedParams_size := mload(encodedParams)\n    let output := mload(0x40)\n    mstore(output, 0x0)\n    success := staticcall(30000, account, encodedParams_data, encodedParams_size, output, 0x20)\n    result := mload(output)\n}",
                  "src": "4803:701:25"
                }
              ]
            },
            "documentation": "@notice Calls the function with selector 0x01ffc9a7 (ERC165) and suppresses throw\n@param account The address of the contract to query for support of an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@return success true if the STATICCALL succeeded, false otherwise\n@return result true if the STATICCALL succeeded and the contract at account\nindicates support of the interface with identifier interfaceId, false otherwise",
            "id": 8714,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_callERC165SupportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8695,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 8714,
                  "src": "4526:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8694,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4526:7:25",
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
                  "id": 8697,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8714,
                  "src": "4543:18:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8696,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4543:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4525:37:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 8703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8700,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8714,
                  "src": "4603:12:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8699,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4603:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8702,
                  "name": "result",
                  "nodeType": "VariableDeclaration",
                  "scope": 8714,
                  "src": "4617:11:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8701,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4617:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4602:27:25"
            },
            "scope": 8715,
            "src": "4488:1016:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "private"
          }
        ],
        "scope": 8716,
        "src": "193:5313:25"
      }
    ],
    "src": "0:5507:25"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ecosystem/ERC165Checker.sol",
    "exportedSymbols": {
      "ERC165Checker": [
        8715
      ]
    },
    "id": 8716,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8580,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:25"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": "@title ERC165Checker\n@dev Use `using ERC165Checker for address`; to include this library\nhttps://github.com/ethereum/EIPs/blob/master/EIPS/eip-165.md",
        "fullyImplemented": true,
        "id": 8715,
        "linearizedBaseContracts": [
          8715
        ],
        "name": "ERC165Checker",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 8583,
            "name": "_InterfaceId_Invalid",
            "nodeType": "VariableDeclaration",
            "scope": 8715,
            "src": "295:57:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 8581,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "295:6:25",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30786666666666666666",
              "id": 8582,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "342:10:25",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4294967295_by_1",
                "typeString": "int_const 4294967295"
              },
              "value": "0xffffffff"
            },
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 8586,
            "name": "_InterfaceId_ERC165",
            "nodeType": "VariableDeclaration",
            "scope": 8715,
            "src": "359:56:25",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 8584,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "359:6:25",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30783031666663396137",
              "id": 8585,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "405:10:25",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_33540519_by_1",
                "typeString": "int_const 33540519"
              },
              "value": "0x01ffc9a7"
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 8604,
              "nodeType": "Block",
              "src": "802:322:25",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 8602,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 8594,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8588,
                          "src": "1016:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 8595,
                          "name": "_InterfaceId_ERC165",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8586,
                          "src": "1025:19:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
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
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "id": 8593,
                        "name": "_supportsERC165Interface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8693,
                        "src": "991:24:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (address,bytes4) view returns (bool)"
                        }
                      },
                      "id": 8596,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "991:54:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 8601,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "!",
                      "prefix": true,
                      "src": "1061:56:25",
                      "subExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 8598,
                            "name": "account",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8588,
                            "src": "1087:7:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 8599,
                            "name": "_InterfaceId_Invalid",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8583,
                            "src": "1096:20:25",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
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
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          ],
                          "id": 8597,
                          "name": "_supportsERC165Interface",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8693,
                          "src": "1062:24:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                            "typeString": "function (address,bytes4) view returns (bool)"
                          }
                        },
                        "id": 8600,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1062:55:25",
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
                    "src": "991:126:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8592,
                  "id": 8603,
                  "nodeType": "Return",
                  "src": "984:133:25"
                }
              ]
            },
            "documentation": "@notice Query if a contract supports ERC165\n@param account The address of the contract to query for support of ERC165\n@return true if the contract at account implements ERC165",
            "id": 8605,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_supportsERC165",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8588,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 8605,
                  "src": "756:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8587,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "756:7:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "755:17:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 8592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8591,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8605,
                  "src": "796:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8590,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "796:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "795:6:25"
            },
            "scope": 8715,
            "src": "731:393:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8623,
              "nodeType": "Block",
              "src": "1689:194:25",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 8621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 8615,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8607,
                          "src": "1806:7:25",
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
                        "id": 8614,
                        "name": "_supportsERC165",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8605,
                        "src": "1790:15:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 8616,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1790:24:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 8618,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8607,
                          "src": "1855:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 8619,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8609,
                          "src": "1864:11:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
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
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "id": 8617,
                        "name": "_supportsERC165Interface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8693,
                        "src": "1830:24:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (address,bytes4) view returns (bool)"
                        }
                      },
                      "id": 8620,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1830:46:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1790:86:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8613,
                  "id": 8622,
                  "nodeType": "Return",
                  "src": "1783:93:25"
                }
              ]
            },
            "documentation": "@notice Query if a contract implements an interface, also checks support of ERC165\n@param account The address of the contract to query for support of an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@return true if the contract at account indicates support of the interface with\nidentifier interfaceId, false otherwise\n@dev Interface identification is specified in ERC-165.",
            "id": 8624,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8610,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8607,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 8624,
                  "src": "1623:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8606,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1623:7:25",
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
                  "id": 8609,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8624,
                  "src": "1640:18:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8608,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1640:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1622:37:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 8613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8612,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8624,
                  "src": "1683:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8611,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1683:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1682:6:25"
            },
            "scope": 8715,
            "src": "1595:288:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8668,
              "nodeType": "Block",
              "src": "2456:430:25",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 8637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2512:25:25",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 8635,
                          "name": "account",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8626,
                          "src": "2529:7:25",
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
                        "id": 8634,
                        "name": "_supportsERC165",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8605,
                        "src": "2513:15:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                          "typeString": "function (address) view returns (bool)"
                        }
                      },
                      "id": 8636,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2513:24:25",
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
                  "falseBody": null,
                  "id": 8641,
                  "nodeType": "IfStatement",
                  "src": "2508:68:25",
                  "trueBody": {
                    "id": 8640,
                    "nodeType": "Block",
                    "src": "2539:37:25",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "66616c7365",
                          "id": 8638,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "bool",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2560:5:25",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "value": "false"
                        },
                        "functionReturnParameters": 8633,
                        "id": 8639,
                        "nodeType": "Return",
                        "src": "2553:12:25"
                      }
                    ]
                  }
                },
                {
                  "body": {
                    "id": 8664,
                    "nodeType": "Block",
                    "src": "2696:126:25",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 8659,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "2714:51:25",
                          "subExpression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 8654,
                                "name": "account",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8626,
                                "src": "2740:7:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "baseExpression": {
                                  "argumentTypes": null,
                                  "id": 8655,
                                  "name": "interfaceIds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8629,
                                  "src": "2749:12:25",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes4_$dyn_memory_ptr",
                                    "typeString": "bytes4[] memory"
                                  }
                                },
                                "id": 8657,
                                "indexExpression": {
                                  "argumentTypes": null,
                                  "id": 8656,
                                  "name": "i",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8643,
                                  "src": "2762:1:25",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "2749:15:25",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
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
                                  "typeIdentifier": "t_bytes4",
                                  "typeString": "bytes4"
                                }
                              ],
                              "id": 8653,
                              "name": "_supportsERC165Interface",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8693,
                              "src": "2715:24:25",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                "typeString": "function (address,bytes4) view returns (bool)"
                              }
                            },
                            "id": 8658,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2715:50:25",
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
                        "falseBody": null,
                        "id": 8663,
                        "nodeType": "IfStatement",
                        "src": "2710:102:25",
                        "trueBody": {
                          "id": 8662,
                          "nodeType": "Block",
                          "src": "2767:45:25",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "hexValue": "66616c7365",
                                "id": 8660,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "bool",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2792:5:25",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                "value": "false"
                              },
                              "functionReturnParameters": 8633,
                              "id": 8661,
                              "nodeType": "Return",
                              "src": "2785:12:25"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8649,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 8646,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8643,
                      "src": "2666:1:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 8647,
                        "name": "interfaceIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8629,
                        "src": "2670:12:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes4_$dyn_memory_ptr",
                          "typeString": "bytes4[] memory"
                        }
                      },
                      "id": 8648,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2670:19:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2666:23:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8665,
                  "initializationExpression": {
                    "assignments": [
                      8643
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 8643,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 8669,
                        "src": "2651:9:25",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 8642,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "2651:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 8645,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 8644,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2663:1:25",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2651:13:25"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 8651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2691:3:25",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 8650,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8643,
                        "src": "2691:1:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 8652,
                    "nodeType": "ExpressionStatement",
                    "src": "2691:3:25"
                  },
                  "nodeType": "ForStatement",
                  "src": "2646:176:25"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 8666,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2875:4:25",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 8633,
                  "id": 8667,
                  "nodeType": "Return",
                  "src": "2868:11:25"
                }
              ]
            },
            "documentation": "@notice Query if a contract implements interfaces, also checks support of ERC165\n@param account The address of the contract to query for support of an interface\n@param interfaceIds A list of interface identifiers, as specified in ERC-165\n@return true if the contract at account indicates support all interfaces in the\ninterfaceIds list, false otherwise\n@dev Interface identification is specified in ERC-165.",
            "id": 8669,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_supportsAllInterfaces",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8626,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 8669,
                  "src": "2387:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8625,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2387:7:25",
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
                  "id": 8629,
                  "name": "interfaceIds",
                  "nodeType": "VariableDeclaration",
                  "scope": 8669,
                  "src": "2404:21:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes4_$dyn_memory_ptr",
                    "typeString": "bytes4[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 8627,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "2404:6:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "id": 8628,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2404:8:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                      "typeString": "bytes4[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2386:40:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 8633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8632,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8669,
                  "src": "2450:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8631,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2450:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2449:6:25"
            },
            "scope": 8715,
            "src": "2355:531:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8692,
              "nodeType": "Block",
              "src": "3675:296:25",
              "statements": [
                {
                  "assignments": [
                    8679,
                    8681
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8679,
                      "name": "success",
                      "nodeType": "VariableDeclaration",
                      "scope": 8693,
                      "src": "3848:12:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 8678,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "3848:4:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 8681,
                      "name": "result",
                      "nodeType": "VariableDeclaration",
                      "scope": 8693,
                      "src": "3862:11:25",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 8680,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "3862:4:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8686,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8683,
                        "name": "account",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8671,
                        "src": "3906:7:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8684,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8673,
                        "src": "3915:11:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
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
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "id": 8682,
                      "name": "_callERC165SupportsInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8714,
                      "src": "3877:28:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$_t_bool_$",
                        "typeString": "function (address,bytes4) view returns (bool,bool)"
                      }
                    },
                    "id": 8685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3877:50:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_bool_$_t_bool_$",
                      "typeString": "tuple(bool,bool)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3847:80:25"
                },
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
                        "id": 8689,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 8687,
                          "name": "success",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8679,
                          "src": "3946:7:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 8688,
                          "name": "result",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8681,
                          "src": "3957:6:25",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "3946:17:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 8690,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3945:19:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8677,
                  "id": 8691,
                  "nodeType": "Return",
                  "src": "3938:26:25"
                }
              ]
            },
            "documentation": "@notice Query if a contract implements an interface, does not check ERC165 support\n@param account The address of the contract to query for support of an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@return true if the contract at account indicates support of the interface with\nidentifier interfaceId, false otherwise\n@dev Assumes that account contains a contract that supports ERC165, otherwise\nthe behavior of this method is undefined. This precondition can be checked\nwith the `supportsERC165` method in this library.\nInterface identification is specified in ERC-165.",
            "id": 8693,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_supportsERC165Interface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8674,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8671,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 8693,
                  "src": "3610:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8670,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3610:7:25",
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
                  "id": 8673,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8693,
                  "src": "3627:18:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8672,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "3627:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3609:37:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 8677,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8676,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8693,
                  "src": "3669:4:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8675,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3669:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3668:6:25"
            },
            "scope": 8715,
            "src": "3576:395:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 8713,
              "nodeType": "Block",
              "src": "4634:870:25",
              "statements": [
                {
                  "assignments": [
                    8705
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8705,
                      "name": "encodedParams",
                      "nodeType": "VariableDeclaration",
                      "scope": 8714,
                      "src": "4644:26:25",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_memory_ptr",
                        "typeString": "bytes"
                      },
                      "typeName": {
                        "id": 8704,
                        "name": "bytes",
                        "nodeType": "ElementaryTypeName",
                        "src": "4644:5:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_storage_ptr",
                          "typeString": "bytes"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 8711,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8708,
                        "name": "_InterfaceId_ERC165",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8586,
                        "src": "4696:19:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8709,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8697,
                        "src": "4716:11:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        },
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 8706,
                        "name": "abi",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34910,
                        "src": "4673:3:25",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_abi",
                          "typeString": "abi"
                        }
                      },
                      "id": 8707,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "encodeWithSelector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "4673:22:25",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                        "typeString": "function (bytes4) pure returns (bytes memory)"
                      }
                    },
                    "id": 8710,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4673:55:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_memory_ptr",
                      "typeString": "bytes memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4644:84:25"
                },
                {
                  "externalReferences": [
                    {
                      "encodedParams": {
                        "declaration": 8705,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4862:13:25",
                        "valueSize": 1
                      }
                    },
                    {
                      "encodedParams": {
                        "declaration": 8705,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "4921:13:25",
                        "valueSize": 1
                      }
                    },
                    {
                      "success": {
                        "declaration": 8700,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "5082:7:25",
                        "valueSize": 1
                      }
                    },
                    {
                      "result": {
                        "declaration": 8702,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "5443:6:25",
                        "valueSize": 1
                      }
                    },
                    {
                      "account": {
                        "declaration": 8695,
                        "isOffset": false,
                        "isSlot": false,
                        "src": "5187:7:25",
                        "valueSize": 1
                      }
                    }
                  ],
                  "id": 8712,
                  "nodeType": "InlineAssembly",
                  "operations": "{\n    let encodedParams_data := add(0x20, encodedParams)\n    let encodedParams_size := mload(encodedParams)\n    let output := mload(0x40)\n    mstore(output, 0x0)\n    success := staticcall(30000, account, encodedParams_data, encodedParams_size, output, 0x20)\n    result := mload(output)\n}",
                  "src": "4803:701:25"
                }
              ]
            },
            "documentation": "@notice Calls the function with selector 0x01ffc9a7 (ERC165) and suppresses throw\n@param account The address of the contract to query for support of an interface\n@param interfaceId The interface identifier, as specified in ERC-165\n@return success true if the STATICCALL succeeded, false otherwise\n@return result true if the STATICCALL succeeded and the contract at account\nindicates support of the interface with identifier interfaceId, false otherwise",
            "id": 8714,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "_callERC165SupportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8695,
                  "name": "account",
                  "nodeType": "VariableDeclaration",
                  "scope": 8714,
                  "src": "4526:15:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8694,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4526:7:25",
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
                  "id": 8697,
                  "name": "interfaceId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8714,
                  "src": "4543:18:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 8696,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "4543:6:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4525:37:25"
            },
            "payable": false,
            "returnParameters": {
              "id": 8703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8700,
                  "name": "success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8714,
                  "src": "4603:12:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8699,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4603:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8702,
                  "name": "result",
                  "nodeType": "VariableDeclaration",
                  "scope": 8714,
                  "src": "4617:11:25",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8701,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "4617:4:25",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4602:27:25"
            },
            "scope": 8715,
            "src": "4488:1016:25",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "private"
          }
        ],
        "scope": 8716,
        "src": "193:5313:25"
      }
    ],
    "src": "0:5507:25"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.578Z",
  "devdoc": {
    "methods": {},
    "title": "ERC165Checker"
  },
  "userdoc": {
    "methods": {}
  }
}