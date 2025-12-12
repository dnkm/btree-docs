# Color Flipper - JavaScript

We want to pick a random color from a list and apply it to the `body` background.

## New Concept: Arrays & Math.random()

We basically roll a die to pick a color from our list.

### Code

Click the button to see it work!

```html iframe height=300px showEditor
<style>
  body {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    transition: background 0.5s;
  }
  #container {
    background: white;
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
  }
</style>

<div id="container">
  <h1>Color: <span id="color-code">#FFFFFF</span></h1>
  <button id="btn">Click Me</button>
</div>

<script>
  const colors = [
    "#EF5350",
    "#EC407A",
    "#AB47BC",
    "#7E57C2",
    "#5C6BC0",
    "#42A5F5",
    "#26A69A",
    "#D4E157",
    "#FFCA28",
    "#FFA726",
  ];
  const btn = document.getElementById("btn");
  const colorCode = document.getElementById("color-code");

  btn.onclick = function () {
    // 1. Get a random number between 0 and the length of our list
    const randomNumber = Math.floor(Math.random() * colors.length);

    // 2. Pick the color
    const pickedColor = colors[randomNumber];

    // 3. Apply it to the body
    document.body.style.backgroundColor = pickedColor;

    // 4. Update the text to show the color code
    colorCode.innerText = pickedColor;
  };
</script>
```
