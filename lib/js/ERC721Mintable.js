"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var ERC721Mintable = exports.ERC721Mintable = 
{
  "contractName": "ERC721Mintable",
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
  "bytecode": "0x608060405234801561001057600080fd5b50604051602080610cbf83398101604052516100547f01ffc9a7000000000000000000000000000000000000000000000000000000006401000000006100ab810204565b6100867f80ac58cd000000000000000000000000000000000000000000000000000000006401000000006100ab810204565b60058054600160a060020a031916600160a060020a0392909216919091179055610117565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156100da57600080fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b610b99806101266000396000f3006080604052600436106100da5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ffc9a781146100df57806305d2035b1461012a578063075461721461013f578063081812fc14610170578063095ea7b31461018857806323b872dd146101ae57806340c10f19146101d857806342842e0e146101fc5780636352211e1461022657806370a082311461023e5780637d64bcb414610271578063a22cb46514610286578063b88d4fde146102ac578063c2ba47441461031b578063e985e9c51461033c575b600080fd5b3480156100eb57600080fd5b506101167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1960043516610363565b604080519115158252519081900360200190f35b34801561013657600080fd5b50610116610397565b34801561014b57600080fd5b506101546103b8565b60408051600160a060020a039092168252519081900360200190f35b34801561017c57600080fd5b506101546004356103c7565b34801561019457600080fd5b506101ac600160a060020a03600435166024356103f9565b005b3480156101ba57600080fd5b506101ac600160a060020a03600435811690602435166044356104af565b3480156101e457600080fd5b50610116600160a060020a036004351660243561053d565b34801561020857600080fd5b506101ac600160a060020a0360043581169060243516604435610566565b34801561023257600080fd5b50610154600435610587565b34801561024a57600080fd5b5061025f600160a060020a03600435166105b1565b60408051918252519081900360200190f35b34801561027d57600080fd5b506101166105e4565b34801561029257600080fd5b506101ac600160a060020a03600435166024351515610635565b3480156102b857600080fd5b50604080516020601f6064356004818101359283018490048402850184019095528184526101ac94600160a060020a0381358116956024803590921695604435953695608494019181908401838280828437509497506106b99650505050505050565b34801561032757600080fd5b50610116600160a060020a03600435166106e1565b34801561034857600080fd5b50610116600160a060020a036004358116906024351661071f565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660009081526020819052604090205460ff1690565b60055474010000000000000000000000000000000000000000900460ff1681565b600554600160a060020a031681565b60006103d28261074d565b15156103dd57600080fd5b50600090815260026020526040902054600160a060020a031690565b600061040482610587565b9050600160a060020a03838116908216141561041f57600080fd5b33600160a060020a038216148061043b575061043b813361071f565b151561044657600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6104b9338261076a565b15156104c457600080fd5b600160a060020a03821615156104d957600080fd5b6104e383826107c9565b6104ed838261083a565b6104f782826108d0565b8082600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610548336106e1565b151561055357600080fd5b61055d8383610960565b50600192915050565b61058283838360206040519081016040528060008152506106b9565b505050565b600081815260016020526040812054600160a060020a03168015156105ab57600080fd5b92915050565b6000600160a060020a03821615156105c857600080fd5b50600160a060020a031660009081526003602052604090205490565b60006105ef336106e1565b15156105fa57600080fd5b506005805474ff0000000000000000000000000000000000000000191674010000000000000000000000000000000000000000179055600190565b600160a060020a03821633141561064b57600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6106c48484846104af565b6106d0848484846109bb565b15156106db57600080fd5b50505050565b60055460009074010000000000000000000000000000000000000000900460ff161580156105ab575050600554600160a060020a0390811691161490565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600090815260016020526040902054600160a060020a0316151590565b60008061077683610587565b905080600160a060020a031684600160a060020a031614806107b1575083600160a060020a03166107a6846103c7565b600160a060020a0316145b806107c157506107c1818561071f565b949350505050565b81600160a060020a03166107dc82610587565b600160a060020a0316146107ef57600080fd5b600081815260026020526040902054600160a060020a031615610836576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b5050565b81600160a060020a031661084d82610587565b600160a060020a03161461086057600080fd5b600160a060020a03821660009081526003602052604090205461088a90600163ffffffff610b3d16565b600160a060020a03909216600090815260036020908152604080832094909455918152600190915220805473ffffffffffffffffffffffffffffffffffffffff19169055565b600081815260016020526040902054600160a060020a0316156108f257600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038816908117909155845260039091529091205461094091610b4f565b600160a060020a0390921660009081526003602052604090209190915550565b600160a060020a038216151561097557600080fd5b61097f82826108d0565b6040518190600160a060020a038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000806109d085600160a060020a0316610b65565b15156109df5760019150610b34565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03898116602485015260448401889052608060648501908152875160848601528751918a169463150b7a0294938c938b938b93909160a490910190602085019080838360005b83811015610a72578181015183820152602001610a5a565b50505050905090810190601f168015610a9f5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610ac157600080fd5b505af1158015610ad5573d6000803e3d6000fd5b505050506040513d6020811015610aeb57600080fd5b50517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1981167f150b7a020000000000000000000000000000000000000000000000000000000014925090505b50949350505050565b600082821115610b4957fe5b50900390565b600082820183811015610b5e57fe5b9392505050565b6000903b11905600a165627a7a72305820a14981e4a41c4b56c9536d953fb9b9de8defaee153dc458ca52ba0ece84d6ba70029",
  "deployedBytecode": "0x6080604052600436106100da5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166301ffc9a781146100df57806305d2035b1461012a578063075461721461013f578063081812fc14610170578063095ea7b31461018857806323b872dd146101ae57806340c10f19146101d857806342842e0e146101fc5780636352211e1461022657806370a082311461023e5780637d64bcb414610271578063a22cb46514610286578063b88d4fde146102ac578063c2ba47441461031b578063e985e9c51461033c575b600080fd5b3480156100eb57600080fd5b506101167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1960043516610363565b604080519115158252519081900360200190f35b34801561013657600080fd5b50610116610397565b34801561014b57600080fd5b506101546103b8565b60408051600160a060020a039092168252519081900360200190f35b34801561017c57600080fd5b506101546004356103c7565b34801561019457600080fd5b506101ac600160a060020a03600435166024356103f9565b005b3480156101ba57600080fd5b506101ac600160a060020a03600435811690602435166044356104af565b3480156101e457600080fd5b50610116600160a060020a036004351660243561053d565b34801561020857600080fd5b506101ac600160a060020a0360043581169060243516604435610566565b34801561023257600080fd5b50610154600435610587565b34801561024a57600080fd5b5061025f600160a060020a03600435166105b1565b60408051918252519081900360200190f35b34801561027d57600080fd5b506101166105e4565b34801561029257600080fd5b506101ac600160a060020a03600435166024351515610635565b3480156102b857600080fd5b50604080516020601f6064356004818101359283018490048402850184019095528184526101ac94600160a060020a0381358116956024803590921695604435953695608494019181908401838280828437509497506106b99650505050505050565b34801561032757600080fd5b50610116600160a060020a03600435166106e1565b34801561034857600080fd5b50610116600160a060020a036004358116906024351661071f565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191660009081526020819052604090205460ff1690565b60055474010000000000000000000000000000000000000000900460ff1681565b600554600160a060020a031681565b60006103d28261074d565b15156103dd57600080fd5b50600090815260026020526040902054600160a060020a031690565b600061040482610587565b9050600160a060020a03838116908216141561041f57600080fd5b33600160a060020a038216148061043b575061043b813361071f565b151561044657600080fd5b600082815260026020526040808220805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6104b9338261076a565b15156104c457600080fd5b600160a060020a03821615156104d957600080fd5b6104e383826107c9565b6104ed838261083a565b6104f782826108d0565b8082600160a060020a031684600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610548336106e1565b151561055357600080fd5b61055d8383610960565b50600192915050565b61058283838360206040519081016040528060008152506106b9565b505050565b600081815260016020526040812054600160a060020a03168015156105ab57600080fd5b92915050565b6000600160a060020a03821615156105c857600080fd5b50600160a060020a031660009081526003602052604090205490565b60006105ef336106e1565b15156105fa57600080fd5b506005805474ff0000000000000000000000000000000000000000191674010000000000000000000000000000000000000000179055600190565b600160a060020a03821633141561064b57600080fd5b336000818152600460209081526040808320600160a060020a03871680855290835292819020805460ff1916861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b6106c48484846104af565b6106d0848484846109bb565b15156106db57600080fd5b50505050565b60055460009074010000000000000000000000000000000000000000900460ff161580156105ab575050600554600160a060020a0390811691161490565b600160a060020a03918216600090815260046020908152604080832093909416825291909152205460ff1690565b600090815260016020526040902054600160a060020a0316151590565b60008061077683610587565b905080600160a060020a031684600160a060020a031614806107b1575083600160a060020a03166107a6846103c7565b600160a060020a0316145b806107c157506107c1818561071f565b949350505050565b81600160a060020a03166107dc82610587565b600160a060020a0316146107ef57600080fd5b600081815260026020526040902054600160a060020a031615610836576000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff191690555b5050565b81600160a060020a031661084d82610587565b600160a060020a03161461086057600080fd5b600160a060020a03821660009081526003602052604090205461088a90600163ffffffff610b3d16565b600160a060020a03909216600090815260036020908152604080832094909455918152600190915220805473ffffffffffffffffffffffffffffffffffffffff19169055565b600081815260016020526040902054600160a060020a0316156108f257600080fd5b6000818152600160208181526040808420805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a038816908117909155845260039091529091205461094091610b4f565b600160a060020a0390921660009081526003602052604090209190915550565b600160a060020a038216151561097557600080fd5b61097f82826108d0565b6040518190600160a060020a038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6000806109d085600160a060020a0316610b65565b15156109df5760019150610b34565b6040517f150b7a020000000000000000000000000000000000000000000000000000000081523360048201818152600160a060020a03898116602485015260448401889052608060648501908152875160848601528751918a169463150b7a0294938c938b938b93909160a490910190602085019080838360005b83811015610a72578181015183820152602001610a5a565b50505050905090810190601f168015610a9f5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b158015610ac157600080fd5b505af1158015610ad5573d6000803e3d6000fd5b505050506040513d6020811015610aeb57600080fd5b50517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1981167f150b7a020000000000000000000000000000000000000000000000000000000014925090505b50949350505050565b600082821115610b4957fe5b50900390565b600082820183811015610b5e57fe5b9392505050565b6000903b11905600a165627a7a72305820a14981e4a41c4b56c9536d953fb9b9de8defaee153dc458ca52ba0ece84d6ba70029",
  "sourceMap": "112:805:113:-;;;246:65;8:9:-1;5:2;;;30:1;27;20:12;5:2;246:65:113;;;;;;;;;;;;;640:39:24;659:19;640:18;;;;:39;:::i;:::-;1906::107;1925:19;1906:18;;;;:39;:::i;:::-;290:6:113;:16;;-1:-1:-1;;;;;;290:16:113;-1:-1:-1;;;;;290:16:113;;;;;;;;;;112:805;;989:158:24;1064:25;;;;;;1056:34;;;;;;1100:33;;:20;:33;;;;;;;;;;:40;;-1:-1:-1;;1100:40:24;1136:4;1100:40;;;989:158::o;112:805:113:-;;;;;;;",
  "deployedSourceMap": "112:805:113:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;777:133:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;777:133:24;-1:-1:-1;;777:133:24;;;;;;;;;;;;;;;;;;;;;;;176:27:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;176:27:113;;;;151:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;151:21:113;;;;;;;;-1:-1:-1;;;;;151:21:113;;;;;;;;;;;;;;3704:151:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3704:151:107;;;;;3127:292;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3127:292:107;-1:-1:-1;;;;;3127:292:107;;;;;;;;;5259:330;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;5259:330:107;-1:-1:-1;;;;;5259:330:107;;;;;;;;;;;;495:155:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;495:155:113;-1:-1:-1;;;;;495:155:113;;;;;;;6228:181:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;6228:181:107;-1:-1:-1;;;;;6228:181:107;;;;;;;;;;;;2529:177;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2529:177:107;;;;;2155:150;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;2155:150:107;-1:-1:-1;;;;;2155:150:107;;;;;;;;;;;;;;;;;;;;;654:135:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;654:135:113;;;;4147:213:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4147:213:107;-1:-1:-1;;;;;4147:213:107;;;;;;;;;7114:253;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;7114:253:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7114:253:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;7114:253:107;;-1:-1:-1;7114:253:107;;-1:-1:-1;;;;;;;7114:253:107;793:122:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;793:122:113;-1:-1:-1;;;;;793:122:113;;;;;4681:145:107;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;4681:145:107;-1:-1:-1;;;;;4681:145:107;;;;;;;;;;777:133:24;-1:-1:-1;;870:33:24;847:4;870:33;;;;;;;;;;;;;;777:133::o;176:27:113:-;;;;;;;;;:::o;151:21::-;;;-1:-1:-1;;;;;151:21:113;;:::o;3704:151:107:-;3763:7;3790:16;3798:7;3790;:16::i;:::-;3782:25;;;;;;;;-1:-1:-1;3824:24:107;;;;:15;:24;;;;;;-1:-1:-1;;;;;3824:24:107;;3704:151::o;3127:292::-;3190:13;3206:16;3214:7;3206;:16::i;:::-;3190:32;-1:-1:-1;;;;;;3240:11:107;;;;;;;;3232:20;;;;;;3270:10;-1:-1:-1;;;;;3270:19:107;;;;:58;;;3293:35;3310:5;3317:10;3293:16;:35::i;:::-;3262:67;;;;;;;;3340:24;;;;:15;:24;;;;;;:29;;-1:-1:-1;;3340:29:107;-1:-1:-1;;;;;3340:29:107;;;;;;;;;3384:28;;3340:24;;3384:28;;;;;;;3127:292;;;:::o;5259:330::-;5349:39;5368:10;5380:7;5349:18;:39::i;:::-;5341:48;;;;;;;;-1:-1:-1;;;;;5407:16:107;;;;5399:25;;;;;;5435:29;5450:4;5456:7;5435:14;:29::i;:::-;5474:31;5491:4;5497:7;5474:16;:31::i;:::-;5515:24;5527:2;5531:7;5515:11;:24::i;:::-;5574:7;5570:2;-1:-1:-1;;;;;5555:27:107;5564:4;-1:-1:-1;;;;;5555:27:107;;;;;;;;;;;5259:330;;;:::o;495:155:113:-;558:4;580:19;588:10;580:7;:19::i;:::-;572:28;;;;;;;;608:18;614:2;618:7;608:5;:18::i;:::-;-1:-1:-1;641:4:113;495:155;;;;:::o;6228:181:107:-;6363:39;6380:4;6386:2;6390:7;6363:39;;;;;;;;;;;;;:16;:39::i;:::-;6228:181;;;:::o;2529:177::-;2584:7;2619:20;;;:11;:20;;;;;;-1:-1:-1;;;;;2619:20:107;2657:19;;;2649:28;;;;;;2694:5;2529:177;-1:-1:-1;;2529:177:107:o;2155:150::-;2210:7;-1:-1:-1;;;;;2237:19:107;;;;2229:28;;;;;;-1:-1:-1;;;;;;2274:24:107;;;;;:17;:24;;;;;;;2155:150::o;654:135:113:-;699:4;719:19;727:10;719:7;:19::i;:::-;711:28;;;;;;;;-1:-1:-1;745:15:113;:22;;-1:-1:-1;;745:22:113;;;;;763:4;654:135;:::o;4147:213:107:-;-1:-1:-1;;;;;4226:16:107;;4232:10;4226:16;;4218:25;;;;;;4272:10;4253:30;;;;:18;:30;;;;;;;;-1:-1:-1;;;;;4253:34:107;;;;;;;;;;;;:45;;-1:-1:-1;;4253:45:107;;;;;;;;;;4313:40;;;;;;;4253:34;;4272:10;4313:40;;;;;;;;;;;4147:213;;:::o;7114:253::-;7213:31;7226:4;7232:2;7236:7;7213:12;:31::i;:::-;7311:48;7334:4;7340:2;7344:7;7353:5;7311:22;:48::i;:::-;7303:57;;;;;;;;7114:253;;;;:::o;793:122:113:-;874:15;;853:4;;874:15;;;;;873:16;:36;;;;-1:-1:-1;;903:6:113;;-1:-1:-1;;;;;903:6:113;;;893:16;;;;793:122::o;4681:145:107:-;-1:-1:-1;;;;;4784:25:107;;;4761:4;4784:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;4681:145::o;7556:152::-;7613:4;7645:20;;;:11;:20;;;;;;-1:-1:-1;;;;;7645:20:107;7682:19;;;7556:152::o;8071:404::-;8156:4;8172:13;8188:16;8196:7;8188;:16::i;:::-;8172:32;;8391:5;-1:-1:-1;;;;;8380:16:107;:7;-1:-1:-1;;;;;8380:16:107;;:51;;;;8424:7;-1:-1:-1;;;;;8400:31:107;:20;8412:7;8400:11;:20::i;:::-;-1:-1:-1;;;;;8400:31:107;;8380:51;:87;;;;8435:32;8452:5;8459:7;8435:16;:32::i;:::-;8372:96;8071:404;-1:-1:-1;;;;8071:404:107:o;11859:230::-;11961:5;-1:-1:-1;;;;;11941:25:107;:16;11949:7;11941;:16::i;:::-;-1:-1:-1;;;;;11941:25:107;;11933:34;;;;;;12017:1;11981:24;;;:15;:24;;;;;;-1:-1:-1;;;;;11981:24:107;:38;11977:106;;12070:1;12035:24;;;:15;:24;;;;;:37;;-1:-1:-1;;12035:37:107;;;11977:106;11859:230;;:::o;10510:225::-;10614:4;-1:-1:-1;;;;;10594:24:107;:16;10602:7;10594;:16::i;:::-;-1:-1:-1;;;;;10594:24:107;;10586:33;;;;;;-1:-1:-1;;;;;10655:23:107;;;;;;:17;:23;;;;;;:30;;10683:1;10655:30;:27;:30;:::i;:::-;-1:-1:-1;;;;;10629:23:107;;;;;;;:17;:23;;;;;;;;:56;;;;10695:20;;;:11;:20;;;;:33;;-1:-1:-1;;10695:33:107;;;10510:225::o;9774:216::-;9883:1;9851:20;;;:11;:20;;;;;;-1:-1:-1;;;;;9851:20:107;:34;9843:43;;;;;;9896:20;;;;:11;:20;;;;;;;;:25;;-1:-1:-1;;9896:25:107;-1:-1:-1;;;;;9896:25:107;;;;;;;;9955:21;;:17;:21;;;;;;;:28;;:25;:28::i;:::-;-1:-1:-1;;;;;9931:21:107;;;;;;;:17;:21;;;;;:52;;;;-1:-1:-1;9774:216:107:o;8736:177::-;-1:-1:-1;;;;;8807:16:107;;;;8799:25;;;;;;8834:24;8846:2;8850:7;8834:11;:24::i;:::-;8873:33;;8898:7;;-1:-1:-1;;;;;8873:33:107;;;8890:1;;8873:33;;8890:1;;8873:33;8736:177;;:::o;11258:328::-;11364:4;11448:13;11385:15;:2;-1:-1:-1;;;;;11385:13:107;;:15::i;:::-;11384:16;11380:58;;;11423:4;11416:11;;;;11380:58;11464:70;;;;;11501:10;11464:70;;;;;;-1:-1:-1;;;;;11464:70:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;:36;;;;;;11501:10;11513:4;;11519:7;;11528:5;;11464:70;;;;;;;;;;;;;;-1:-1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;11464:70:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;11464:70:107;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;11464:70:107;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;11464:70:107;-1:-1:-1;;11552:26:107;;11562:16;11552:26;;-1:-1:-1;11464:70:107;-1:-1:-1;11258:328:107;;;;;;;;:::o;936:110:73:-;994:7;1016:6;;;;1009:14;;;;-1:-1:-1;1036:5:73;;;936:110::o;1101:129::-;1159:7;1186:5;;;1204:6;;;;1197:14;;;;1224:1;1101:129;-1:-1:-1;;;1101:129:73:o;464:624:21:-;524:4;1035:20;;1073:8;;464:624::o",
  "source": "pragma solidity ^0.4.24;\n\nimport \"./ERC721.sol\";\n\n/**\n * @title ERC721Mintable\n * @dev ERC721 minting logic\n */\ncontract ERC721Mintable is ERC721 {\n\n  address public minter;\n  bool public mintingFinished;\n\n  // @notice constructor: initialized\n  constructor(address _minter)\n  public {\n    minter = _minter;\n  }\n  /**\n   * @dev Function to mint tokens\n   * @param to The address that will receive the minted tokens.\n   * @return A boolean that indicates if the operation was successful.\n   */\n  function mint(address to, uint256 tokenId)\n  public\n  returns (bool) {\n      require(canMint(msg.sender));\n      _mint(to, tokenId);\n      return true;\n  }\n\n  function finishMinting()\n  public\n  returns (bool) {\n    require(canMint(msg.sender));\n    mintingFinished = true;\n    return true;\n  }\n\n  function canMint(address sender)\n  public\n  view\n  returns (bool) {\n    return (!mintingFinished && sender == minter);\n  }\n}\n",
  "sourcePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Mintable.sol",
  "ast": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Mintable.sol",
    "exportedSymbols": {
      "ERC721Mintable": [
        34727
      ]
    },
    "id": 34728,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34650,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:113"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 34651,
        "nodeType": "ImportDirective",
        "scope": 34728,
        "sourceUnit": 34087,
        "src": "26:22:113",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34652,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34086,
              "src": "139:6:113",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$34086",
                "typeString": "contract ERC721"
              }
            },
            "id": 34653,
            "nodeType": "InheritanceSpecifier",
            "src": "139:6:113"
          }
        ],
        "contractDependencies": [
          8578,
          8725,
          34086,
          34830
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721Mintable\n@dev ERC721 minting logic",
        "fullyImplemented": true,
        "id": 34727,
        "linearizedBaseContracts": [
          34727,
          34086,
          34830,
          8578,
          8725
        ],
        "name": "ERC721Mintable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 34655,
            "name": "minter",
            "nodeType": "VariableDeclaration",
            "scope": 34727,
            "src": "151:21:113",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 34654,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "151:7:113",
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
            "id": 34657,
            "name": "mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 34727,
            "src": "176:27:113",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 34656,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "176:4:113",
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
              "id": 34666,
              "nodeType": "Block",
              "src": "284:27:113",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34664,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 34662,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34655,
                      "src": "290:6:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34663,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34659,
                      "src": "299:7:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "290:16:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 34665,
                  "nodeType": "ExpressionStatement",
                  "src": "290:16:113"
                }
              ]
            },
            "documentation": null,
            "id": 34667,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34659,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 34667,
                  "src": "258:15:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34658,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "258:7:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "257:17:113"
            },
            "payable": false,
            "returnParameters": {
              "id": 34661,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "284:0:113"
            },
            "scope": 34727,
            "src": "246:65:113",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34690,
              "nodeType": "Block",
              "src": "564:86:113",
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
                              "id": 34678,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "588:3:113",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 34679,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "588:10:113",
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
                          "id": 34677,
                          "name": "canMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34726,
                          "src": "580:7:113",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 34680,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "580:19:113",
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
                      "id": 34676,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "572:7:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "572:28:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34682,
                  "nodeType": "ExpressionStatement",
                  "src": "572:28:113"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34684,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34669,
                        "src": "614:2:113",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34685,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34671,
                        "src": "618:7:113",
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
                      "id": 34683,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33916,
                      "src": "608:5:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34686,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "608:18:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34687,
                  "nodeType": "ExpressionStatement",
                  "src": "608:18:113"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 34688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "641:4:113",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 34675,
                  "id": 34689,
                  "nodeType": "Return",
                  "src": "634:11:113"
                }
              ]
            },
            "documentation": "@dev Function to mint tokens\n@param to The address that will receive the minted tokens.\n@return A boolean that indicates if the operation was successful.",
            "id": 34691,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34669,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34691,
                  "src": "509:10:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34668,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:113",
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
                  "id": 34671,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34691,
                  "src": "521:15:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34670,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "521:7:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "508:29:113"
            },
            "payable": false,
            "returnParameters": {
              "id": 34675,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34674,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34691,
                  "src": "558:4:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34673,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "558:4:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "557:6:113"
            },
            "scope": 34727,
            "src": "495:155:113",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34709,
              "nodeType": "Block",
              "src": "705:84:113",
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
                              "id": 34698,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "727:3:113",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 34699,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "727:10:113",
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
                          "id": 34697,
                          "name": "canMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34726,
                          "src": "719:7:113",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 34700,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "719:19:113",
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
                      "id": 34696,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "711:7:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "711:28:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34702,
                  "nodeType": "ExpressionStatement",
                  "src": "711:28:113"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 34703,
                      "name": "mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34657,
                      "src": "745:15:113",
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
                      "id": 34704,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "763:4:113",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "745:22:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 34706,
                  "nodeType": "ExpressionStatement",
                  "src": "745:22:113"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 34707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "780:4:113",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 34695,
                  "id": 34708,
                  "nodeType": "Return",
                  "src": "773:11:113"
                }
              ]
            },
            "documentation": null,
            "id": 34710,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34692,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "676:2:113"
            },
            "payable": false,
            "returnParameters": {
              "id": 34695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34694,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34710,
                  "src": "699:4:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34693,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:4:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "698:6:113"
            },
            "scope": 34727,
            "src": "654:135:113",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34725,
              "nodeType": "Block",
              "src": "859:56:113",
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
                        "id": 34722,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 34718,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "873:16:113",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 34717,
                            "name": "mintingFinished",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34657,
                            "src": "874:15:113",
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
                          "id": 34721,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 34719,
                            "name": "sender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34712,
                            "src": "893:6:113",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 34720,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34655,
                            "src": "903:6:113",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "893:16:113",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "873:36:113",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 34723,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "872:38:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 34716,
                  "id": 34724,
                  "nodeType": "Return",
                  "src": "865:45:113"
                }
              ]
            },
            "documentation": null,
            "id": 34726,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "canMint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34712,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 34726,
                  "src": "810:14:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "810:7:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "809:16:113"
            },
            "payable": false,
            "returnParameters": {
              "id": 34716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34715,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34726,
                  "src": "853:4:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34714,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "853:4:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "852:6:113"
            },
            "scope": 34727,
            "src": "793:122:113",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34728,
        "src": "112:805:113"
      }
    ],
    "src": "0:918:113"
  },
  "legacyAST": {
    "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721Mintable.sol",
    "exportedSymbols": {
      "ERC721Mintable": [
        34727
      ]
    },
    "id": 34728,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 34650,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:113"
      },
      {
        "absolutePath": "/home/peter/Documents/Work/MyBit/MyBit-Network.tech/contracts/tokens/erc721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 34651,
        "nodeType": "ImportDirective",
        "scope": 34728,
        "sourceUnit": 34087,
        "src": "26:22:113",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 34652,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 34086,
              "src": "139:6:113",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$34086",
                "typeString": "contract ERC721"
              }
            },
            "id": 34653,
            "nodeType": "InheritanceSpecifier",
            "src": "139:6:113"
          }
        ],
        "contractDependencies": [
          8578,
          8725,
          34086,
          34830
        ],
        "contractKind": "contract",
        "documentation": "@title ERC721Mintable\n@dev ERC721 minting logic",
        "fullyImplemented": true,
        "id": 34727,
        "linearizedBaseContracts": [
          34727,
          34086,
          34830,
          8578,
          8725
        ],
        "name": "ERC721Mintable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 34655,
            "name": "minter",
            "nodeType": "VariableDeclaration",
            "scope": 34727,
            "src": "151:21:113",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 34654,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "151:7:113",
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
            "id": 34657,
            "name": "mintingFinished",
            "nodeType": "VariableDeclaration",
            "scope": 34727,
            "src": "176:27:113",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 34656,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "176:4:113",
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
              "id": 34666,
              "nodeType": "Block",
              "src": "284:27:113",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34664,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 34662,
                      "name": "minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34655,
                      "src": "290:6:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 34663,
                      "name": "_minter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34659,
                      "src": "299:7:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "290:16:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 34665,
                  "nodeType": "ExpressionStatement",
                  "src": "290:16:113"
                }
              ]
            },
            "documentation": null,
            "id": 34667,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34659,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "scope": 34667,
                  "src": "258:15:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34658,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "258:7:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "257:17:113"
            },
            "payable": false,
            "returnParameters": {
              "id": 34661,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "284:0:113"
            },
            "scope": 34727,
            "src": "246:65:113",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34690,
              "nodeType": "Block",
              "src": "564:86:113",
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
                              "id": 34678,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "588:3:113",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 34679,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "588:10:113",
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
                          "id": 34677,
                          "name": "canMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34726,
                          "src": "580:7:113",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 34680,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "580:19:113",
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
                      "id": 34676,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "572:7:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "572:28:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34682,
                  "nodeType": "ExpressionStatement",
                  "src": "572:28:113"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 34684,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34669,
                        "src": "614:2:113",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 34685,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34671,
                        "src": "618:7:113",
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
                      "id": 34683,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 33916,
                      "src": "608:5:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 34686,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "608:18:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34687,
                  "nodeType": "ExpressionStatement",
                  "src": "608:18:113"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 34688,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "641:4:113",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 34675,
                  "id": 34689,
                  "nodeType": "Return",
                  "src": "634:11:113"
                }
              ]
            },
            "documentation": "@dev Function to mint tokens\n@param to The address that will receive the minted tokens.\n@return A boolean that indicates if the operation was successful.",
            "id": 34691,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34669,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 34691,
                  "src": "509:10:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34668,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:113",
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
                  "id": 34671,
                  "name": "tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 34691,
                  "src": "521:15:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34670,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "521:7:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "508:29:113"
            },
            "payable": false,
            "returnParameters": {
              "id": 34675,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34674,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34691,
                  "src": "558:4:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34673,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "558:4:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "557:6:113"
            },
            "scope": 34727,
            "src": "495:155:113",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34709,
              "nodeType": "Block",
              "src": "705:84:113",
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
                              "id": 34698,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 34923,
                              "src": "727:3:113",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 34699,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "727:10:113",
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
                          "id": 34697,
                          "name": "canMint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 34726,
                          "src": "719:7:113",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view returns (bool)"
                          }
                        },
                        "id": 34700,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "719:19:113",
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
                      "id": 34696,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        34926,
                        34927
                      ],
                      "referencedDeclaration": 34926,
                      "src": "711:7:113",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 34701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "711:28:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 34702,
                  "nodeType": "ExpressionStatement",
                  "src": "711:28:113"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 34705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 34703,
                      "name": "mintingFinished",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34657,
                      "src": "745:15:113",
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
                      "id": 34704,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "763:4:113",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "745:22:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 34706,
                  "nodeType": "ExpressionStatement",
                  "src": "745:22:113"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "74727565",
                    "id": 34707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "780:4:113",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "true"
                  },
                  "functionReturnParameters": 34695,
                  "id": 34708,
                  "nodeType": "Return",
                  "src": "773:11:113"
                }
              ]
            },
            "documentation": null,
            "id": 34710,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "finishMinting",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34692,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "676:2:113"
            },
            "payable": false,
            "returnParameters": {
              "id": 34695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34694,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34710,
                  "src": "699:4:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34693,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "699:4:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "698:6:113"
            },
            "scope": 34727,
            "src": "654:135:113",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 34725,
              "nodeType": "Block",
              "src": "859:56:113",
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
                        "id": 34722,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 34718,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "!",
                          "prefix": true,
                          "src": "873:16:113",
                          "subExpression": {
                            "argumentTypes": null,
                            "id": 34717,
                            "name": "mintingFinished",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34657,
                            "src": "874:15:113",
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
                          "id": 34721,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 34719,
                            "name": "sender",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34712,
                            "src": "893:6:113",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 34720,
                            "name": "minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34655,
                            "src": "903:6:113",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "893:16:113",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "873:36:113",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "id": 34723,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "872:38:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 34716,
                  "id": 34724,
                  "nodeType": "Return",
                  "src": "865:45:113"
                }
              ]
            },
            "documentation": null,
            "id": 34726,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "canMint",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34712,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "scope": 34726,
                  "src": "810:14:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "810:7:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "809:16:113"
            },
            "payable": false,
            "returnParameters": {
              "id": 34716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34715,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 34726,
                  "src": "853:4:113",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34714,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "853:4:113",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "852:6:113"
            },
            "scope": 34727,
            "src": "793:122:113",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 34728,
        "src": "112:805:113"
      }
    ],
    "src": "0:918:113"
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
      "mint(address,uint256)": {
        "details": "Function to mint tokens",
        "params": {
          "to": "The address that will receive the minted tokens."
        },
        "return": "A boolean that indicates if the operation was successful."
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
      "transferFrom(address,address,uint256)": {
        "details": "Transfers the ownership of a given token ID to another address Usage of this method is discouraged, use `safeTransferFrom` whenever possible Requires the msg sender to be the owner, approved, or operator",
        "params": {
          "from": "current owner of the token",
          "to": "address to receive the ownership of the given token ID",
          "tokenId": "uint256 ID of the token to be transferred"
        }
      }
    },
    "title": "ERC721Mintable"
  },
  "userdoc": {
    "methods": {}
  }
}