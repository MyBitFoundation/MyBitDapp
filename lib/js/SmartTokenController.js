"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var SmartTokenController = exports.SmartTokenController = 
{
  "contractName": "SmartTokenController",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "newOwner",
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
      "constant": true,
      "inputs": [],
      "name": "token",
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
          "name": "_token",
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
          "name": "_prevOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerUpdate",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferTokenOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "acceptTokenOwnership",
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
      "name": "disableTokenTransfers",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawFromToken",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506040516020806106c0833981016040525160008054600160a060020a0319163317905580600160a060020a038116151561004a57600080fd5b5060028054600160a060020a031916600160a060020a03929092169190911790556106468061007a6000396000f30060806040526004361061008a5763ffffffff60e060020a60003504166321e6b53d811461008f57806338a5e016146100b257806341a5b33d146100c75780635e35359e146100f157806379ba50971461011b57806385d5e631146101305780638da5cb5b1461014a578063d4ee1d901461017b578063f2fde38b14610190578063fc0c546a146101b1575b600080fd5b34801561009b57600080fd5b506100b0600160a060020a03600435166101c6565b005b3480156100be57600080fd5b506100b061025f565b3480156100d357600080fd5b506100b0600160a060020a03600435811690602435166044356102e3565b3480156100fd57600080fd5b506100b0600160a060020a036004358116906024351660443561038d565b34801561012757600080fd5b506100b0610486565b34801561013c57600080fd5b506100b0600435151561050e565b34801561015657600080fd5b5061015f61058c565b60408051600160a060020a039092168252519081900360200190f35b34801561018757600080fd5b5061015f61059b565b34801561019c57600080fd5b506100b0600160a060020a03600435166105aa565b3480156101bd57600080fd5b5061015f61060b565b600054600160a060020a031633146101dd57600080fd5b600254604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a0384811660048301529151919092169163f2fde38b91602480830192600092919082900301818387803b15801561024457600080fd5b505af1158015610258573d6000803e3d6000fd5b5050505050565b600054600160a060020a0316331461027657600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166379ba50976040518163ffffffff1660e060020a028152600401600060405180830381600087803b1580156102c957600080fd5b505af11580156102dd573d6000803e3d6000fd5b50505050565b600054600160a060020a031633146102fa57600080fd5b600254604080517f5e35359e000000000000000000000000000000000000000000000000000000008152600160a060020a03868116600483015285811660248301526044820185905291519190921691635e35359e91606480830192600092919082900301818387803b15801561037057600080fd5b505af1158015610384573d6000803e3d6000fd5b50505050505050565b600054600160a060020a031633146103a457600080fd5b82600160a060020a03811615156103ba57600080fd5b82600160a060020a03811615156103d057600080fd5b83600160a060020a0381163014156103e757600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561044a57600080fd5b505af115801561045e573d6000803e3d6000fd5b505050506040513d602081101561047457600080fd5b5051151561047e57fe5b505050505050565b600154600160a060020a0316331461049d57600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a0316331461052557600080fd5b600254604080517f1608f18f00000000000000000000000000000000000000000000000000000000815283151560048201529051600160a060020a0390921691631608f18f9160248082019260009290919082900301818387803b15801561024457600080fd5b600054600160a060020a031681565b600154600160a060020a031681565b600054600160a060020a031633146105c157600080fd5b600054600160a060020a03828116911614156105dc57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a0316815600a165627a7a7230582093c83a2396984af2830db1c982bbd4b069787a33dc33d81287feea22452d56380029",
  "deployedBytecode": "0x60806040526004361061008a5763ffffffff60e060020a60003504166321e6b53d811461008f57806338a5e016146100b257806341a5b33d146100c75780635e35359e146100f157806379ba50971461011b57806385d5e631146101305780638da5cb5b1461014a578063d4ee1d901461017b578063f2fde38b14610190578063fc0c546a146101b1575b600080fd5b34801561009b57600080fd5b506100b0600160a060020a03600435166101c6565b005b3480156100be57600080fd5b506100b061025f565b3480156100d357600080fd5b506100b0600160a060020a03600435811690602435166044356102e3565b3480156100fd57600080fd5b506100b0600160a060020a036004358116906024351660443561038d565b34801561012757600080fd5b506100b0610486565b34801561013c57600080fd5b506100b0600435151561050e565b34801561015657600080fd5b5061015f61058c565b60408051600160a060020a039092168252519081900360200190f35b34801561018757600080fd5b5061015f61059b565b34801561019c57600080fd5b506100b0600160a060020a03600435166105aa565b3480156101bd57600080fd5b5061015f61060b565b600054600160a060020a031633146101dd57600080fd5b600254604080517ff2fde38b000000000000000000000000000000000000000000000000000000008152600160a060020a0384811660048301529151919092169163f2fde38b91602480830192600092919082900301818387803b15801561024457600080fd5b505af1158015610258573d6000803e3d6000fd5b5050505050565b600054600160a060020a0316331461027657600080fd5b600260009054906101000a9004600160a060020a0316600160a060020a03166379ba50976040518163ffffffff1660e060020a028152600401600060405180830381600087803b1580156102c957600080fd5b505af11580156102dd573d6000803e3d6000fd5b50505050565b600054600160a060020a031633146102fa57600080fd5b600254604080517f5e35359e000000000000000000000000000000000000000000000000000000008152600160a060020a03868116600483015285811660248301526044820185905291519190921691635e35359e91606480830192600092919082900301818387803b15801561037057600080fd5b505af1158015610384573d6000803e3d6000fd5b50505050505050565b600054600160a060020a031633146103a457600080fd5b82600160a060020a03811615156103ba57600080fd5b82600160a060020a03811615156103d057600080fd5b83600160a060020a0381163014156103e757600080fd5b85600160a060020a031663a9059cbb86866040518363ffffffff1660e060020a0281526004018083600160a060020a0316600160a060020a0316815260200182815260200192505050602060405180830381600087803b15801561044a57600080fd5b505af115801561045e573d6000803e3d6000fd5b505050506040513d602081101561047457600080fd5b5051151561047e57fe5b505050505050565b600154600160a060020a0316331461049d57600080fd5b60015460008054604051600160a060020a0393841693909116917f343765429aea5a34b3ff6a3785a98a5abb2597aca87bfbb58632c173d585373a91a3600180546000805473ffffffffffffffffffffffffffffffffffffffff19908116600160a060020a03841617909155169055565b600054600160a060020a0316331461052557600080fd5b600254604080517f1608f18f00000000000000000000000000000000000000000000000000000000815283151560048201529051600160a060020a0390921691631608f18f9160248082019260009290919082900301818387803b15801561024457600080fd5b600054600160a060020a031681565b600154600160a060020a031681565b600054600160a060020a031633146105c157600080fd5b600054600160a060020a03828116911614156105dc57600080fd5b6001805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600254600160a060020a0316815600a165627a7a7230582093c83a2396984af2830db1c982bbd4b069787a33dc33d81287feea22452d56380029",
  "sourceMap": "945:1888:28:-;;;1084:111;8:9:-1;5:2;;;30:1;27;20:12;5:2;1084:111:28;;;;;;;;;;;;;361:5:35;:18;;-1:-1:-1;;;;;;361:18:35;369:10;361:18;;;1084:111:28;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;-1:-1:-1;1174:5:28;:14;;-1:-1:-1;;;;;;1174:14:28;-1:-1:-1;;;;;1174:14:28;;;;;;;;;;945:1888;;;-1:-1:-1;945:1888:28;;",
  "deployedSourceMap": "945:1888:28:-;;;;;;;;;-1:-1:-1;;;945:1888:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1714:119;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1714:119:28;-1:-1:-1;;;;;1714:119:28;;;;;;;1973:89;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1973:89:28;;;;2664:167;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2664:167:28;-1:-1:-1;;;;;2664:167:28;;;;;;;;;;;;899:241:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;899:241:36;-1:-1:-1;;;;;899:241:36;;;;;;;;;;;;963:182:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;963:182:35;;;;2254:112:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2254:112:28;;;;;;;155:20:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;155:20:35;;;;;;;;-1:-1:-1;;;;;155:20:35;;;;;;;;;;;;;;181:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;181:23:35;;;;740:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;740:137:35;-1:-1:-1;;;;;740:137:35;;;;;996:24:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;996:24:28;;;;1714:119;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;1792:5:28;;:34;;;;;;-1:-1:-1;;;;;1792:34:28;;;;;;;;;:5;;;;;:23;;:34;;;;;:5;;:34;;;;;;;:5;;:34;;;5:2:-1;;;;30:1;27;20:12;5:2;1792:34:28;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1792:34:28;;;;1714:119;:::o;1973:89::-;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;2032:5:28;;;;;;;;;-1:-1:-1;;;;;2032:5:28;-1:-1:-1;;;;;2032:21:28;;:23;;;;;-1:-1:-1;;;2032:23:28;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2032:23:28;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2032:23:28;;;;1973:89::o;2664:167::-;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;2781:5:28;;2768:56;;;;;;-1:-1:-1;;;;;2768:56:28;;;;;;;;;;;;;;;;;;;;;;2781:5;;;;;2768:34;;:56;;;;;2781:5;;2768:56;;;;;;;2781:5;;2768:56;;;5:2:-1;;;;30:1;27;20:12;5:2;2768:56:28;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2768:56:28;;;;2664:167;;;:::o;899:241:36:-;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;1027:6:36;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;1056:3:36;-1:-1:-1;;;;;432:22:37;;;;424:31;;;;;;1077:3:36;-1:-1:-1;;;;;605:25:37;;625:4;605:25;;597:34;;;;;;1103:6:36;-1:-1:-1;;;;;1103:15:36;;1119:3;1124:7;1103:29;;;;;-1:-1:-1;;;1103:29:36;;;;;;;-1:-1:-1;;;;;1103:29:36;-1:-1:-1;;;;;1103:29:36;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1103:29:36;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1103:29:36;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1103:29:36;1096:37;;;;;;465:1:37;;501::35;899:241:36;;;:::o;963:182:35:-;1029:8;;-1:-1:-1;;;;;1029:8:35;1015:10;:22;1007:31;;;;;;1072:8;;;1065:5;;1053:28;;-1:-1:-1;;;;;1072:8:35;;;;1065:5;;;;1053:28;;;1099:8;;;;1091:16;;-1:-1:-1;;1091:16:35;;;-1:-1:-1;;;;;1099:8:35;;1091:16;;;;1117:21;;;963:182::o;2254:112:28:-;485:5:35;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;2327:5:28;;:32;;;;;;;;;;;;;;;-1:-1:-1;;;;;2327:5:28;;;;:22;;:32;;;;;:5;;:32;;;;;;;;:5;;:32;;;5:2:-1;;;;30:1;27;20:12;155:20:35;;;-1:-1:-1;;;;;155:20:35;;:::o;181:23::-;;;-1:-1:-1;;;;;181:23:35;;:::o;740:137::-;485:5;;-1:-1:-1;;;;;485:5:35;471:10;:19;463:28;;;;;;834:5;;-1:-1:-1;;;;;821:18:35;;;834:5;;821:18;;813:27;;;;;;850:8;:20;;-1:-1:-1;;850:20:35;-1:-1:-1;;;;;850:20:35;;;;;;;;;;740:137::o;996:24:28:-;;;-1:-1:-1;;;;;996:24:28;;:::o",
  "source": "pragma solidity ^0.4.24;\nimport './interfaces/ISmartToken.sol';\nimport '../utility/TokenHolder.sol';\n\n/*\n    The smart token controller is an upgradable part of the smart token that allows\n    more functionality as well as fixes for bugs/exploits.\n    Once it accepts ownership of the token, it becomes the token's sole controller\n    that can execute any of its functions.\n\n    To upgrade the controller, ownership must be transferred to a new controller, along with\n    any relevant data.\n\n    The smart token must be set on construction and cannot be changed afterwards.\n    Wrappers are provided (as opposed to a single 'execute' function) for each of the token's functions, for easier access.\n\n    Note that the controller can transfer token ownership to a new controller that\n    doesn't allow executing any function on the token, for a trustless solution.\n    Doing that will also remove the owner's ability to upgrade the controller.\n*/\ncontract SmartTokenController is TokenHolder {\n    ISmartToken public token;   // smart token\n\n    /**\n        @dev constructor\n    */\n    constructor(ISmartToken _token)\n        public\n        validAddress(_token)\n    {\n        token = _token;\n    }\n\n    // ensures that the controller is the token's owner\n    modifier active() {\n        require(token.owner() == address(this));\n        _;\n    }\n\n    // ensures that the controller is not the token's owner\n    modifier inactive() {\n        require(token.owner() != address(this));\n        _;\n    }\n\n    /**\n        @dev allows transferring the token ownership\n        the new owner needs to accept the transfer\n        can only be called by the contract owner\n\n        @param _newOwner    new token owner\n    */\n    function transferTokenOwnership(address _newOwner) public ownerOnly {\n        token.transferOwnership(_newOwner);\n    }\n\n    /**\n        @dev used by a new owner to accept a token ownership transfer\n        can only be called by the contract owner\n    */\n    function acceptTokenOwnership() public ownerOnly {\n        token.acceptOwnership();\n    }\n\n    /**\n        @dev disables/enables token transfers\n        can only be called by the contract owner\n\n        @param _disable    true to disable transfers, false to enable them\n    */\n    function disableTokenTransfers(bool _disable) public ownerOnly {\n        token.disableTransfers(_disable);\n    }\n\n    /**\n        @dev withdraws tokens held by the controller and sends them to an account\n        can only be called by the owner\n\n        @param _token   ERC20 token contract address\n        @param _to      account to receive the new amount\n        @param _amount  amount to withdraw\n    */\n    function withdrawFromToken(IERC20Token _token, address _to, uint256 _amount) public ownerOnly {\n        ITokenHolder(token).withdrawTokens(_token, _to, _amount);\n    }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/SmartTokenController.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/SmartTokenController.sol",
    "exportedSymbols": {
      "SmartTokenController": [
        8821
      ]
    },
    "id": 8822,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8713,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:28"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
        "file": "./interfaces/ISmartToken.sol",
        "id": 8714,
        "nodeType": "ImportDirective",
        "scope": 8822,
        "sourceUnit": 8954,
        "src": "25:38:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/TokenHolder.sol",
        "file": "../utility/TokenHolder.sol",
        "id": 8715,
        "nodeType": "ImportDirective",
        "scope": 8822,
        "sourceUnit": 9561,
        "src": "64:36:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8716,
              "name": "TokenHolder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9560,
              "src": "978:11:28",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenHolder_$9560",
                "typeString": "contract TokenHolder"
              }
            },
            "id": 8717,
            "nodeType": "InheritanceSpecifier",
            "src": "978:11:28"
          }
        ],
        "contractDependencies": [
          9514,
          9560,
          9681,
          9887,
          9903
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 8821,
        "linearizedBaseContracts": [
          8821,
          9560,
          9681,
          9514,
          9903,
          9887
        ],
        "name": "SmartTokenController",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 8719,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 8821,
            "src": "996:24:28",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ISmartToken_$8953",
              "typeString": "contract ISmartToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 8718,
              "name": "ISmartToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8953,
              "src": "996:11:28",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ISmartToken_$8953",
                "typeString": "contract ISmartToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8731,
              "nodeType": "Block",
              "src": "1164:31:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 8727,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8719,
                      "src": "1174:5:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ISmartToken_$8953",
                        "typeString": "contract ISmartToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 8728,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8721,
                      "src": "1182:6:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ISmartToken_$8953",
                        "typeString": "contract ISmartToken"
                      }
                    },
                    "src": "1174:14:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  },
                  "id": 8730,
                  "nodeType": "ExpressionStatement",
                  "src": "1174:14:28"
                }
              ]
            },
            "documentation": "@dev constructor",
            "id": 8732,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 8724,
                    "name": "_token",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8721,
                    "src": "1152:6:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  }
                ],
                "id": 8725,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8723,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "1139:12:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1139:20:28"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8721,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8732,
                  "src": "1096:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ISmartToken_$8953",
                    "typeString": "contract ISmartToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 8720,
                    "name": "ISmartToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8953,
                    "src": "1096:11:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1095:20:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1164:0:28"
            },
            "scope": 8821,
            "src": "1084:111:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8745,
              "nodeType": "Block",
              "src": "1275:67:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 8741,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 8735,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8719,
                              "src": "1293:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ISmartToken_$8953",
                                "typeString": "contract ISmartToken"
                              }
                            },
                            "id": 8736,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9878,
                            "src": "1293:11:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_pure$__$returns$_t_address_$",
                              "typeString": "function () pure external returns (address)"
                            }
                          },
                          "id": 8737,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1293:13:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 8739,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28119,
                              "src": "1318:4:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SmartTokenController_$8821",
                                "typeString": "contract SmartTokenController"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_SmartTokenController_$8821",
                                "typeString": "contract SmartTokenController"
                              }
                            ],
                            "id": 8738,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1310:7:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 8740,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1310:13:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1293:30:28",
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
                      "id": 8734,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1285:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 8742,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1285:39:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8743,
                  "nodeType": "ExpressionStatement",
                  "src": "1285:39:28"
                },
                {
                  "id": 8744,
                  "nodeType": "PlaceholderStatement",
                  "src": "1334:1:28"
                }
              ]
            },
            "documentation": null,
            "id": 8746,
            "name": "active",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 8733,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1272:2:28"
            },
            "src": "1257:85:28",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8759,
              "nodeType": "Block",
              "src": "1428:67:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 8755,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 8749,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8719,
                              "src": "1446:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ISmartToken_$8953",
                                "typeString": "contract ISmartToken"
                              }
                            },
                            "id": 8750,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9878,
                            "src": "1446:11:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_pure$__$returns$_t_address_$",
                              "typeString": "function () pure external returns (address)"
                            }
                          },
                          "id": 8751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1446:13:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 8753,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28119,
                              "src": "1471:4:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SmartTokenController_$8821",
                                "typeString": "contract SmartTokenController"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_SmartTokenController_$8821",
                                "typeString": "contract SmartTokenController"
                              }
                            ],
                            "id": 8752,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1463:7:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 8754,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1463:13:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1446:30:28",
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
                      "id": 8748,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1438:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 8756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1438:39:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8757,
                  "nodeType": "ExpressionStatement",
                  "src": "1438:39:28"
                },
                {
                  "id": 8758,
                  "nodeType": "PlaceholderStatement",
                  "src": "1487:1:28"
                }
              ]
            },
            "documentation": null,
            "id": 8760,
            "name": "inactive",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 8747,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1425:2:28"
            },
            "src": "1408:87:28",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8773,
              "nodeType": "Block",
              "src": "1782:51:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8770,
                        "name": "_newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8762,
                        "src": "1816:9:28",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 8767,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8719,
                        "src": "1792:5:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ISmartToken_$8953",
                          "typeString": "contract ISmartToken"
                        }
                      },
                      "id": 8769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferOwnership",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9883,
                      "src": "1792:23:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 8771,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1792:34:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8772,
                  "nodeType": "ExpressionStatement",
                  "src": "1792:34:28"
                }
              ]
            },
            "documentation": "@dev allows transferring the token ownership\nthe new owner needs to accept the transfer\ncan only be called by the contract owner\n@param _newOwner    new token owner",
            "id": 8774,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8765,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8764,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "1772:9:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1772:9:28"
              }
            ],
            "name": "transferTokenOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8762,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8774,
                  "src": "1746:17:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8761,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1746:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1745:19:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8766,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1782:0:28"
            },
            "scope": 8821,
            "src": "1714:119:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8784,
              "nodeType": "Block",
              "src": "2022:40:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 8779,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8719,
                        "src": "2032:5:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ISmartToken_$8953",
                          "typeString": "contract ISmartToken"
                        }
                      },
                      "id": 8781,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "acceptOwnership",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9886,
                      "src": "2032:21:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
                        "typeString": "function () external"
                      }
                    },
                    "id": 8782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2032:23:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8783,
                  "nodeType": "ExpressionStatement",
                  "src": "2032:23:28"
                }
              ]
            },
            "documentation": "@dev used by a new owner to accept a token ownership transfer\ncan only be called by the contract owner",
            "id": 8785,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8777,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8776,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "2012:9:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2012:9:28"
              }
            ],
            "name": "acceptTokenOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8775,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2002:2:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8778,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2022:0:28"
            },
            "scope": 8821,
            "src": "1973:89:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8798,
              "nodeType": "Block",
              "src": "2317:49:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8795,
                        "name": "_disable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8787,
                        "src": "2350:8:28",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 8792,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8719,
                        "src": "2327:5:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ISmartToken_$8953",
                          "typeString": "contract ISmartToken"
                        }
                      },
                      "id": 8794,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "disableTransfers",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8938,
                      "src": "2327:22:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool) external"
                      }
                    },
                    "id": 8796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2327:32:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8797,
                  "nodeType": "ExpressionStatement",
                  "src": "2327:32:28"
                }
              ]
            },
            "documentation": "@dev disables/enables token transfers\ncan only be called by the contract owner\n@param _disable    true to disable transfers, false to enable them",
            "id": 8799,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8790,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8789,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "2307:9:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2307:9:28"
              }
            ],
            "name": "disableTokenTransfers",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8787,
                  "name": "_disable",
                  "nodeType": "VariableDeclaration",
                  "scope": 8799,
                  "src": "2285:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8786,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2285:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2284:15:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8791,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2317:0:28"
            },
            "scope": 8821,
            "src": "2254:112:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8819,
              "nodeType": "Block",
              "src": "2758:73:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8814,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8801,
                        "src": "2803:6:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$8901",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8815,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8803,
                        "src": "2811:3:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8816,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8805,
                        "src": "2816:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IERC20Token_$8901",
                          "typeString": "contract IERC20Token"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
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
                            "id": 8811,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8719,
                            "src": "2781:5:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ISmartToken_$8953",
                              "typeString": "contract ISmartToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ISmartToken_$8953",
                              "typeString": "contract ISmartToken"
                            }
                          ],
                          "id": 8810,
                          "name": "ITokenHolder",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9903,
                          "src": "2768:12:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ITokenHolder_$9903_$",
                            "typeString": "type(contract ITokenHolder)"
                          }
                        },
                        "id": 8812,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2768:19:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ITokenHolder_$9903",
                          "typeString": "contract ITokenHolder"
                        }
                      },
                      "id": 8813,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdrawTokens",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9902,
                      "src": "2768:34:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_contract$_IERC20Token_$8901_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (contract IERC20Token,address,uint256) external"
                      }
                    },
                    "id": 8817,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2768:56:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8818,
                  "nodeType": "ExpressionStatement",
                  "src": "2768:56:28"
                }
              ]
            },
            "documentation": "@dev withdraws tokens held by the controller and sends them to an account\ncan only be called by the owner\n@param _token   ERC20 token contract address\n@param _to      account to receive the new amount\n@param _amount  amount to withdraw",
            "id": 8820,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8808,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8807,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "2748:9:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2748:9:28"
              }
            ],
            "name": "withdrawFromToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8801,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8820,
                  "src": "2691:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 8800,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "2691:11:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8803,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8820,
                  "src": "2711:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8802,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2711:7:28",
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
                  "id": 8805,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8820,
                  "src": "2724:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8804,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2724:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2690:50:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8809,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2758:0:28"
            },
            "scope": 8821,
            "src": "2664:167:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8822,
        "src": "945:1888:28"
      }
    ],
    "src": "0:2834:28"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/SmartTokenController.sol",
    "exportedSymbols": {
      "SmartTokenController": [
        8821
      ]
    },
    "id": 8822,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8713,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:28"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/token/interfaces/ISmartToken.sol",
        "file": "./interfaces/ISmartToken.sol",
        "id": 8714,
        "nodeType": "ImportDirective",
        "scope": 8822,
        "sourceUnit": 8954,
        "src": "25:38:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/bancor/utility/TokenHolder.sol",
        "file": "../utility/TokenHolder.sol",
        "id": 8715,
        "nodeType": "ImportDirective",
        "scope": 8822,
        "sourceUnit": 9561,
        "src": "64:36:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8716,
              "name": "TokenHolder",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9560,
              "src": "978:11:28",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenHolder_$9560",
                "typeString": "contract TokenHolder"
              }
            },
            "id": 8717,
            "nodeType": "InheritanceSpecifier",
            "src": "978:11:28"
          }
        ],
        "contractDependencies": [
          9514,
          9560,
          9681,
          9887,
          9903
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 8821,
        "linearizedBaseContracts": [
          8821,
          9560,
          9681,
          9514,
          9903,
          9887
        ],
        "name": "SmartTokenController",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 8719,
            "name": "token",
            "nodeType": "VariableDeclaration",
            "scope": 8821,
            "src": "996:24:28",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_ISmartToken_$8953",
              "typeString": "contract ISmartToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 8718,
              "name": "ISmartToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 8953,
              "src": "996:11:28",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ISmartToken_$8953",
                "typeString": "contract ISmartToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8731,
              "nodeType": "Block",
              "src": "1164:31:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 8729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 8727,
                      "name": "token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8719,
                      "src": "1174:5:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ISmartToken_$8953",
                        "typeString": "contract ISmartToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 8728,
                      "name": "_token",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8721,
                      "src": "1182:6:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_ISmartToken_$8953",
                        "typeString": "contract ISmartToken"
                      }
                    },
                    "src": "1174:14:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  },
                  "id": 8730,
                  "nodeType": "ExpressionStatement",
                  "src": "1174:14:28"
                }
              ]
            },
            "documentation": "@dev constructor",
            "id": 8732,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 8724,
                    "name": "_token",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8721,
                    "src": "1152:6:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  }
                ],
                "id": 8725,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8723,
                  "name": "validAddress",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9592,
                  "src": "1139:12:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$_t_address_$",
                    "typeString": "modifier (address)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1139:20:28"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8722,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8721,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8732,
                  "src": "1096:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ISmartToken_$8953",
                    "typeString": "contract ISmartToken"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 8720,
                    "name": "ISmartToken",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8953,
                    "src": "1096:11:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ISmartToken_$8953",
                      "typeString": "contract ISmartToken"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1095:20:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1164:0:28"
            },
            "scope": 8821,
            "src": "1084:111:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8745,
              "nodeType": "Block",
              "src": "1275:67:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 8741,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 8735,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8719,
                              "src": "1293:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ISmartToken_$8953",
                                "typeString": "contract ISmartToken"
                              }
                            },
                            "id": 8736,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9878,
                            "src": "1293:11:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_pure$__$returns$_t_address_$",
                              "typeString": "function () pure external returns (address)"
                            }
                          },
                          "id": 8737,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1293:13:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 8739,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28119,
                              "src": "1318:4:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SmartTokenController_$8821",
                                "typeString": "contract SmartTokenController"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_SmartTokenController_$8821",
                                "typeString": "contract SmartTokenController"
                              }
                            ],
                            "id": 8738,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1310:7:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 8740,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1310:13:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1293:30:28",
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
                      "id": 8734,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1285:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 8742,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1285:39:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8743,
                  "nodeType": "ExpressionStatement",
                  "src": "1285:39:28"
                },
                {
                  "id": 8744,
                  "nodeType": "PlaceholderStatement",
                  "src": "1334:1:28"
                }
              ]
            },
            "documentation": null,
            "id": 8746,
            "name": "active",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 8733,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1272:2:28"
            },
            "src": "1257:85:28",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8759,
              "nodeType": "Block",
              "src": "1428:67:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 8755,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "argumentTypes": null,
                              "id": 8749,
                              "name": "token",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8719,
                              "src": "1446:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ISmartToken_$8953",
                                "typeString": "contract ISmartToken"
                              }
                            },
                            "id": 8750,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "owner",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 9878,
                            "src": "1446:11:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_pure$__$returns$_t_address_$",
                              "typeString": "function () pure external returns (address)"
                            }
                          },
                          "id": 8751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1446:13:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 8753,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 28119,
                              "src": "1471:4:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_SmartTokenController_$8821",
                                "typeString": "contract SmartTokenController"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_SmartTokenController_$8821",
                                "typeString": "contract SmartTokenController"
                              }
                            ],
                            "id": 8752,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1463:7:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 8754,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1463:13:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1446:30:28",
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
                      "id": 8748,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        28041,
                        28042
                      ],
                      "referencedDeclaration": 28041,
                      "src": "1438:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 8756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1438:39:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8757,
                  "nodeType": "ExpressionStatement",
                  "src": "1438:39:28"
                },
                {
                  "id": 8758,
                  "nodeType": "PlaceholderStatement",
                  "src": "1487:1:28"
                }
              ]
            },
            "documentation": null,
            "id": 8760,
            "name": "inactive",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 8747,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1425:2:28"
            },
            "src": "1408:87:28",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 8773,
              "nodeType": "Block",
              "src": "1782:51:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8770,
                        "name": "_newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8762,
                        "src": "1816:9:28",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 8767,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8719,
                        "src": "1792:5:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ISmartToken_$8953",
                          "typeString": "contract ISmartToken"
                        }
                      },
                      "id": 8769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferOwnership",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9883,
                      "src": "1792:23:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address) external"
                      }
                    },
                    "id": 8771,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1792:34:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8772,
                  "nodeType": "ExpressionStatement",
                  "src": "1792:34:28"
                }
              ]
            },
            "documentation": "@dev allows transferring the token ownership\nthe new owner needs to accept the transfer\ncan only be called by the contract owner\n@param _newOwner    new token owner",
            "id": 8774,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8765,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8764,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "1772:9:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1772:9:28"
              }
            ],
            "name": "transferTokenOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8762,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 8774,
                  "src": "1746:17:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8761,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1746:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1745:19:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8766,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1782:0:28"
            },
            "scope": 8821,
            "src": "1714:119:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8784,
              "nodeType": "Block",
              "src": "2022:40:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 8779,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8719,
                        "src": "2032:5:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ISmartToken_$8953",
                          "typeString": "contract ISmartToken"
                        }
                      },
                      "id": 8781,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "acceptOwnership",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9886,
                      "src": "2032:21:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$__$returns$__$",
                        "typeString": "function () external"
                      }
                    },
                    "id": 8782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2032:23:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8783,
                  "nodeType": "ExpressionStatement",
                  "src": "2032:23:28"
                }
              ]
            },
            "documentation": "@dev used by a new owner to accept a token ownership transfer\ncan only be called by the contract owner",
            "id": 8785,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8777,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8776,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "2012:9:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2012:9:28"
              }
            ],
            "name": "acceptTokenOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8775,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2002:2:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8778,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2022:0:28"
            },
            "scope": 8821,
            "src": "1973:89:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8798,
              "nodeType": "Block",
              "src": "2317:49:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8795,
                        "name": "_disable",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8787,
                        "src": "2350:8:28",
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
                      "expression": {
                        "argumentTypes": null,
                        "id": 8792,
                        "name": "token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8719,
                        "src": "2327:5:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ISmartToken_$8953",
                          "typeString": "contract ISmartToken"
                        }
                      },
                      "id": 8794,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "disableTransfers",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8938,
                      "src": "2327:22:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool) external"
                      }
                    },
                    "id": 8796,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2327:32:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8797,
                  "nodeType": "ExpressionStatement",
                  "src": "2327:32:28"
                }
              ]
            },
            "documentation": "@dev disables/enables token transfers\ncan only be called by the contract owner\n@param _disable    true to disable transfers, false to enable them",
            "id": 8799,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8790,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8789,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "2307:9:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2307:9:28"
              }
            ],
            "name": "disableTokenTransfers",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8787,
                  "name": "_disable",
                  "nodeType": "VariableDeclaration",
                  "scope": 8799,
                  "src": "2285:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8786,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2285:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2284:15:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8791,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2317:0:28"
            },
            "scope": 8821,
            "src": "2254:112:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8819,
              "nodeType": "Block",
              "src": "2758:73:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 8814,
                        "name": "_token",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8801,
                        "src": "2803:6:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC20Token_$8901",
                          "typeString": "contract IERC20Token"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8815,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8803,
                        "src": "2811:3:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 8816,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8805,
                        "src": "2816:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_contract$_IERC20Token_$8901",
                          "typeString": "contract IERC20Token"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
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
                            "id": 8811,
                            "name": "token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8719,
                            "src": "2781:5:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ISmartToken_$8953",
                              "typeString": "contract ISmartToken"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ISmartToken_$8953",
                              "typeString": "contract ISmartToken"
                            }
                          ],
                          "id": 8810,
                          "name": "ITokenHolder",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9903,
                          "src": "2768:12:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ITokenHolder_$9903_$",
                            "typeString": "type(contract ITokenHolder)"
                          }
                        },
                        "id": 8812,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2768:19:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ITokenHolder_$9903",
                          "typeString": "contract ITokenHolder"
                        }
                      },
                      "id": 8813,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "withdrawTokens",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9902,
                      "src": "2768:34:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_contract$_IERC20Token_$8901_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (contract IERC20Token,address,uint256) external"
                      }
                    },
                    "id": 8817,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2768:56:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 8818,
                  "nodeType": "ExpressionStatement",
                  "src": "2768:56:28"
                }
              ]
            },
            "documentation": "@dev withdraws tokens held by the controller and sends them to an account\ncan only be called by the owner\n@param _token   ERC20 token contract address\n@param _to      account to receive the new amount\n@param _amount  amount to withdraw",
            "id": 8820,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 8808,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 8807,
                  "name": "ownerOnly",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9469,
                  "src": "2748:9:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2748:9:28"
              }
            ],
            "name": "withdrawFromToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8801,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 8820,
                  "src": "2691:18:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Token_$8901",
                    "typeString": "contract IERC20Token"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 8800,
                    "name": "IERC20Token",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 8901,
                    "src": "2691:11:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Token_$8901",
                      "typeString": "contract IERC20Token"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8803,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 8820,
                  "src": "2711:11:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8802,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2711:7:28",
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
                  "id": 8805,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 8820,
                  "src": "2724:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8804,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2724:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2690:50:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8809,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2758:0:28"
            },
            "scope": 8821,
            "src": "2664:167:28",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 8822,
        "src": "945:1888:28"
      }
    ],
    "src": "0:2834:28"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-06T01:09:52.888Z"
}