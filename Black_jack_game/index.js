let cards = []
let answer = 0
let hasBlackJack = false
let isAlive = false
let message = document.getElementById("message_el")
let sumEl = document.getElementById("sum_el")
let cardEl = document.getElementById("card_el")
// We can also use document.querySelector

// Just working with Object
let player = {
    name: "Precious",
    chips: 145
}
let player_El = document.querySelector("#player_el")
player_El.textContent = player.name + ": $" + player.chips

function startgame(){
    let firstcard = getRandomCard()
    let secondcard = getRandomCard()
    cards.push(firstcard, secondcard)
    answer = firstcard + secondcard
    isAlive = true
    rendergame()
}

function rendergame(){
    sumEl.textContent = "Sum: " + answer
    cardEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    if (answer < 21){
        message.textContent = "Do you want a new card " 
       
    }
    else if (answer > 21){
        message.textContent = "Oh Sorry You lost the game"
        console.log("You lost the game")
        isAlive = false
    }
    else if (answer === 21){
        message.textContent = "Yay we won the game"
        console.log("Yay we won the game")
        hasBlackJack = true
    }
    console.log(hasBlackJack)
    console.log(isAlive)
}
function newCard(){
    if (isAlive === true && hasBlackJack == false){
        let card = getRandomCard()
        answer += card 
        cards.push(card)
        rendergame()  
    }
}
function getRandomCard(){
    let randomCard = Math.floor((Math.random()* 13) +1)
    if (randomCard > 10){
        return 10
    }
    else if (randomCard === 1){
        return 11
    }
    else{
        return randomCard
    }
}

