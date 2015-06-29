var _pokerHands = {
	"Full House" : ["Seven of Hearts", "Seven of Clubs", "Seven of Diamonds", "Two of Spades", "Two of Hearts"],
	"Royal Flush" : ["Ten of Spades", "Jack of Spades", "Queen of Spades", "King of Spades", "Ace of Spades"],
	"4 of a Kind" : ["Four of Spades","Four of Hearts", "Four of Diamonds", "Four of Clubs", "Three of Spades"]
}

var _hand = "Full House";

var _string = "";
var _tempString = "";


switch (_hand) {
	case "Full House":
		_string = "This hand is a " + _hand + " and contains a ";
		for (var i=0; i < 5; i++) {
			_tempString = _pokerHands[_hand][i];
			if (i<4) {
				_tempString += ", ";
			}
			_string += _tempString;
		}
		_string += ".";
		alert(_string);
		break;
	case "Royal Flush":
		_string = "This hand is a " + _hand + " and contains a ";
		for (var i=0; i < 5; i++) {
			_tempString = _pokerHands[_hand][i] ;
			if (i<4) {
				_tempString += ", "
			}
			_string += _tempString;
		}
		_string += ".";
		alert(_string);
		break;
	case "4 of a Kind":
		_string = "This hand is a " + _hand + " and contains a ";
		for (var i=0; i < 5; i++) {
			_tempString = _pokerHands[_hand][i];
			if (i<4) {
				_tempString += ", "
			}
			_string += _tempString;
		}
		_string += ".";
		alert(_string);
		break;
	default:
		alert("That is not one of the hands to choose from");
}