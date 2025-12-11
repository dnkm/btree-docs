# Image Gallery - JavaScript (Interactive)

Let's make it so when you click an image, it replaces the background of the page!

## Code

```html iframe height=400px showEditor
<style>
  body {
    margin: 0;
    background-color: #111;
    font-family: sans-serif;
    transition: background 0.5s;
    background-size: cover;
    background-position: center;
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
    border: 2px solid white;
  }
</style>

<h2 style="color: white; text-align: center; text-shadow: 0 2px 4px black;">
  Click an image!
</h2>

<div class="gallery">
  <img
    src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500"
  />
  <img
    src="https://images.unsplash.com/photo-1682695796954-bad252969f98?w=500"
  />
  <img
    src="https://images.unsplash.com/photo-1682685797742-d1665e80fae6?w=500"
  />
</div>

<script>
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      document.body.style.backgroundImage = `url('${src}')`;
    });
  });
</script>
```
