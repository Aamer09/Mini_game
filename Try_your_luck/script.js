var randomNumber = getRandomNumber(3);
var guess;
var guessCount = 0;
var correctGuess = false;


function getRandomNumber(upper){
var num = Math.floor(Math.random()*upper)+1;
return num;
}

alert('!!Try your luck !! \n\n\ Here is a game which decides your Luck \n\n\ There are three people in jail it is said that who ever wins is freed from jail');

while(true){ 
   guessCount +=1;
guess = prompt('Guess any number from [0--->3]');

 if(Int(guess) === randomNumber){
         correctGuess=true;
        break;
      }    
} 

document.write('<h1 style=background-color:slateblue;> You guessed the Right person!</h1>');
document.write(' It took you '+ guessCount+' tries to guess the Correct person '+ randomNumber);



