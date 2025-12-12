# To-Do List - HTML

We are building a list where we can add items.

## Structure

We need an input box, a button, and a list (`<ul>`).

```html iframe height=200px showEditor
<div class="container">
  <h1>My Tasks</h1>

  <div class="input-group">
    <input type="text" id="input-box" placeholder="Add a new task..." />
    <button onclick="addTask()">Add</button>
  </div>

  <ul id="list-container">
    <li>HTML</li>
    <li>CSS</li>
  </ul>
</div>
```
