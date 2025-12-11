# Project 10 Exercises

## Exercise 1: Timer

**Objective**: Add a 10-second timer for each question. If the time runs out, auto-select the wrong answer or skip to the next.
**Hint**: Use `setInterval` or `setTimeout`.

**Expected Result**:

```html iframe height=50px
<div
  style="background: white; padding: 10px; border: 1px solid #333; text-align: right; font-family: sans-serif;"
>
  Time Left: <span style="font-weight: bold; color: red;">0:05</span>
</div>
```

## Exercise 2: More Metadata

**Objective**: Add an "explanation" field to the question object. When the user answers, show the explanation text below the buttons.

**Expected Result**:

```html iframe height=100px
<div style="background: white; font-family: sans-serif; padding: 10px;">
  <button
    style="background: #9aeabc; width: 100%; padding: 5px; margin-bottom: 10px;"
  >
    Answer (Correct)
  </button>
  <div style="background: #eef; padding: 10px; border-left: 4px solid blue;">
    <strong>Explanation:</strong> The Blue Whale is the largest animal ever
    known to have lived on Earth.
  </div>
</div>
```
