# Project 2 Exercises

## Exercise 1: Decrease Button

**Objective**: Add a second button that says "Decrease". When clicked, it should subtract 1 from the count.
**Hint**: You will need a new button with a new ID, and a new `onclick` function.

**Expected Result**:

```html iframe height=20lh
<style>
  body {
    font-family: sans-serif;
    text-align: center;
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
    margin: 5px;
  }
</style>

<h1>Click Counter</h1>
<span id="count">5</span>
<br />
<button onclick="document.getElementById('count').innerText = 6">
  Increase
</button>
<button onclick="document.getElementById('count').innerText = 4">
  Decrease
</button>
<!-- Note: This example is simulated for the visual -->
```

## Exercise 2: Color Change

**Objective**: If the count is greater than 10, make the number turn **RED**. If it's less than 0, make it **BLUE**.
**Hint**: Use an `if` statement inside your click function. `element.style.color = "red"`.

**Expected Result (Simulated at count 12)**:

```html iframe height=10lh
<style>
  body {
    font-family: sans-serif;
    text-align: center;
  }
</style>
<span style="font-size: 40px; font-weight: bold; color: red;">12</span>
```
