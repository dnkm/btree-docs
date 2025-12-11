# Digital Clock - CSS (Fonts)

Let's make it look like a futuristic hacker clock.

```html iframe height=300px showEditor
<style>
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap");

  body {
    background-color: #0e0e0e;
    color: #00ff00;
    font-family: "Orbitron", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .clock-container {
    text-align: center;
    border: 3px solid #00ff00;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
  }

  #clock {
    font-size: 60px;
    font-weight: bold;
  }
  #date {
    font-size: 16px;
    margin-top: 10px;
    color: #aaffaa;
  }
</style>

<div class="clock-container">
  <div id="clock">12:00:00</div>
  <div id="date">Loading...</div>
</div>
```
