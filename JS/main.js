console.log("Up and running!");
var cards = ["king","king","queen","queen"];

var cardsInPlay = [];

var cardOne  = cards[0];

cardsInPlay.push(cards[0]);
console.log("user flipped king")

var cardTwo = cards[2];
cardsInPlay.push(cards[2]);
console.log("user flipped queen");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[2]){
		alert("you found a match.	");
	} else { 
		alert("sorry, try again.")

	}
}