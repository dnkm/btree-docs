# To-Do List - JavaScript

Now we need to take the text from the input and turn it into a list item when we click "Add".

## Creating Elements

We use `document.createElement("li")` to make a new list item in memory, and `appendChild` to put it on the page.

### Code

Type something and click Add!

```html iframe height=400px showEditor
<style>
  body {
    background: #153677;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  .container {
    background: white;
    padding: 30px;
    border-radius: 10px;
    width: 300px;
  }
  .input-group {
    display: flex;
    background: #edeef0;
    border-radius: 30px;
    margin-bottom: 20px;
  }
  input {
    border: none;
    background: transparent;
    padding: 15px;
    flex: 1;
    outline: none;
  }
  button {
    border: none;
    padding: 15px 30px;
    background: #ff5945;
    color: white;
    border-radius: 40px;
    cursor: pointer;
  }
  ul {
    padding: 0;
  }
  ul li {
    list-style: none;
    padding: 10px;
  }
</style>

<div class="container">
  <h1>My Tasks</h1>
  <div class="input-group">
    <input type="text" id="input-box" placeholder="Task..." />
    <button onclick="addTask()">Add</button>
  </div>
  <ul id="list-container"></ul>
</div>

<script>
  let inputBox = document.getElementById("input-box");
  let listContainer = document.getElementById("list-container");

  function addTask() {
    if (inputBox.value === "") {
      alert("You must write something!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
    }
    inputBox.value = "";
  }
</script>
```
