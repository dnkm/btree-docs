---
doc_id: k57f4yff0q541s6xxf09evxas97x4ns2
title: JavaScript
gradingType: read
---

# JavaScript - The Brains

HTML is the structure, CSS is the style, and **JavaScript** is the logic (or brains).
It allows the page to change and react to users.

For this lesson, let's use JavaScript to change the text on our page automatically.

## The Script Tag

We write JavaScript inside a `<script>` tag.

## Changing Content

We can use `document.body.innerHTML` to replace everything on the body of the page.

### Example

```html iframe height=10lh showEditor
<h1>Older Text</h1>

<script>
  document.body.innerHTML = "<h1>Hello from JavaScript!</h1>";
</script>
```

Wait, where did "Older Text" go? JavaScript overwrote it!

## Interactivity (Alerts)

Let's try a popup message (alert).

```html iframe height=10lh showEditor
<button onclick="alert('Hello!')">Click me</button>
```

Using `onclick`, we can make the code run when the user interacts with the button, rather than automatically.

### Example

Let's combine the two and make the content change upon clicking the button

```html iframe height=10lh showEditor
<h1>Older Text</h1>

<button onclick="document.body.innerHTML = '<h1>Hello from JavaScript!</h1>'">
  Click me
</button>
```
