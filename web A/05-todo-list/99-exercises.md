# Project 5 Exercises

## Exercise 1: Crossing out items

**Objective**: When you click a list item, it should get a line through it (strikethrough).
**Hint**: Add a CSS class `.checked { text-decoration: line-through; }` and toggle it in JS.

**Expected Result**:

```html iframe height=100px
<ul style="list-style: none; padding: 0; font-family: sans-serif;">
  <li style="text-decoration: line-through; color: gray;">Dishwashing</li>
  <li>Laundry</li>
</ul>
```

## Exercise 2: Deleting items

**Objective**: Add a small "x" button next to each item. When clicked, remove the item.
**Hint**: `li.remove()`.

**Expected Result**:

```html iframe height=100px
<ul style="list-style: none; padding: 0; font-family: sans-serif;">
  <li>
    Laundry
    <span
      style="background: red; color: white; padding: 2px 6px; border-radius: 50%; float: right; font-size: 12px;"
      >x</span
    >
  </li>
</ul>
```
