# Calculator - JavaScript

We need to build a string of math and then solve it.

## The Logic

- `appendToDisplay(val)`: Adds numbers or operators.
- `eval()`: Solves the math (e.g. `eval("2+2")` becomes `4`).
- `try...catch`: Stops errors if the user types something wrong.

### Code

Try calculating something!

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
    grid-template-columns: repeat(4, 1fr);
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

<div class="calculator">
  <input type="text" id="display" disabled />
  <div class="keys">
    <button onclick="appendToDisplay('+')" class="operator-btn">+</button>
    <button onclick="appendToDisplay('7')">7</button>
    <button onclick="appendToDisplay('8')">8</button>
    <button onclick="appendToDisplay('9')">9</button>
    <button onclick="appendToDisplay('-')" class="operator-btn">-</button>
    <button onclick="appendToDisplay('4')">4</button>
    <button onclick="appendToDisplay('5')">5</button>
    <button onclick="appendToDisplay('6')">6</button>
    <button onclick="appendToDisplay('*')" class="operator-btn">*</button>
    <button onclick="appendToDisplay('1')">1</button>
    <button onclick="appendToDisplay('2')">2</button>
    <button onclick="appendToDisplay('3')">3</button>
    <button onclick="appendToDisplay('/')" class="operator-btn">/</button>
    <button onclick="appendToDisplay('0')">0</button>
    <button onclick="appendToDisplay('.')">.</button>
    <button onclick="calculate()" class="equal-btn">=</button>
    <button onclick="clearDisplay()" class="clear-btn">C</button>
  </div>
</div>

<script>
  const display = document.getElementById("display");

  function appendToDisplay(input) {
    display.value += input;
  }

  function clearDisplay() {
    display.value = "";
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Error";
    }
  }
</script>
```
