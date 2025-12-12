# Quiz App - HTML & CSS

Structure and Style combined.

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
  .app h1 {
    font-size: 25px;
    color: #001e4d;
    font-weight: 600;
    border-bottom: 1px solid #333;
    padding-bottom: 30px;
    margin-top: 0;
  }
  .quiz {
    padding: 20px 0;
  }
  #question {
    font-size: 18px;
    color: #333;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .btn {
    background: #fff;
    color: #222;
    font-weight: 500;
    width: 100%;
    border: 1px solid #222;
    padding: 10px;
    margin: 5px 0;
    text-align: left;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .btn:hover {
    background: #222;
    color: white;
  }
  #next-btn {
    background: #001e4d;
    color: #fff;
    font-weight: 500;
    width: 150px;
    border: 0;
    padding: 10px;
    margin: 20px auto 0;
    border-radius: 4px;
    cursor: pointer;
    display: block;
  }
</style>

<div class="app">
  <h1>Simple Quiz</h1>
  <div class="quiz">
    <h2 id="question">1. Which is the largest animal?</h2>
    <div id="answer-buttons">
      <button class="btn">Shark</button>
      <button
        class="btn"
        style="background: #9aeabc; color: #001e4d; border-color: #9aeabc;"
      >
        Blue Whale
      </button>
      <button class="btn">Elephant</button>
      <button class="btn">Giraffe</button>
    </div>
    <button id="next-btn">Next</button>
  </div>
</div>
```
