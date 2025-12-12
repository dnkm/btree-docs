# Project 3 Exercises

## Exercise 1: Hex Colors

**Objective**: Instead of a fixed list of colors, generate a completely random **Hex Color**.
Hex colors look like `#A23F10`. They have 6 characters made of 0-9 and A-F.

**Hint**:

```javascript
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Pick 6 random items from this list and join them with a "#"!
```

**Expected Result**:
Every time you click, you get a unique color code like `#3F2A9C`.

```html iframe height=200px
<style>
  body {
    background-color: #3f2a9c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: sans-serif;
    color: white;
  }
  .card {
    background: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
  }
</style>
<div class="card">
  <h1>Color: #3F2A9C</h1>
  <button>Click Me</button>
</div>
```
