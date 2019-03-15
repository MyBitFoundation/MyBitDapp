"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var MockDepositAddressEther = exports.MockDepositAddressEther = 
{
  "contractName": "MockDepositAddressEther",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "bank",
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
      "inputs": [],
      "name": "owner",
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
      "inputs": [
        {
          "name": "_bank",
          "type": "address"
        },
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "destianation",
          "type": "address"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "etherAmount",
          "type": "uint256"
        },
        {
          "name": "destination",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "clearBalance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getBalance",
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
  "bytecode": "0x608060405234801561001057600080fd5b506040516040806102f183398101604052805160209091015160018054600160a060020a03928316600160a060020a0319918216179091556000805492909316911617905561028d806100646000396000f30060806040526004361061006b5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041662f714ce811461006d57806312065fe01461009157806376cdb03b146100b857806384d9a4e6146100e95780638da5cb5b14610101575b005b34801561007957600080fd5b5061006b600435600160a060020a0360243516610116565b34801561009d57600080fd5b506100a66101e1565b60408051918252519081900360200190f35b3480156100c457600080fd5b506100cd6101e6565b60408051600160a060020a039092168252519081900360200190f35b3480156100f557600080fd5b5061006b6004356101f5565b34801561010d57600080fd5b506100cd610252565b600154600160a060020a0316331461012d57600080fd5b60008054604080517f3bed33ce000000000000000000000000000000000000000000000000000000008152600481018690529051600160a060020a0390921692633bed33ce9260248084019382900301818387803b15801561018e57600080fd5b505af11580156101a2573d6000803e3d6000fd5b5050604051600160a060020a038416925084156108fc02915084906000818181858888f193505050501580156101dc573d6000803e3d6000fd5b505050565b303190565b600054600160a060020a031681565b600154600160a060020a0316331461020c57600080fd5b3031811161024f5760008054604051600160a060020a039091169183156108fc02918491818181858888f1935050505015801561024d573d6000803e3d6000fd5b505b50565b600154600160a060020a0316815600a165627a7a723058205d70f7788009a55b2d523d75dc93c9cfb067b0b2d65582b716fc6927be8c58050029",
  "deployedBytecode": "0x60806040526004361061006b5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041662f714ce811461006d57806312065fe01461009157806376cdb03b146100b857806384d9a4e6146100e95780638da5cb5b14610101575b005b34801561007957600080fd5b5061006b600435600160a060020a0360243516610116565b34801561009d57600080fd5b506100a66101e1565b60408051918252519081900360200190f35b3480156100c457600080fd5b506100cd6101e6565b60408051600160a060020a039092168252519081900360200190f35b3480156100f557600080fd5b5061006b6004356101f5565b34801561010d57600080fd5b506100cd610252565b600154600160a060020a0316331461012d57600080fd5b60008054604080517f3bed33ce000000000000000000000000000000000000000000000000000000008152600481018690529051600160a060020a0390921692633bed33ce9260248084019382900301818387803b15801561018e57600080fd5b505af11580156101a2573d6000803e3d6000fd5b5050604051600160a060020a038416925084156108fc02915084906000818181858888f193505050501580156101dc573d6000803e3d6000fd5b505050565b303190565b600054600160a060020a031681565b600154600160a060020a0316331461020c57600080fd5b3031811161024f5760008054604051600160a060020a039091169183156108fc02918491818181858888f1935050505015801561024d573d6000803e3d6000fd5b505b50565b600154600160a060020a0316815600a165627a7a723058205d70f7788009a55b2d523d75dc93c9cfb067b0b2d65582b716fc6927be8c58050029",
  "sourceMap": "313:651:54:-;;;374:114;8:9:-1;5:2;;;30:1;27;20:12;5:2;374:114:54;;;;;;;;;;;;;;;;;;;609:5:53;:14;;-1:-1:-1;;;;;609:14:53;;;-1:-1:-1;;;;;;609:14:53;;;;;;;:5;633:12;;;;;;;;;;;313:651:54;;;;;;",
  "deployedSourceMap": "313:651:54:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;529:165;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;529:165:54;;;;;-1:-1:-1;;;;;529:165:54;;;868:94;;8:9:-1;5:2;;;30:1;27;20:12;5:2;868:94:54;;;;;;;;;;;;;;;;;;;;326:27:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;326:27:53;;;;;;;;-1:-1:-1;;;;;326:27:53;;;;;;;;;;;;;;700:162:54;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;700:162:54;;;;;359:20:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;359:20:53;;;;529:165:54;716:5:53;;-1:-1:-1;;;;;716:5:53;702:10;:19;694:28;;;;;;613:4:54;;;:31;;;;;;;;;;;;;;-1:-1:-1;;;;;613:4:54;;;;:18;;:31;;;;;;;;;;:4;;:31;;;5:2:-1;;;;30:1;27;20:12;5:2;613:31:54;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;654:33:54;;-1:-1:-1;;;;;654:20:54;;;-1:-1:-1;654:33:54;;;;;-1:-1:-1;654:33:54;;;;;;;:20;:33;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;654:33:54;529:165;;:::o;868:94::-;942:4;934:21;868:94;:::o;326:27:53:-;;;-1:-1:-1;;;;;326:27:53;;:::o;700:162:54:-;716:5:53;;-1:-1:-1;;;;;716:5:53;702:10;:19;694:28;;;;;;776:4:54;768:21;:31;-1:-1:-1;764:92:54;;823:4;;;815:30;;-1:-1:-1;;;;;823:4:54;;;;815:30;;;;;;;;823:4;815:30;;823:4;815:30;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;815:30:54;764:92;700:162;:::o;359:20:53:-;;;-1:-1:-1;;;;;359:20:53;;:::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./MockCentralBank.sol\";\nimport \"./MockDepositAddress.sol\";\n\n/// @title Mock Deposit Address for Ethers\n/// @author Ilan Doron\n/// @dev a dummy contract that simulates a deposit address of a token on a specific exchange.\n///         allows reserve manager to deposit and withdraw\ncontract MockDepositAddressEther is MockDepositAddress{\n\n    constructor(MockCentralBank _bank, address _owner)\n        MockDepositAddress(_bank, _owner)\n        public\n    {}\n\n    function () public payable {}\n\n    function withdraw(uint etherAmount, address destination) public onlyOwner {\n        bank.withdrawEther(etherAmount);\n        destination.transfer(etherAmount);\n    }\n\n    function clearBalance( uint amount ) public onlyOwner {\n        if (address(this).balance >= amount) {\n            address(bank).transfer(amount);\n        }\n    }\n\n    function getBalance() public view returns (uint) {\n        return address(this).balance;\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddressEther.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddressEther.sol",
    "exportedSymbols": {
      "MockDepositAddressEther": [
        15908
      ]
    },
    "id": 15909,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 15831,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:54"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockCentralBank.sol",
        "file": "./MockCentralBank.sol",
        "id": 15832,
        "nodeType": "ImportDirective",
        "scope": 15909,
        "sourceUnit": 15771,
        "src": "26:31:54",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddress.sol",
        "file": "./MockDepositAddress.sol",
        "id": 15833,
        "nodeType": "ImportDirective",
        "scope": 15909,
        "sourceUnit": 15830,
        "src": "58:34:54",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 15834,
              "name": "MockDepositAddress",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 15829,
              "src": "349:18:54",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MockDepositAddress_$15829",
                "typeString": "contract MockDepositAddress"
              }
            },
            "id": 15835,
            "nodeType": "InheritanceSpecifier",
            "src": "349:18:54"
          }
        ],
        "contractDependencies": [
          15829
        ],
        "contractKind": "contract",
        "documentation": "@title Mock Deposit Address for Ethers\n @author Ilan Doron\n @dev a dummy contract that simulates a deposit address of a token on a specific exchange.\n         allows reserve manager to deposit and withdraw",
        "fullyImplemented": true,
        "id": 15908,
        "linearizedBaseContracts": [
          15908,
          15829
        ],
        "name": "MockDepositAddressEther",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 15846,
              "nodeType": "Block",
              "src": "486:2:54",
              "statements": []
            },
            "documentation": null,
            "id": 15847,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 15842,
                    "name": "_bank",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 15837,
                    "src": "452:5:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 15843,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 15839,
                    "src": "459:6:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 15844,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15841,
                  "name": "MockDepositAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15829,
                  "src": "433:18:54",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_MockDepositAddress_$15829_$",
                    "typeString": "type(contract MockDepositAddress)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "433:33:54"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15837,
                  "name": "_bank",
                  "nodeType": "VariableDeclaration",
                  "scope": 15847,
                  "src": "386:21:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                    "typeString": "contract MockCentralBank"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15836,
                    "name": "MockCentralBank",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 15770,
                    "src": "386:15:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15839,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 15847,
                  "src": "409:14:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15838,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "409:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "385:39:54"
            },
            "payable": false,
            "returnParameters": {
              "id": 15845,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "486:0:54"
            },
            "scope": 15908,
            "src": "374:114:54",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15850,
              "nodeType": "Block",
              "src": "521:2:54",
              "statements": []
            },
            "documentation": null,
            "id": 15851,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15848,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "503:2:54"
            },
            "payable": true,
            "returnParameters": {
              "id": 15849,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "521:0:54"
            },
            "scope": 15908,
            "src": "494:29:54",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15872,
              "nodeType": "Block",
              "src": "603:91:54",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15863,
                        "name": "etherAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15853,
                        "src": "632:11:54",
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
                        "id": 15860,
                        "name": "bank",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15776,
                        "src": "613:4:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                          "typeString": "contract MockCentralBank"
                        }
                      },
                      "id": 15862,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdrawEther",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 15719,
                      "src": "613:18:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 15864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "613:31:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 15865,
                  "nodeType": "ExpressionStatement",
                  "src": "613:31:54"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15869,
                        "name": "etherAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15853,
                        "src": "675:11:54",
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
                        "id": 15866,
                        "name": "destination",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15855,
                        "src": "654:11:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 15868,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "654:20:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 15870,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "654:33:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 15871,
                  "nodeType": "ExpressionStatement",
                  "src": "654:33:54"
                }
              ]
            },
            "documentation": null,
            "id": 15873,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 15858,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15857,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15805,
                  "src": "593:9:54",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "593:9:54"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15853,
                  "name": "etherAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15873,
                  "src": "547:16:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15852,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:4:54",
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
                  "id": 15855,
                  "name": "destination",
                  "nodeType": "VariableDeclaration",
                  "scope": 15873,
                  "src": "565:19:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15854,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "565:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "546:39:54"
            },
            "payable": false,
            "returnParameters": {
              "id": 15859,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "603:0:54"
            },
            "scope": 15908,
            "src": "529:165:54",
            "stateMutability": "nonpayable",
            "superFunction": 15818,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15895,
              "nodeType": "Block",
              "src": "754:108:54",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 15885,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 15881,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35114,
                            "src": "776:4:54",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockDepositAddressEther_$15908",
                              "typeString": "contract MockDepositAddressEther"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MockDepositAddressEther_$15908",
                              "typeString": "contract MockDepositAddressEther"
                            }
                          ],
                          "id": 15880,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "768:7:54",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 15882,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "768:13:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 15883,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "768:21:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 15884,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15875,
                      "src": "793:6:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "768:31:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 15894,
                  "nodeType": "IfStatement",
                  "src": "764:92:54",
                  "trueBody": {
                    "id": 15893,
                    "nodeType": "Block",
                    "src": "801:55:54",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 15890,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15875,
                              "src": "838:6:54",
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
                                  "id": 15887,
                                  "name": "bank",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 15776,
                                  "src": "823:4:54",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                                    "typeString": "contract MockCentralBank"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                                    "typeString": "contract MockCentralBank"
                                  }
                                ],
                                "id": 15886,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "815:7:54",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 15888,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "815:13:54",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 15889,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "815:22:54",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 15891,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "815:30:54",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 15892,
                        "nodeType": "ExpressionStatement",
                        "src": "815:30:54"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 15896,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 15878,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15877,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15805,
                  "src": "744:9:54",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "744:9:54"
              }
            ],
            "name": "clearBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15875,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15896,
                  "src": "723:11:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15874,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "723:4:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "721:15:54"
            },
            "payable": false,
            "returnParameters": {
              "id": 15879,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "754:0:54"
            },
            "scope": 15908,
            "src": "700:162:54",
            "stateMutability": "nonpayable",
            "superFunction": 15823,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15906,
              "nodeType": "Block",
              "src": "917:45:54",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 15902,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 35114,
                          "src": "942:4:54",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockDepositAddressEther_$15908",
                            "typeString": "contract MockDepositAddressEther"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_MockDepositAddressEther_$15908",
                            "typeString": "contract MockDepositAddressEther"
                          }
                        ],
                        "id": 15901,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "934:7:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 15903,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "934:13:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 15904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "balance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "934:21:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 15900,
                  "id": 15905,
                  "nodeType": "Return",
                  "src": "927:28:54"
                }
              ]
            },
            "documentation": null,
            "id": 15907,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15897,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "887:2:54"
            },
            "payable": false,
            "returnParameters": {
              "id": 15900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15899,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15907,
                  "src": "911:4:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15898,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "911:4:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "910:6:54"
            },
            "scope": 15908,
            "src": "868:94:54",
            "stateMutability": "view",
            "superFunction": 15828,
            "visibility": "public"
          }
        ],
        "scope": 15909,
        "src": "313:651:54"
      }
    ],
    "src": "0:965:54"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddressEther.sol",
    "exportedSymbols": {
      "MockDepositAddressEther": [
        15908
      ]
    },
    "id": 15909,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 15831,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:54"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockCentralBank.sol",
        "file": "./MockCentralBank.sol",
        "id": 15832,
        "nodeType": "ImportDirective",
        "scope": 15909,
        "sourceUnit": 15771,
        "src": "26:31:54",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/kyber/MockDepositAddress.sol",
        "file": "./MockDepositAddress.sol",
        "id": 15833,
        "nodeType": "ImportDirective",
        "scope": 15909,
        "sourceUnit": 15830,
        "src": "58:34:54",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 15834,
              "name": "MockDepositAddress",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 15829,
              "src": "349:18:54",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MockDepositAddress_$15829",
                "typeString": "contract MockDepositAddress"
              }
            },
            "id": 15835,
            "nodeType": "InheritanceSpecifier",
            "src": "349:18:54"
          }
        ],
        "contractDependencies": [
          15829
        ],
        "contractKind": "contract",
        "documentation": "@title Mock Deposit Address for Ethers\n @author Ilan Doron\n @dev a dummy contract that simulates a deposit address of a token on a specific exchange.\n         allows reserve manager to deposit and withdraw",
        "fullyImplemented": true,
        "id": 15908,
        "linearizedBaseContracts": [
          15908,
          15829
        ],
        "name": "MockDepositAddressEther",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 15846,
              "nodeType": "Block",
              "src": "486:2:54",
              "statements": []
            },
            "documentation": null,
            "id": 15847,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 15842,
                    "name": "_bank",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 15837,
                    "src": "452:5:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 15843,
                    "name": "_owner",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 15839,
                    "src": "459:6:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  }
                ],
                "id": 15844,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15841,
                  "name": "MockDepositAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15829,
                  "src": "433:18:54",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_MockDepositAddress_$15829_$",
                    "typeString": "type(contract MockDepositAddress)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "433:33:54"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15837,
                  "name": "_bank",
                  "nodeType": "VariableDeclaration",
                  "scope": 15847,
                  "src": "386:21:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                    "typeString": "contract MockCentralBank"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 15836,
                    "name": "MockCentralBank",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 15770,
                    "src": "386:15:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                      "typeString": "contract MockCentralBank"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15839,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 15847,
                  "src": "409:14:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15838,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "409:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "385:39:54"
            },
            "payable": false,
            "returnParameters": {
              "id": 15845,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "486:0:54"
            },
            "scope": 15908,
            "src": "374:114:54",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15850,
              "nodeType": "Block",
              "src": "521:2:54",
              "statements": []
            },
            "documentation": null,
            "id": 15851,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15848,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "503:2:54"
            },
            "payable": true,
            "returnParameters": {
              "id": 15849,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "521:0:54"
            },
            "scope": 15908,
            "src": "494:29:54",
            "stateMutability": "payable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15872,
              "nodeType": "Block",
              "src": "603:91:54",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15863,
                        "name": "etherAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15853,
                        "src": "632:11:54",
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
                        "id": 15860,
                        "name": "bank",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15776,
                        "src": "613:4:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                          "typeString": "contract MockCentralBank"
                        }
                      },
                      "id": 15862,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdrawEther",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 15719,
                      "src": "613:18:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256) external"
                      }
                    },
                    "id": 15864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "613:31:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 15865,
                  "nodeType": "ExpressionStatement",
                  "src": "613:31:54"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 15869,
                        "name": "etherAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15853,
                        "src": "675:11:54",
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
                        "id": 15866,
                        "name": "destination",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15855,
                        "src": "654:11:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 15868,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "654:20:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 15870,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "654:33:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 15871,
                  "nodeType": "ExpressionStatement",
                  "src": "654:33:54"
                }
              ]
            },
            "documentation": null,
            "id": 15873,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 15858,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15857,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15805,
                  "src": "593:9:54",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "593:9:54"
              }
            ],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15853,
                  "name": "etherAmount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15873,
                  "src": "547:16:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15852,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "547:4:54",
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
                  "id": 15855,
                  "name": "destination",
                  "nodeType": "VariableDeclaration",
                  "scope": 15873,
                  "src": "565:19:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 15854,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "565:7:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "546:39:54"
            },
            "payable": false,
            "returnParameters": {
              "id": 15859,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "603:0:54"
            },
            "scope": 15908,
            "src": "529:165:54",
            "stateMutability": "nonpayable",
            "superFunction": 15818,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15895,
              "nodeType": "Block",
              "src": "754:108:54",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 15885,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 15881,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 35114,
                            "src": "776:4:54",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockDepositAddressEther_$15908",
                              "typeString": "contract MockDepositAddressEther"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MockDepositAddressEther_$15908",
                              "typeString": "contract MockDepositAddressEther"
                            }
                          ],
                          "id": 15880,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "768:7:54",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": "address"
                        },
                        "id": 15882,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "768:13:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "id": 15883,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "768:21:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 15884,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15875,
                      "src": "793:6:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "768:31:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 15894,
                  "nodeType": "IfStatement",
                  "src": "764:92:54",
                  "trueBody": {
                    "id": 15893,
                    "nodeType": "Block",
                    "src": "801:55:54",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 15890,
                              "name": "amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 15875,
                              "src": "838:6:54",
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
                                  "id": 15887,
                                  "name": "bank",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 15776,
                                  "src": "823:4:54",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                                    "typeString": "contract MockCentralBank"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_MockCentralBank_$15770",
                                    "typeString": "contract MockCentralBank"
                                  }
                                ],
                                "id": 15886,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "815:7:54",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 15888,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "815:13:54",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 15889,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "transfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "815:22:54",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 15891,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "815:30:54",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 15892,
                        "nodeType": "ExpressionStatement",
                        "src": "815:30:54"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": null,
            "id": 15896,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 15878,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 15877,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 15805,
                  "src": "744:9:54",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "744:9:54"
              }
            ],
            "name": "clearBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15875,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 15896,
                  "src": "723:11:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15874,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "723:4:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "721:15:54"
            },
            "payable": false,
            "returnParameters": {
              "id": 15879,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "754:0:54"
            },
            "scope": 15908,
            "src": "700:162:54",
            "stateMutability": "nonpayable",
            "superFunction": 15823,
            "visibility": "public"
          },
          {
            "body": {
              "id": 15906,
              "nodeType": "Block",
              "src": "917:45:54",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 15902,
                          "name": "this",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 35114,
                          "src": "942:4:54",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_MockDepositAddressEther_$15908",
                            "typeString": "contract MockDepositAddressEther"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_contract$_MockDepositAddressEther_$15908",
                            "typeString": "contract MockDepositAddressEther"
                          }
                        ],
                        "id": 15901,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "934:7:54",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 15903,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "934:13:54",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 15904,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "balance",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "934:21:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 15900,
                  "id": 15905,
                  "nodeType": "Return",
                  "src": "927:28:54"
                }
              ]
            },
            "documentation": null,
            "id": 15907,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 15897,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "887:2:54"
            },
            "payable": false,
            "returnParameters": {
              "id": 15900,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15899,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 15907,
                  "src": "911:4:54",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 15898,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "911:4:54",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "910:6:54"
            },
            "scope": 15908,
            "src": "868:94:54",
            "stateMutability": "view",
            "superFunction": 15828,
            "visibility": "public"
          }
        ],
        "scope": 15909,
        "src": "313:651:54"
      }
    ],
    "src": "0:965:54"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.2",
  "updatedAt": "2019-03-14T21:46:28.645Z",
  "devdoc": {
    "author": "Ilan Doron",
    "methods": {},
    "title": "Mock Deposit Address for Ethers"
  },
  "userdoc": {
    "methods": {}
  }
}