# Intro

Svelte apps are made up of 3 parts

1. SCRIPT
2. HTML
3. STYLE/CSS

All of these goes into a single file.

# HTML only

populate the following content to a svelte file.

```svelte
<h1>Hello World!</h1>

<div>My favorite fruits</div>
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>
```

For now, it will just look like a plain HTML file - except `<html>`, `<head>` and `<body>` tags are omitted.

# An optional style tag

```svelte
<h1>Hello World!</h1>

<div>My favorite fruits</div>
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>

<style>
  h1 {
    color: hotpink;
  }
</style>
```

# An optional script tag

```svelte
<script>
  let random = Math.random();
</script>

<h1>Hello World!</h1>

<div>My favorite fruits</div>
<ul>
  <li>Apple</li>
  <li>Banana</li>
</ul>

<div>My favorite number: {random}</div>

<style>
  h1 {
    color: hotpink;
  }
</style>
```

> Why don't we want to separate the css file? That's because svelte has a concept of "components". Each component you build will be stand-alone, i.e. it will carry all of its script/html/css components rather than having multiple file dependencies.
