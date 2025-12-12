# Rock Paper Scissors - JavaScript

This is pure logic. We need to handle all possibilities (Win, Lose, Tie).

### Code

Play the game!

```html iframe height=500px showEditor
<style>
  body {
    font-family: sans-serif;
    background-color: #2c3e50;
    color: white;
    text-align: center;
    margin: 0;
    padding-top: 20px;
    height: 100vh;
  }
  .game-container {
    display: inline-block;
    background-color: #34495e;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
  .choices button {
    font-size: 30px;
    padding: 15px 25px;
    margin: 10px;
    cursor: pointer;
    background-color: #f1c40f;
    border: none;
    border-radius: 50%;
    transition: transform 0.2s;
  }
  .choices button:hover {
    transform: scale(1.1);
    background-color: #f39c12;
  }
  .result-box {
    margin-bottom: 30px;
    font-size: 20px;
  }
  #result-msg {
    font-size: 28px;
    color: #e74c3c;
    min-height: 40px;
  }
</style>

<h1>Rock Paper Scissors</h1>
<div class="game-container">
  <div class="result-box">
    <p>Player: <span id="player-choice">?</span></p>
    <p>Computer: <span id="computer-choice">?</span></p>
    <h2 id="result-msg">Choose!</h2>
  </div>

  <div class="choices">
    <button onclick="playGame('rock')">✊</button>
    <button onclick="playGame('paper')">✋</button>
    <button onclick="playGame('scissors')">✌️</button>
  </div>

  <p>
    Score: <span id="player-score">0</span> - <span id="computer-score">0</span>
  </p>
</div>

<script>
  let playerScore = 0;
  let computerScore = 0;
  const choices = ["rock", "paper", "scissors"];

  const playerDisplay = document.getElementById("player-choice");
  const computerDisplay = document.getElementById("computer-choice");
  const resultDisplay = document.getElementById("result-msg");
  const playerScoreDisplay = document.getElementById("player-score");
  const computerScoreDisplay = document.getElementById("computer-score");

  function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
      result = "IT'S A TIE!";
    } else {
      if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        result = "YOU WIN!";
      } else {
        result = "YOU LOSE!";
      }
    }

    playerDisplay.textContent = playerChoice.toUpperCase();
    computerDisplay.textContent = computerChoice.toUpperCase();
    resultDisplay.textContent = result;
    resultDisplay.style.color =
      result === "YOU WIN!"
        ? "#2ecc71"
        : result === "YOU LOSE!"
        ? "#e74c3c"
        : "white";

    if (result === "YOU WIN!") {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
    } else if (result === "YOU LOSE!") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
  }
</script>
```
