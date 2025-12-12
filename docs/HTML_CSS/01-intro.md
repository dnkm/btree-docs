---
doc_id: k571jy9d4q7x9btadwp629vnss7wvtcc
title: HTML + CSS Course~
problemType: "essential"
gradingType: "read"
---

# 👋 Welcome to HTML + CSS course

HTML is like the skeleton of every website! It tells your browser what to show on the page.

## 🎯 Your First HTML

Let's make something appear on the screen!

```html iframe height=7lh showEditor
<h1>Hello, World!</h1>
<p>I just wrote my first HTML! 🎉</p>
```

**Try it!** Click the ▶️ button to see your code come to life!

## 💡 What's Happening?

- `<h1>` = Big heading (like a title)
- `<p>` = Paragraph (regular text)
- Those `< >` things? They're called **tags**!

Tags wrap around your content like a hug 🤗

## 🚀 Your Turn!

Use the editor below to clone the following webpage.

```html iframe height=150
<h1>Hello, World!</h1>
<p>My name is _____ and I'm learning HTML!</p>
<div class="prose"></div>
```

```jsx reactlive
function App() {
  // Declare a state variable 'count' and a function 'setCount' to update it.
  // The initial value of 'count' is set to 0.
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to decrement the counter
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Function to reset the counter
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <p>
        Current count: <strong>{count}</strong>
      </p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```
