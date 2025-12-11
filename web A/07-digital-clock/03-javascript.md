# Digital Clock - JavaScript

We use `setInterval` to run our code every second.

### Code

Wait a second for the time to appear!

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
</style>

<div class="clock-container">
  <div id="clock">--:--:--</div>
</div>

<script>
  function updateTime() {
    const now = new Date();
    // toLocaleTimeString does a lot of work for us!
    document.getElementById("clock").innerText = now.toLocaleTimeString();
  }

  setInterval(updateTime, 1000);
  updateTime(); // Run once immediately
</script>
```
