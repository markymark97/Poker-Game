function getDeck(){
  var cardRank = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
  var cardSuit = ['S','C','H','D']
  var deck = []

    for (x=0; x<cardSuit.length; x++){
        for(i=0; i<cardRank.length; i++){
          deck.push(cardRank[i]+cardSuit[x])
        }
      }
      return deck;
    }

function shuffle(deck){
  for(i=0; i<deck.length; i++){
  var tempCard = deck[i]
  var randomIndex = Math.floor(Math.random()*deck.length)
  deck[i]=deck[randomIndex]
  deck[randomIndex] = tempCard


  }
}


var cardDeck=getDeck()
shuffle(cardDeck)

var display = document.getElementById("deck")
display.innerHTML=cardDeck.slice(0,5)
console.log(cardDeck)


var userHandOne = cardDeck.slice(5,7)
console.log(userHandOne)

var userHandTwo = cardDeck.slice(7,9)
console.log(userHandTwo)

/*
   _________
*****NOTES*****
  ----------

  TO-DO:
    1.Create HTML Button that does the following, 
    (What button will say in each stage)
      a)Shuffles deck and deals player hands (Shuffle and deal)
      b)Deals out flop (Deal Flop)
      c)Deals out turn card (Deal Turn Card)
      d)Deals out the River (Deal River Card)

    2.Create hand strengths, ie full house, pair, etc
    3.Compare hand strengths between the two users
    4.Determine Winner 

    Updates:

    8/21 Recap:
      Created deck and the ability to shuffle it.
      HTML page to dipay the board, the board is the first 5 cards in the shuffled deck array
      Show users hands via console. The user hands are determined by the next cards 
      after the board cards.
*/






