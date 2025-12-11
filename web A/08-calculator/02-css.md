# Calculator - CSS

Let's use **Grid** to lay out our keys neatly.

```html iframe height=500px showEditor
<style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #333;
    margin: 0;
    font-family: sans-serif;
  }

  .calculator {
    background-color: #222;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    width: 250px;
  }

  #display {
    width: 100%;
    padding: 20px;
    font-size: 30px;
    text-align: right;
    border: none;
    background-color: #eee;
    border-radius: 5px;
    margin-bottom: 20px;
    box-sizing: border-box;
  }

  .keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 Columns */
    gap: 10px;
  }

  button {
    padding: 15px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #555;
    color: white;
    transition: background 0.2s;
  }

  button:hover {
    background-color: #777;
  }

  /* Special Buttons */
  .operator-btn {
    background-color: #ff9f43;
  }
  .equal-btn {
    background-color: #2ecc71;
    grid-column: span 2;
  }
  .clear-btn {
    background-color: #e74c3c;
    grid-column: span 2;
  }
</style>

<!-- HTML -->
<div class="calculator">
  <input type="text" id="display" disabled value="123 + 45" />
  <div class="keys">
    <button class="operator-btn">+</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button class="operator-btn">-</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button class="operator-btn">*</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button class="operator-btn">/</button>
    <button>0</button>
    <button>.</button>
    <button class="equal-btn">=</button>
    <button class="clear-btn">C</button>
  </div>
</div>
```
