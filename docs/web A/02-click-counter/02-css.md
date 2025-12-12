# Click Counter - CSS

Our counter works... technically. But it looks bold and boring.
Let's add some style!

## Styling the Button & Count

We'll use CSS to make the button look clickable and the number big.

```html iframe height=20lh showEditor
<style>
  body {
    font-family: sans-serif;
    text-align: center;
    padding: 20px;
  }

  button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    border-radius: 8px;
    transition: background 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }

  #count {
    font-weight: bold;
    font-size: 40px;
    color: #333;
    display: block;
    margin: 20px 0;
  }
</style>

<!-- HTML Structure -->
<h1>Click Counter</h1>
<span id="count">0</span>
<button id="click-btn">Click Me!</button>
```
