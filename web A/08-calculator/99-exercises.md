# Project 8 Exercises

## Exercise 1: Backspace

**Objective**: Add a "DEL" (Delete) button that removes only the last character entered, unlike "C" which clears everything.
**Hint**: `display.value.slice(0, -1)` removes the last character.

**Expected Result**:

```html iframe height=100px
<div style="background: #222; padding: 20px; text-align: center;">
  <input value="12345" style="font-size: 20px; padding: 5px;" />
  <button style="padding: 10px; background: red; color: white; border: 0;">
    DEL
  </button>
</div>
```

## Exercise 2: Keyboard Support

**Objective**: Allow the user to type numbers on their keyboard instead of clicking buttons.
**Hint**: Listen for `"keydown"` on the `document`. If the key is a number, call `appendToDisplay`.

_(No visual preview for keyboard support, try it in your editor!)_
