# Profile Card - Polish

Let's finish the text styling to make it look professional.

```html iframe height=450px showEditor
<style>
  body {
    background: #f1f1f1;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .card {
    background: white;
    width: 300px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  .card-header {
    height: 100px;
    background-color: #4eadea;
  }
  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid white;
    margin-top: -50px;
    background-color: white;
  }

  /* NEW STYLES */
  .card-body {
    padding: 20px;
  }
  .name {
    margin: 0;
    color: #333;
  }
  .title {
    color: #777;
    font-size: 14px;
    margin-bottom: 20px;
  }
  .bio {
    color: #555;
    line-height: 1.5;
  }

  button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s;
  }

  button:hover {
    background-color: #000;
  }
</style>

<div class="card">
  <div class="card-header"></div>
  <img
    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
    alt="Profile Image"
    class="profile-img"
  />
  <div class="card-body">
    <h2 class="name">Felix Coder</h2>
    <p class="title">Web Developer</p>
    <p class="bio">I love building cool things with HTML, CSS, and JS!</p>
    <button>Contact Me</button>
  </div>
</div>
```
