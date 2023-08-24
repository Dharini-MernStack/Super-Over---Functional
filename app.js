/*   const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");
const striked = document.getElementById('strike');
const resetted = document.getElementById('reset');
const score1 = document.getElementById('score-team1');
const score2 = document.getElementById('score-team2');
const wicket1 = document.getElementById('wickets-team1');
const wicket2 = document.getElementById('wickets-team2');


var turn = 1;
var team1score = 0;
var team2score = 0;
var team1wicket = 0;
var team2wicket = 0;
var team1ball = 0;
var team2ball = 0;

var possibleOutcomes = [0,1,2,3,4,6,'W'];

function gameOver(){
    gameOverAudio.play();
    // set time interval

   
}

function updateScore(){
    score1.textContent = team1score;
    score2.textContent = team2score;
    wicket1.textContent = team1wicket;
    wicket2.textContent = team2wicket;
}
resetted.onclick = () => {
    window.location.reload();
}

striked.onclick = () => {
    strikeAudio.pause();
    strikeAudio.currentTime = 0;
    strikeAudio.play();

    const randomvalue = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
 
    if(turn == 2){
        team2ball ++ ;
        document.querySelector(`#team2-superover div:nth-child(${team2ball})`).textContent = possibleOutcomes[randomvalue];
        if(randomvalue === 'W'){
            team2wicket ++;

        }else{
            team2score += randomvalue
        }
        if(team2ball === 6 || team2wicket === 2 || team2score > team1score){
       
    gameOver();
        }
    }
    if(turn == 1){
        team1ball ++;
       document.querySelector(`#team1-superover div:nth-child(${team1ball})`).textContent = randomvalue

      if(randomvalue === 'W'){
        team1wicket ++
      }else{
team1score += randomvalue
      }
      if (team1ball == 6 || team1wicket == 2)
      turn = 2;
    }
    updateScore();

}   */

//To Check the possible outcomes and random fun// 


const strikeButton = document.getElementById("strike");
const resetButton = document.getElementById("reset");
const $team1Score = document.getElementById("score-team1");
const $team1Wickets = document.getElementById("wickets-team1");
const $team2Score = document.getElementById("score-team2");
const $team2Wickets = document.getElementById("wickets-team2");

const strikeAudio = new Audio("http://bit.ly/so-ball-hit");
const gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

var team1Score = 0;
var team1Wickets = 0;
var team2Score = 0;
var team2Wickets = 0;
var team1BallsFaced = 0;
var team2BallsFaced = 0;
var turn = 1;

const possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];

function gameOver() {
  gameOverAudio.play();
   setTimeout(function (){
      if(team1Score > team2Score){
        alert('IND WINS');
      } else if(team2Score > team1Score){
        alert('PAK WINS');
      } else if(team1Score === team2Score){
        alert('DRAW MATCH')
      }
    },1000)
 
}

function updateScore() {
  $team1Score.textContent = team1Score;
  $team1Wickets.textContent = team1Wickets;
  $team2Score.textContent = team2Score;
  $team2Wickets.textContent = team2Wickets;
}

resetButton.onclick = () => {
  window.location.reload();
};

strikeButton.onclick = () => {
  //play audio
  strikeAudio.pause();
  strikeAudio.currentTime = 0;
  strikeAudio.play();

  //generate random strike value
  const randomElement =
    possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

  //second batting
  if (turn === 2) {
    //increase ball count
    team2BallsFaced++;
    //update score for the ball
    document.querySelector(
      `#team2-superover div:nth-child(${team2BallsFaced})`
    ).textContent = randomElement;
    // if wicket, update wickets variable
    if (randomElement === "W") {
      team2Wickets++;
    }
    // else update score
    else {
      team2Score += randomElement;
    }
    // Game over condition
    if (
      team2BallsFaced === 6 ||
      team2Wickets === 2 ||
      team2Score > team1Score
    ) {
      turn = 3;
      gameOver();
    }
  }

  if (turn === 1) {
    team1BallsFaced++;
    document.querySelector(
      `#team1-superover div:nth-child(${team1BallsFaced})`
    ).textContent = randomElement;
    if (randomElement === "W") {
      team1Wickets++;
    } else {
      team1Score += randomElement;
    }
    if (team1BallsFaced === 6 || team1Wickets === 2) turn = 2;
  }
  updateScore();
}; 