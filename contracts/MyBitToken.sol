pragma solidity ^0.4.5;
contract owned {
	address public owner;
	function owned() {
		owner = msg.sender;
	}
	function changeOwner(address newOwner) onlyowner {
		owner = newOwner;
	}
	modifier onlyowner() {
		if (msg.sender==owner) _;
	}
}
contract tokenRecipient { function receiveApproval(address _from, uint256 _value, address _token, bytes _extraData); }

contract MyBitToken is owned {
	/* Public variables of the token */
	string public standard = 'Token 0.1';
	string public name;
	string public symbol;
	uint8 public decimals;
	uint256 public totalSupply;
	/* This creates an array with all balances */
	mapping (address => uint256) public balanceOf;
	mapping (address => uint256) public availableBalance;
	mapping (address => uint256) public lockedBalance;

	mapping (address => mapping (address => uint256)) public allowance;
	/* This generates a public event on the blockchain that will notify clients */
	event Transfer(address indexed from, address indexed to, uint256 value);
	event ApprovalGranted(address _this, address _userAddr, uint256 value);
	/* Initializes contract with initial supply tokens to the creator of the contract */
	function MyBitToken(
	uint256 initialSupply,
	string tokenName,
	uint8 decimalUnits,
	string tokenSymbol
	) {
		owner = msg.sender;
		balanceOf[msg.sender] = initialSupply;              // Give the creator all initial tokens
		totalSupply = initialSupply;                        // Update total supply
		name = tokenName;                                   // Set the name for display purposes
		symbol = tokenSymbol;                               // Set the symbol for display purposes
		decimals = decimalUnits;                            // Amount of decimals for display purposes
	}

	/* Send coins */
	function transfer(address _to, uint256 _value) returns(bool){
		require(balanceOf[msg.sender] > _value);           // Check if the sender has enough
	 	require(balanceOf[_to] + _value > balanceOf[_to]); // Check for overflows
		balanceOf[msg.sender] -= _value;                     // Subtract from the sender
		balanceOf[_to] += _value;                            // Add the same to the recipient
		Transfer(msg.sender, _to, _value);                   // Notify anyone listening that this transfer took place
		return true;
	}

	function mintToken(address target, uint256 mintedAmount) onlyowner {
		balanceOf[target] += mintedAmount;
		totalSupply += mintedAmount;
		Transfer(0, owner, mintedAmount);
		Transfer(owner, target, mintedAmount);
	}

	/* Allow another contract to spend some tokens in your behalf */
	function approve(address _spender, uint256 _value)
	returns (bool success) {
		allowance[msg.sender][_spender] = _value;
		ApprovalGranted(this, msg.sender, _value);
		return true;
	}
	/* Approve and then comunicate the approved contract in a single tx */
	function approveAndCall(address _spender, uint256 _value, bytes _extraData)
	returns (bool success) {
		tokenRecipient spender = tokenRecipient(_spender);
		if (approve(_spender, _value)) {
			spender.receiveApproval(msg.sender, _value, this, _extraData);
			return true;
		}
	}
	/* A contract attempts to get the coins */
	function transferFrom(address _from, address _to, uint256 _value) returns (bool success) {
		require(balanceOf[_from] > _value);                 // Check if the sender has enough
		require(balanceOf[_to] + _value > balanceOf[_to]);  // Check for overflows
		require(_value <= allowance[_from][msg.sender]);   // Check allowance
		balanceOf[_from] -= _value;                          // Subtract from the sender
		balanceOf[_to] += _value;                            // Add the same to the recipient
		allowance[_from][msg.sender] -= _value;
		Transfer(_from, _to, _value);
		return true;
	}
	/* This unnamed function is called whenever someone tries to send ether to it */
	function () {
		revert();     // Prevents accidental sending of ether
	}

	function getContractAddress() public returns(address){
		return address(this);
	}
}
