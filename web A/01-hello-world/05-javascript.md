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

<script>
  // You can also run code immediately:
  // alert("Welcome to my website!");
</script>
```
