"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ProposalAction = exports.ProposalAction = 
{
  "contractName": "ProposalAction",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
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
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.24;\n\nimport \"../interfaces/VotingInterface.sol\";\n\ninterface ProposalAction {\n  function withdraw() external returns (bool);\n  function withdraw(address _user) external returns (bool);\n}\n\ncontract RawCall{\n  address private contractAddress;\n  bytes private functionParams;\n\n  function execute(address _contract, bytes4 _methodID, bytes _params, bytes32 _proposalID, address _votingInterface)\n  external\n  payable\n  returns (bool){\n    VotingInterface votingProcess = VotingInterface(_votingInterface);\n    require(votingProcess.result(_proposalID));\n\n    return(_contract.call.gas(200000).value(msg.value)(_methodID, _params));\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/RawCall.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/RawCall.sol",
    "exportedSymbols": {
      "ProposalAction": [
        21841
      ],
      "RawCall": [
        21889
      ]
    },
    "id": 21890,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 21827,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:78"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/VotingInterface.sol",
        "file": "../interfaces/VotingInterface.sol",
        "id": 21828,
        "nodeType": "ImportDirective",
        "scope": 21890,
        "sourceUnit": 17214,
        "src": "26:43:78",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 21841,
        "linearizedBaseContracts": [
          21841
        ],
        "name": "ProposalAction",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 21833,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21829,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "117:2:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 21832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21831,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21833,
                  "src": "138:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21830,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:6:78"
            },
            "scope": 21841,
            "src": "100:44:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 21840,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21835,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 21840,
                  "src": "165:13:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21834,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "165:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "164:15:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 21839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21838,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21840,
                  "src": "198:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21837,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:6:78"
            },
            "scope": 21841,
            "src": "147:57:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21890,
        "src": "71:135:78"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 21889,
        "linearizedBaseContracts": [
          21889
        ],
        "name": "RawCall",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 21843,
            "name": "contractAddress",
            "nodeType": "VariableDeclaration",
            "scope": 21889,
            "src": "228:31:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 21842,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "228:7:78",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 21845,
            "name": "functionParams",
            "nodeType": "VariableDeclaration",
            "scope": 21889,
            "src": "263:28:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes_storage",
              "typeString": "bytes"
            },
            "typeName": {
              "id": 21844,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "263:5:78",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 21887,
              "nodeType": "Block",
              "src": "449:202:78",
              "statements": [
                {
                  "assignments": [
                    21861
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21861,
                      "name": "votingProcess",
                      "nodeType": "VariableDeclaration",
                      "scope": 21888,
                      "src": "455:29:78",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VotingInterface_$17213",
                        "typeString": "contract VotingInterface"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 21860,
                        "name": "VotingInterface",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 17213,
                        "src": "455:15:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VotingInterface_$17213",
                          "typeString": "contract VotingInterface"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21865,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 21863,
                        "name": "_votingInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21855,
                        "src": "503:16:78",
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
                      "id": 21862,
                      "name": "VotingInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17213,
                      "src": "487:15:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_VotingInterface_$17213_$",
                        "typeString": "type(contract VotingInterface)"
                      }
                    },
                    "id": 21864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "487:33:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VotingInterface_$17213",
                      "typeString": "contract VotingInterface"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "455:65:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 21869,
                            "name": "_proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21853,
                            "src": "555:11:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 21867,
                            "name": "votingProcess",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21861,
                            "src": "534:13:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VotingInterface_$17213",
                              "typeString": "contract VotingInterface"
                            }
                          },
                          "id": 21868,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "result",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 17205,
                          "src": "534:20:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 21870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "534:33:78",
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
                      "id": 21866,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "526:7:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21871,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "526:42:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21872,
                  "nodeType": "ExpressionStatement",
                  "src": "526:42:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 21882,
                            "name": "_methodID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21849,
                            "src": "626:9:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 21883,
                            "name": "_params",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21851,
                            "src": "637:7:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
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
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          ],
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21879,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "615:3:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 21880,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "615:9:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "323030303030",
                                  "id": 21876,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "601:6:78",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  },
                                  "value": "200000"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 21873,
                                    "name": "_contract",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21847,
                                    "src": "582:9:78",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "id": 21874,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "call",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "582:14:78",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$",
                                    "typeString": "function () payable returns (bool)"
                                  }
                                },
                                "id": 21875,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "gas",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "582:18:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_setgas_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gas_$",
                                  "typeString": "function (uint256) returns (function () payable returns (bool))"
                                }
                              },
                              "id": 21877,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "582:26:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gas",
                                "typeString": "function () payable returns (bool)"
                              }
                            },
                            "id": 21878,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "582:32:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gasvalue_$gas",
                              "typeString": "function (uint256) returns (function () payable returns (bool))"
                            }
                          },
                          "id": 21881,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "582:43:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gasvalue",
                            "typeString": "function () payable returns (bool)"
                          }
                        },
                        "id": 21884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "582:63:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 21885,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "581:65:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 21859,
                  "id": 21886,
                  "nodeType": "Return",
                  "src": "575:71:78"
                }
              ]
            },
            "documentation": null,
            "id": 21888,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "execute",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21847,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "313:17:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21846,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:78",
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
                  "id": 21849,
                  "name": "_methodID",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "332:16:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 21848,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "332:6:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21851,
                  "name": "_params",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "350:13:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 21850,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "350:5:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21853,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "365:19:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 21852,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21855,
                  "name": "_votingInterface",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "386:24:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21854,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "312:99:78"
            },
            "payable": true,
            "returnParameters": {
              "id": 21859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21858,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "444:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21857,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "444:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "443:6:78"
            },
            "scope": 21889,
            "src": "296:355:78",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21890,
        "src": "208:445:78"
      }
    ],
    "src": "0:654:78"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/ownership/RawCall.sol",
    "exportedSymbols": {
      "ProposalAction": [
        21841
      ],
      "RawCall": [
        21889
      ]
    },
    "id": 21890,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 21827,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:78"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/interfaces/VotingInterface.sol",
        "file": "../interfaces/VotingInterface.sol",
        "id": 21828,
        "nodeType": "ImportDirective",
        "scope": 21890,
        "sourceUnit": 17214,
        "src": "26:43:78",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 21841,
        "linearizedBaseContracts": [
          21841
        ],
        "name": "ProposalAction",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 21833,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21829,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "117:2:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 21832,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21831,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21833,
                  "src": "138:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21830,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "138:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "137:6:78"
            },
            "scope": 21841,
            "src": "100:44:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": null,
            "documentation": null,
            "id": 21840,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21835,
                  "name": "_user",
                  "nodeType": "VariableDeclaration",
                  "scope": 21840,
                  "src": "165:13:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21834,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "165:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "164:15:78"
            },
            "payable": false,
            "returnParameters": {
              "id": 21839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21838,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21840,
                  "src": "198:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21837,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "198:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "197:6:78"
            },
            "scope": 21841,
            "src": "147:57:78",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21890,
        "src": "71:135:78"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 21889,
        "linearizedBaseContracts": [
          21889
        ],
        "name": "RawCall",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 21843,
            "name": "contractAddress",
            "nodeType": "VariableDeclaration",
            "scope": 21889,
            "src": "228:31:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 21842,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "228:7:78",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 21845,
            "name": "functionParams",
            "nodeType": "VariableDeclaration",
            "scope": 21889,
            "src": "263:28:78",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes_storage",
              "typeString": "bytes"
            },
            "typeName": {
              "id": 21844,
              "name": "bytes",
              "nodeType": "ElementaryTypeName",
              "src": "263:5:78",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes_storage_ptr",
                "typeString": "bytes"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 21887,
              "nodeType": "Block",
              "src": "449:202:78",
              "statements": [
                {
                  "assignments": [
                    21861
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 21861,
                      "name": "votingProcess",
                      "nodeType": "VariableDeclaration",
                      "scope": 21888,
                      "src": "455:29:78",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_VotingInterface_$17213",
                        "typeString": "contract VotingInterface"
                      },
                      "typeName": {
                        "contractScope": null,
                        "id": 21860,
                        "name": "VotingInterface",
                        "nodeType": "UserDefinedTypeName",
                        "referencedDeclaration": 17213,
                        "src": "455:15:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_VotingInterface_$17213",
                          "typeString": "contract VotingInterface"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 21865,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 21863,
                        "name": "_votingInterface",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 21855,
                        "src": "503:16:78",
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
                      "id": 21862,
                      "name": "VotingInterface",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 17213,
                      "src": "487:15:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_VotingInterface_$17213_$",
                        "typeString": "type(contract VotingInterface)"
                      }
                    },
                    "id": 21864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "487:33:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_VotingInterface_$17213",
                      "typeString": "contract VotingInterface"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "455:65:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 21869,
                            "name": "_proposalID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21853,
                            "src": "555:11:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 21867,
                            "name": "votingProcess",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21861,
                            "src": "534:13:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_VotingInterface_$17213",
                              "typeString": "contract VotingInterface"
                            }
                          },
                          "id": 21868,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "result",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 17205,
                          "src": "534:20:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                            "typeString": "function (bytes32) view external returns (bool)"
                          }
                        },
                        "id": 21870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "534:33:78",
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
                      "id": 21866,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "526:7:78",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 21871,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "526:42:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 21872,
                  "nodeType": "ExpressionStatement",
                  "src": "526:42:78"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 21882,
                            "name": "_methodID",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21849,
                            "src": "626:9:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes4",
                              "typeString": "bytes4"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 21883,
                            "name": "_params",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 21851,
                            "src": "637:7:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
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
                              "typeIdentifier": "t_bytes_calldata_ptr",
                              "typeString": "bytes calldata"
                            }
                          ],
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 21879,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 28038,
                                "src": "615:3:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 21880,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "value",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "615:9:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "hexValue": "323030303030",
                                  "id": 21876,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "601:6:78",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  },
                                  "value": "200000"
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_rational_200000_by_1",
                                    "typeString": "int_const 200000"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 21873,
                                    "name": "_contract",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 21847,
                                    "src": "582:9:78",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "id": 21874,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "call",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "582:14:78",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$",
                                    "typeString": "function () payable returns (bool)"
                                  }
                                },
                                "id": 21875,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "gas",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "582:18:78",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_setgas_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gas_$",
                                  "typeString": "function (uint256) returns (function () payable returns (bool))"
                                }
                              },
                              "id": 21877,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "582:26:78",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gas",
                                "typeString": "function () payable returns (bool)"
                              }
                            },
                            "id": 21878,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "value",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "582:32:78",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_setvalue_nonpayable$_t_uint256_$returns$_t_function_barecall_payable$__$returns$_t_bool_$gasvalue_$gas",
                              "typeString": "function (uint256) returns (function () payable returns (bool))"
                            }
                          },
                          "id": 21881,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "582:43:78",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_barecall_payable$__$returns$_t_bool_$gasvalue",
                            "typeString": "function () payable returns (bool)"
                          }
                        },
                        "id": 21884,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "582:63:78",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 21885,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "581:65:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 21859,
                  "id": 21886,
                  "nodeType": "Return",
                  "src": "575:71:78"
                }
              ]
            },
            "documentation": null,
            "id": 21888,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "execute",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 21856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21847,
                  "name": "_contract",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "313:17:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21846,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:78",
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
                  "id": 21849,
                  "name": "_methodID",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "332:16:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 21848,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "332:6:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21851,
                  "name": "_params",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "350:13:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 21850,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "350:5:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21853,
                  "name": "_proposalID",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "365:19:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 21852,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "365:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21855,
                  "name": "_votingInterface",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "386:24:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 21854,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "386:7:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "312:99:78"
            },
            "payable": true,
            "returnParameters": {
              "id": 21859,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21858,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 21888,
                  "src": "444:4:78",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 21857,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "444:4:78",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "443:6:78"
            },
            "scope": 21889,
            "src": "296:355:78",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 21890,
        "src": "208:445:78"
      }
    ],
    "src": "0:654:78"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-06T01:09:53.181Z"
}