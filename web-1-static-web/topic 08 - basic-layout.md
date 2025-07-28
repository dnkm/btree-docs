# 👁️ Basic Layout - Show, Hide, and Display Types

Welcome to Topic 8! Now let's learn about **basic layout** concepts - how to control whether elements are visible and how they behave on the page. 🎭

## Visibility Control

### 1. Showing and Hiding Elements

```html
<div class="border bg-blue-100 visible">This div is visible</div>
<div class="border bg-red-100 invisible">This div is invisible (but takes up space)</div>
<div class="border bg-green-100 hidden">This div is completely hidden</div>
```

**What's the difference?**
- `visible` = normal (you can see it)
- `invisible` = you can't see it, but it still takes up space
- `hidden` = completely gone (no space taken)

## Display Types

Elements can behave in different ways. Here are the main types:

### 1. Block Elements

Block elements take up the **full width** and start on a **new line**:

```html
<div class="border bg-blue-100 block">Block 1 (full width)</div>
<div class="border bg-red-100 block">Block 2 (full width)</div>
```

### 2. Inline Elements

Inline elements only take up as much width as needed and sit **next to each other**:

```html
<div class="border bg-blue-100 inline">Inline 1</div>
<div class="border bg-red-100 inline">Inline 2</div>
<div class="border bg-green-100 inline">Inline 3</div>
```

### 3. Inline-Block Elements

Inline-block is like a **hybrid** - elements sit next to each other but you can set width and height:

```html
<div class="border bg-blue-100 inline-block p-4">Inline-block 1</div>
<div class="border bg-red-100 inline-block p-4">Inline-block 2</div>
```

## When to Use Each Type

- **Block**: For main sections, containers, headers
- **Inline**: For small text elements, links within sentences  
- **Inline-block**: For buttons, small cards that should sit side by side

## Practical Examples

### Creating a Simple Navigation

```html
<div class="border bg-gray-100 p-4">
  <div class="inline-block border bg-blue-100 p-2 m-1">Home</div>
  <div class="inline-block border bg-blue-100 p-2 m-1">About</div>
  <div class="inline-block border bg-blue-100 p-2 m-1">Contact</div>
</div>
```

### Toggle Visibility

```html
<div class="border bg-green-100 p-2">Always visible</div>
<div class="border bg-red-100 p-2 hidden">Hidden until needed</div>
<div class="border bg-blue-100 p-2">Always visible</div>
```

## What's Next?

Now that you understand basic display types, let's learn about **positioning** - how to place elements exactly where you want them on the page! 🎯
