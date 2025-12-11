# Project 7 Exercises

## Exercise 1: 12hr vs 24hr

**Objective**: Add a button that toggles between 12-hour format (with AM/PM) and 24-hour format.
**Hint**: You can pass options to `toLocaleTimeString([], {hour12: false})`.

**Expected Result**:

```html iframe height=100px
<div
  style="background: black; color: #00ff00; font-family: monospace; padding: 20px; text-align: center;"
>
  14:30:45 <br /><br />
  <button>Switch Format</button>
</div>
```

## Exercise 2: Date Display

**Objective**: Make the date show nicely like "Monday, 1 January 2024".
**Hint**: `now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })`

**Expected Result**:

```html iframe height=50px
<div
  style="background: black; color: #aaffaa; font-family: sans-serif; text-align: center;"
>
  Monday, January 1, 2024
</div>
```
