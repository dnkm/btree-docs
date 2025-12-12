# Click Counter - JavaScript

Now for the magic. We want the count to go up when we click the button.

## The Logic

1. Find the elements.
2. Listen for a "click".
3. Update the number.

### Code

Try clicking the button in the example below!

```html iframe height=20lh showEditor
<style>
  body {
    font-family: sans-serif;
    text-align: center;
    padding: 20px;
  }
  #count {
    font-size: 40px;
    font-weight: bold;
    display: block;
    margin: 20px;
  }
  button {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }
</style>

<h1>Click Counter</h1>
<span id="count">0</span>
<button id="click-btn">Click Me!</button>

<script>
  let countElement = document.getElementById("count");
  let buttonElement = document.getElementById("click-btn");
  let count = 0;

  buttonElement.onclick = function () {
    count = count + 1;
    countElement.innerText = count;
  };
</script>
```
