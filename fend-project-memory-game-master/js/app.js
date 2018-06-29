
const icons = ["fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];

const cardsContainer = document.querySelector(".deck");

let openedCards = [];
let matchedCards = [];

let you= document.querySelector('.modal');
function init() {
    for(let i = 0; i < icons.length; i++) {
        const card = document.createElement("li");
        card.classList.add("card");
        card.innerHTML = `<i class="${icons[i]}"></i>`;
        cardsContainer.appendChild(card);
    
        
        click(card);
    }
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


shuffle(icons);

let isFirstClick = true;

// Click Function
function click(card) {

    // Card Click Event
    card.addEventListener("click", function() {

        if(isFirstClick) {
            
            startTimer();
            
            isFirstClick = false;
        }
        
        const currentCard = this;
        const previousCard = openedCards[0];

        
        if(openedCards.length === 1) {

            card.classList.add("open", "show", "disable");
            openedCards.push(this);

                        compare(currentCard, previousCard);

        } else {
        
            currentCard.classList.add("open", "show", "disable");
            openedCards.push(this);
        }
        
    });
}



function compare(currentCard, previousCard) {

    
    if(currentCard.innerHTML === previousCard.innerHTML) {
                
       
        currentCard.classList.add("match");
        previousCard.classList.add("match");

        matchedCards.push(currentCard, previousCard);

        openedCards = [];

        
        isOver();

    } else {
        
        
        setTimeout(function() {
            currentCard.classList.remove("open", "show", "disable");
            previousCard.classList.remove("open", "show", "disable");
            
        }, 500);

        openedCards = [];
        
    }

   
    addMove();
}


function isOver() {
    if(matchedCards.length === icons.length) {
       
       
        stopTimer();

       
        alert("GAME OVER!"); 
        
       alert(`In ${timerContainer.innerHTML} seconds, you did a total of ${ movesContainer.innerHTML} moves with a score of ${rate()}. Well done!`)
        ;
        

     
    swal({
        allowEscapeKey: false,
        allowOutsideClick: false,
        title: 'gameover!',
        text: 'With ' + movesContainer.innerHTML + ' Moves and ' + rate() + ' .!',
        type: 'success',
        confirmButtonColor: '#9BCB3C',
        confirmButtonText: 'Play again!'
    }).then(function(isConfirm) {
        if (isConfirm) {
             cardsContainer.innerHTML = "";

    
    init();

    
    reset();

        }
    })

   

    
}}



const movesContainer = document.querySelector(".moves");
let moves = 0;
movesContainer.innerHTML = 0;
function addMove() {
    moves++;
    movesContainer.innerHTML = moves;

    // Set the rating
    rating();
}

let ratings=0;
const starsContainer = document.querySelector(".stars");
const star = `<li><i class="fa fa-star"></i></li>`;
starsContainer.innerHTML = star + star + star;
function rating() {
         
    if( moves < 20) {
        starsContainer.innerHTML = star + star + star;
         
    } else if( moves < 45) {
        starsContainer.innerHTML = star + star;
    } else {
        starsContainer.innerHTML = star;
    }
}
function rate(ratings){
 if( moves < 20) {
        ratings = '3 stars';
         
    } else if( moves < 45) {
        ratings = '2 stars';
    } else {
        ratings = '1 star';
    }
     return (ratings);
}


const timerContainer = document.querySelector(".timer");
let liveTimer,
    totalSeconds = 0;

timerContainer.innerHTML = totalSeconds + 's';


 function startTimer() {
    liveTimer = setInterval(function() {
        
        totalSeconds++;
        
        timerContainer.innerHTML = totalSeconds + 's';
    }, 1000);
}




function stopTimer() {
    clearInterval(liveTimer);
}


const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", function() {
    
    cardsContainer.innerHTML = "";

    
    init();

    
    reset();

});


function reset() {
    
    matchedCards = [];

    
    moves = 0;
    movesContainer.innerHTML = moves;

    
    starsContainer.innerHTML = star + star + star;

     
    stopTimer();
    isFirstClick = true;
    totalSeconds = 0;
    timerContainer.innerHTML = totalSeconds + "s";
}







init();





















