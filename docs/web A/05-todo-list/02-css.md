# To-Do List - CSS

Let's make it look like a nice notepad app.

```html iframe height=400px showEditor
<style>
  body {
    background: linear-gradient(135deg, #153677, #4e085f);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    margin: 0;
  }

  .container {
    width: 100%;
    max-width: 350px;
    background: white;
    padding: 30px;
    border-radius: 10px;
  }

  .input-group {
    display: flex;
    margin-bottom: 20px;
    background: #edeef0;
    border-radius: 30px;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: 15px;
    font-size: 14px;
  }

  button {
    border: none;
    outline: none;
    padding: 15px 30px;
    background: #ff5945;
    color: white;
    font-size: 14px;
    cursor: pointer;
    border-radius: 40px;
  }

  ul li {
    list-style: none;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
  }
</style>

<div class="container">
  <h1>My Tasks</h1>
  <div class="input-group">
    <input type="text" placeholder="Add task..." />
    <button>Add</button>
  </div>
  <ul>
    <li>Buy Groceries</li>
    <li>Finish Homework</li>
  </ul>
</div>
```
