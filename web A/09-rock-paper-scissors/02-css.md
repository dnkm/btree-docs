# Rock Paper Scissors - CSS

Styling the game.

```html iframe height=400px showEditor
<style>
  body {
    font-family: sans-serif;
    background-color: #2c3e50;
    color: white;
    text-align: center;
    margin: 0;
    padding-top: 20px;
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

<div class="game-container">
  <div class="result-box">
    <p>Player: ROCK</p>
    <p>Computer: SCISSORS</p>
    <h2 id="result-msg" style="color: #2ecc71">YOU WIN!</h2>
  </div>
  <div class="choices">
    <button>✊</button>
    <button>✋</button>
    <button>✌️</button>
  </div>
</div>
```
