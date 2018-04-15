console.log("Up and running!");
var cards = ["king","king","queen","queen"];
var cardsInPlay = [];

var checkForMatch = function() {

	if (cardsInPlay[0] === cardsInPlay[2]){
		alert("you found a match.	");
	} else { 
		alert("sorry, try again.");

	}
};

var flipCard = function(cardId) {

console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
checkForMatch()

};

flipCard(0);
flipCard(2);

