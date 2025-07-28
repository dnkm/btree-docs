# 🎛️ CSS Grid - The Layout Master

Welcome to Topic 11! Let's learn about **CSS Grid** - the most powerful layout system for creating complex, 2-dimensional layouts. If Flexbox is a superhero, Grid is the entire Justice League! 🦸‍♂️

## What is CSS Grid?

Grid lets you:
- **Create rows and columns** at the same time
- **Position items anywhere** in the grid
- **Make complex layouts** easily
- **Build responsive designs** that adapt to any screen

## Basic Grid Setup

To use grid, add `grid` to the parent container and define columns:

```html
<div class="grid grid-cols-3 gap-4 border bg-gray-100 p-4">
  <div class="border bg-red-100 p-2">1</div>
  <div class="border bg-blue-100 p-2">2</div>
  <div class="border bg-green-100 p-2">3</div>
  <div class="border bg-yellow-100 p-2">4</div>
  <div class="border bg-purple-100 p-2">5</div>
  <div class="border bg-pink-100 p-2">6</div>
</div>
```

This creates a 3-column grid with gaps between items.

## Defining Columns

### Fixed Number of Columns
```html
<div class="grid grid-cols-2 gap-4 border bg-gray-100 p-4">
  <div class="border bg-red-100 p-2">1</div>
  <div class="border bg-blue-100 p-2">2</div>
  <div class="border bg-green-100 p-2">3</div>
  <div class="border bg-yellow-100 p-2">4</div>
</div>

<div class="grid grid-cols-4 gap-4 border bg-gray-100 p-4">
  <div class="border bg-red-100 p-2">1</div>
  <div class="border bg-blue-100 p-2">2</div>
  <div class="border bg-green-100 p-2">3</div>
  <div class="border bg-yellow-100 p-2">4</div>
</div>
```

### Responsive Columns
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border bg-gray-100 p-4">
  <div class="border bg-red-100 p-2">1</div>
  <div class="border bg-blue-100 p-2">2</div>
  <div class="border bg-green-100 p-2">3</div>
  <div class="border bg-yellow-100 p-2">4</div>
</div>
```

## Controlling Gaps (Spacing)

```html
<div class="grid grid-cols-3 gap-2 border bg-gray-100 p-4">
  <div class="border bg-red-100 p-2">Small gap</div>
  <div class="border bg-blue-100 p-2">Small gap</div>
  <div class="border bg-green-100 p-2">Small gap</div>
</div>

<div class="grid grid-cols-3 gap-8 border bg-gray-100 p-4">
  <div class="border bg-red-100 p-2">Large gap</div>
  <div class="border bg-blue-100 p-2">Large gap</div>
  <div class="border bg-green-100 p-2">Large gap</div>
</div>
```

## Spanning Multiple Columns

Make items take up more than one column:

```html
<div class="grid grid-cols-4 gap-4 border bg-gray-100 p-4">
  <div class="col-span-2 border bg-red-100 p-2">Spans 2 columns</div>
  <div class="border bg-blue-100 p-2">1</div>
  <div class="border bg-green-100 p-2">1</div>
  <div class="border bg-yellow-100 p-2">1</div>
  <div class="col-span-3 border bg-purple-100 p-2">Spans 3 columns</div>
</div>
```

## Rows and Row Spanning

You can also control rows:

```html
<div class="grid grid-cols-3 grid-rows-3 gap-4 border bg-gray-100 p-4 h-64">
  <div class="row-span-2 border bg-red-100 p-2">Spans 2 rows</div>
  <div class="border bg-blue-100 p-2">1</div>
  <div class="border bg-green-100 p-2">1</div>
  <div class="border bg-yellow-100 p-2">1</div>
  <div class="border bg-purple-100 p-2">1</div>
  <div class="col-span-2 border bg-pink-100 p-2">Spans 2 columns</div>
</div>
```

## Common Grid Patterns

### 1. Photo Gallery
```html
<div class="grid grid-cols-3 gap-4 border bg-gray-100 p-4">
  <div class="border bg-blue-100 p-8">Photo 1</div>
  <div class="border bg-red-100 p-8">Photo 2</div>
  <div class="border bg-green-100 p-8">Photo 3</div>
  <div class="col-span-2 border bg-yellow-100 p-8">Featured Photo</div>
  <div class="border bg-purple-100 p-8">Photo 4</div>
</div>
```

### 2. Dashboard Layout
```html
<div class="grid grid-cols-4 grid-rows-4 gap-4 border bg-gray-100 p-4 h-96">
  <div class="col-span-4 border bg-blue-100 p-4">Header</div>
  <div class="border bg-red-100 p-4">Sidebar</div>
  <div class="col-span-2 border bg-white p-4">Main Content</div>
  <div class="border bg-green-100 p-4">Widgets</div>
  <div class="col-span-4 border bg-gray-200 p-4">Footer</div>
</div>
```

### 3. Card Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border bg-gray-100 p-4">
  <div class="border bg-white p-4 rounded">Card 1</div>
  <div class="border bg-white p-4 rounded">Card 2</div>
  <div class="border bg-white p-4 rounded">Card 3</div>
  <div class="border bg-white p-4 rounded">Card 4</div>
  <div class="border bg-white p-4 rounded">Card 5</div>
  <div class="border bg-white p-4 rounded">Card 6</div>
</div>
```

## Grid vs Flexbox: When to Use Which?

- **Use Flexbox** for: Navigation bars, centering content, one-dimensional layouts
- **Use Grid** for: Complex layouts, photo galleries, dashboards, card grids

## What's Next?

You now have the power of both Flexbox and Grid! Let's finish with **effects and colors** - adding the final polish to make your designs shine! ✨
