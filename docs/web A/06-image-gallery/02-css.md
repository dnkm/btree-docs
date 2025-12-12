# Image Gallery - CSS (Grid)

Let's use **CSS Grid** to make a nice responsive grid.

## The Grid

`grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))` handles the layout magic.

```html iframe height=400px showEditor
<style>
  body {
    margin: 0;
    background-color: #111;
    font-family: sans-serif;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
    padding: 20px;
  }

  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.05);
  }
</style>

<div class="gallery">
  <img
    src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=200"
  />
  <img
    src="https://images.unsplash.com/photo-1682695796954-bad252969f98?w=200"
  />
  <img
    src="https://images.unsplash.com/photo-1682685797742-d1665e80fae6?w=200"
  />
  <img
    src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=200"
  />
</div>
```
