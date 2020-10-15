function computerPlay() {
    var number = Math.random() * (3 - 1) + 1;
    var x = Math.round(number);

    if (x == 1) {
      return "rock";
    } else if (x == 2) {
      return "scissors";
    } else  if (x == 3){
      return "paper";
    };
  };


  

 

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
  playgame("rock");
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
  playgame("paper");
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
  playgame("scissors");
});

var myScore = 0;
var roundnumber = 0;

function playgame(pchoice) {
    
    var cchoice = computerPlay();

    if (pchoice == cchoice) {
        resultr = `You chose ${pchoice} and the computer chose ${cchoice}, it's a tie!`;
    } else if (pchoice == "rock" && cchoice == "scissors"){
        resultr = `You chose ${pchoice} and the computer chose ${cchoice}, you win!`;
        myScore += 1;
    } else if (pchoice == "scissors" && cchoice == "paper") {
        resultr = `You chose ${pchoice} and the computer chose ${cchoice}, you win!`;
        myScore += 1;
    } else if (pchoice == "paper" && cchoice == "rock") {
        resultr = `You chose ${pchoice} and the computer chose ${cchoice}, you win!`;
        myScore += 1;
    } else {
        resultr = `You chose ${pchoice} and the computer chose ${cchoice}, you lose!`;
        myScore -=1;
    };

    roundnumber += 1;
    document.getElementById("scorescore").innerHTML = myScore;
    document.getElementById("resultresult").innerHTML = resultr;
    document.getElementById("round").innerHTML = roundnumber;
};


