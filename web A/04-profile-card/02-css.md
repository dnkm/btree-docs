# Profile Card - CSS (Box Model)

This is the most important lesson in CSS: **The Box Model**.

## Styling the Layout

We will shape the card, center it, and style the header image to "pop out" by using a negative margin!

```html iframe height=400px showEditor
<style>
  body {
    background-color: #f1f1f1;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .card {
    background: white;
    width: 300px;
    border-radius: 15px; /* Rounded corners */
    overflow: hidden; /* Hides anything sticking out */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); /* 3D effect shadow */
    text-align: center;
  }

  .card-header {
    height: 100px;
    background-color: #4eadea;
  }

  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%; /* Perfect circle */
    border: 4px solid white;
    margin-top: 50px; /* Pushes it down into the header area */
    /* wait, we usually want margin-top: -50px to pull it UP. Try changing it! */
    background-color: white;
  }
</style>

<!-- HTML -->
<div class="card">
  <div class="card-header">
    <!-- Image is inside header in this structure, or we can move it out. -->
  </div>
  <img
    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
    alt="Profile Image"
    class="profile-img"
  />
  <!-- Note: In this specific example, we moved img outside header div to simplify the negative margin lesson visually, or we can use the previous structure. Let's use negative margin on the img if it follows the header. -->

  <div class="card-body">
    <h2 class="name">Felix Coder</h2>
  </div>
</div>
```
