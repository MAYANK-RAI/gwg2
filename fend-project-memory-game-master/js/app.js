/*
 * Create a list that holds all of your cards
 */
 
const icon= ['fa fa-diamond' , 'fa fa-diamond',
'fa fa-paper-plane-o', 'fa fa-paper-plane-o',
'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt',
'fa fa-leaf','fa fa-leaf','fa fa-cube', 'fa fa-cube', 'fa fa-bicycle', 'fa fa-bicycle',
'fa fa-bomb', 'fa fa-bomb'];
const cardsContainer= document.querySelector(".deck");
//initialiaze function
function init(){

//create the cards
for(let i=0;i<icon.length;i++){
  const card= document.createElement('li');
  card.classList.add("card");
  card.innerHTML=`<i class= "${icon[i]}"></i>`;
  cardsContainer.appendChild(card);

  //add click to each card;
  click(card);
  
}
}
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
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

// first click on a card 

let firstclick= true;

shuffle (icon);
let opencards=[];
let matchcards=[];
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 //flip cards
  
  
function click(card){
  
  //card click event 
     card.addEventListener('click',function (e) {
      if(firstclick)
      {
        startTimer();
        firstclick=false;
      }
     const currentcard= this;
     const previouscard= opencards[0];
    if(opencards.length ===1 ) {

    card.classList.add('open' , 'show','disabled');
    opencards.push(this);
     
    //compare two open cards 
  
  if (currentcard.innerHTML === previouscard.innerHTML){
       currentcard.classList.add('match');
       
       previouscard.classList.add('match');
       matchcards.push(currentcard ,previouscard);
       //reset array opencards after opening 2 cards to open 2 at a time
       opencards=[];
       
       //gameover??
     isOver();
  }
  
      else{
        setTimeout( function(){
        currentcard.classList.remove('open','show', 'disabled');
        previouscard.classList.remove('open','show','disabled');
        
        opencards=[];
        

        }, 150);

     
      
  }
 }
 
 
  else{
    currentcard.classList.add('open', 'show',"disabled");
    opencards.push(this);

 


  } addmove();

})}


function isOver () {
  if (matchcards.length===icon.length){
    alert ('Game Over !!');
    cardsContainer.innerHTML='';
    alert(totalSeconds);
    shuffle(icon);
  init();
  matchcards=[];
 opencards=[];
  }
};

init();
let movescontainer=document.querySelector('.moves');

let moves=0;
function addmove(){
  moves=moves+1;
  movescontainer.innerHTML=moves;
 rating();
  
}

let restart= document.querySelector(".restart");
let x= restart.addEventListener('click',function(){
  cardsContainer.innerHTML='';
  init();
  matchcards=[];
  starcontainer.innerHTML = star + star + star;
  stopTimer();
   stopTimer();
    isFirstClick = true;
    totalSeconds = 0;
    timerContainer.innerHTML = totalSeconds + "s";
    moves=0;
});

let liveTimer=0;
    let totalSeconds = 0;
    let timerContainer = document.querySelector(".timer");
    timerContainer.innerHTML = totalSeconds + 's'
function startTimer() {
    liveTimer = setInterval(function() {
        // Increase the totalSeconds by 1
        totalSeconds++;
        // Update the HTML Container with the new time
        timerContainer.innerHTML = totalSeconds + 's';
    }, 1000);
}
    clearInterval(liveTimer);

function stopTimer() {
    clearInterval(liveTimer);
}
const starcontainer = document.querySelector(".stars");
const star = `<li><i class="fa fa-star"></i></li>`;
starcontainer.innerHTML = star + star + star;

function rating() {

    if( moves < 20) {
        starcontainer.innerHTML = star + star + star;
    } else if( moves < 45) {
        starcontainer.innerHTML = star + star;
    } else {
        starcontainer.innerHTML = star;
    }
}
