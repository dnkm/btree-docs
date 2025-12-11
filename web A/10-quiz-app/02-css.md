# Quiz App - CSS

Styling the quiz.

```html iframe height=400px showEditor
<style>
  body {
    background: #001e4d;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  }
  .app {
    background: white;
    width: 90%;
    max-width: 400px;
    border-radius: 10px;
    padding: 30px;
  }
  .btn {
    background: #fff;
    border: 1px solid #222;
    padding: 10px;
    width: 100%;
    margin: 5px 0;
    cursor: pointer;
    text-align: left;
    border-radius: 4px;
  }
  .correct {
    background: #9aeabc;
    border-color: #9aeabc;
  }
  .incorrect {
    background: #ff9393;
    border-color: #ff9393;
  }
</style>

<div class="app">
  <h2>Question Here...</h2>
  <button class="btn correct">Correct Answer</button>
  <button class="btn incorrect">Wrong Answer</button>
  <button class="btn">Neutral Answer</button>
</div>
```
