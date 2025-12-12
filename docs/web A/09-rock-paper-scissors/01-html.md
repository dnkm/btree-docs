# Rock Paper Scissors - HTML

Time for a game!

### Structure

We track choices and scores.

```html iframe height=400px showEditor
<style>
  body {
    background: #2c3e50;
    color: white;
    font-family: sans-serif;
    text-align: center;
  }
  .game-container {
    background: #34495e;
    padding: 20px;
    border-radius: 20px;
    display: inline-block;
    margin-top: 20px;
  }
  .choices button {
    font-size: 30px;
    padding: 15px;
    margin: 10px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    background: #f1c40f;
  }
</style>

<h1>Rock Paper Scissors</h1>

<div class="game-container">
  <div class="result-box">
    <p>Player: <span id="player-choice">?</span></p>
    <p>Computer: <span id="computer-choice">?</span></p>
    <h2 id="result-msg">Result will be here</h2>
  </div>

  <div class="choices">
    <button>✊</button>
    <button>✋</button>
    <button>✌️</button>
  </div>

  <p>
    Score: <span id="player-score">0</span> - <span id="computer-score">0</span>
  </p>
</div>
```
