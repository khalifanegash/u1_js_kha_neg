var player = 0;        //player - store the  value of player´s card
var playerScore = 0;   // playerScore - store the score of the player´s card
var computer = 0;     // computer - store the value of the computer's card
var computerScore = 0;//computerScore - store the score of the computer´s card
/**
 * @description- generates a random number 
 * @returns- a random number
 */
function random(){
      var number = Math.floor(Math.random()* 11) + 1;
     return number; 
 }
 
/**
 * @description- logged the player´s card drawn and score
 */
function playerDrew(){
     player = random();
     playerScore += player;
     console.log('player Drew   ' + player);
     console.log('player score  = ' + playerScore);
     
     
}
/**
 * @description- logged the computer´s card drawn and score
 */
function computerDrew() {
     computer = random();
     computerScore += computer;
     console.log('computer Drew   ' + computer);
     console.log('computer score  = ' + computerScore);
             
}
/**
 * @description- compare the score of players and alert the winner and score
 */
function compare() {
     if (computerScore == 21 ) {
          alert('computer is the winner  \n computer score ' + computerScore + '\n player score ' + playerScore);
          
     }
     else if (playerScore == 21 ) {
          alert('player is the winner  \n computer score ' + computerScore + '\n player score ' + playerScore);
          
     }
     else if (computerScore == playerScore && ((computerScore > 20) || (playerScore > 20))){
     alert('it is a draw  \n computer score:  ' + computerScore + ' \n player score:   ' + playerScore);
}
}
/**
 * @description- compare the score i.e < 21 and alert the winner
 */
function result() {
     if (playerScore  > computerScore){
          alert('player is the winner \n computer score  ' + computerScore + ' \n player score:   ' + playerScore);
           
      
      }
      else if (computerScore > playerScore) {
           alert('computer is the winner \n computer score  ' + computerScore + '\n player score:   ' + playerScore);      
      }
      else if (computerScore === playerScore){
          alert('it is a draw  \n computer score:  ' + computerScore + ' \n player score:   ' + playerScore);  
     }
}
/**
 * @description- when press keyD the player draws a card and computer draws two cards
 *             compare the result and alert the winner
 *             when press keyS the computer draws a card when the score is less than 17
 *             then compare the result and alert the winner and score 
 */
  window.addEventListener("keydown", function(event){

      if (event.code === 'KeyD') {
   
          if (playerScore == 0) {
               playerDrew();
               computerDrew();
               computerDrew();
               if(playerScore > 21){
                    alert('computer winner\n computer score  ' + computerScore + ' \n player score:   ' + playerScore);
               }else if(computerScore > 21){
                    alert('player winner \n computer score  ' + computerScore + ' \n player score:   ' + playerScore);
               }else{
                    compare();
               }
          }else {
               playerDrew();
               computerDrew();
               if(playerScore > 21){
                    alert('computer winner\n computer score  ' + computerScore + ' \n player score:   ' + playerScore);
               }else if(computerScore > 21){
                    alert('player winner\n computer score  ' + computerScore + ' \n player score:   ' + playerScore);
               }else{
                    compare();
               }
          }
   
      } else if (event.code === 'KeyS') {
   
        if (computerScore < 17 ) {
             computerDrew();
             if(playerScore > 21){
               alert('computer winner\n computer score  ' + computerScore + ' \n player score:   ' + playerScore);
          }else if(computerScore > 21){
               alert('player winner \n computer score  ' + computerScore + ' \n player score:   ' + playerScore);
          }else{
               result();
          }
        }else {
             result();
          
        }
   
     }
   
    });
   



