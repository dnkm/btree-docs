# Color Flipper - CSS

Now we will learn one of the most powerful tools in CSS: **Flexbox**.
It helps us align things easily.

## Centering and Styling

We will use `display: flex` on the body to center our container perfectly.

```html iframe height=300px showEditor
<style>
  body {
    margin: 0;
    padding: 0;
    height: 100vh; /* 100% of the small iframe window */
    display: flex;
    align-items: center; /* Center vertically */
    justify-content: center; /* Center horizontally */
    font-family: sans-serif;
    background-color: #f0f0f0;
  }

  #container {
    background-color: white;
    padding: 40px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* A subtle shadow */
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
  }
</style>

<div id="container">
  <h1>Background Color: <span id="color-code">White</span></h1>
  <button id="btn">Click Me</button>
</div>
```
