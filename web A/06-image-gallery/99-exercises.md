# Project 6 Exercises

## Exercise 1: Highlight Selection

**Objective**: When an image is clicked (and becomes the background), add a thick colored border to that specific image so we know it's selected. Remove the border from other images.
**Hint**: `classList.add("selected")` and remove it from others.

**Expected Result**:
_(Simulated view of one selected image)_

```html iframe height=150px
<style>
  body {
    background: #333;
    padding: 20px;
  }
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
  .selected {
    border: 4px solid #00ff00;
    transform: scale(1.1);
  }
</style>
<img
  src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200"
  class="selected"
/>
```
