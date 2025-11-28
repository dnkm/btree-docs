# 📝 Forms - Let People Type!

Forms let visitors type stuff and make choices! Like surveys or sign-ups! ✨

## ⌨️ Text Input Box

```html livecodes height=6lh
<label>What's your name?</label>
<input type="text" placeholder="Type here..." />
```

- `<input>` = the text box
- `placeholder` = hint text that disappears when you type

## 📧 Different Input Types

```html livecodes height=28lh
<h3>Tell Me About Yourself!</h3>

<label>📛 Name:</label>
<input type="text" placeholder="Your name" />
<br /><br />

<label>📧 Email:</label>
<input type="email" placeholder="you@email.com" />
<br /><br />

<label>🔢 Age:</label>
<input type="number" placeholder="13" />
<br /><br />

<label>🎂 Birthday:</label>
<input type="date" />
```

Note: `<br>` creates a line break!

## 🎯 Checkboxes (Pick Multiple!)

```html livecodes height=12lh
<h3>🍕 What pizza toppings do you like?</h3>
<input type="checkbox" /> Pepperoni<br />
<input type="checkbox" /> Mushrooms<br />
<input type="checkbox" /> Olives<br />
<input type="checkbox" /> Extra Cheese<br />
```

## 🔘 Radio Buttons (Pick One!)

```html livecodes height=12lh
<h3>🎨 Pick your favorite color:</h3>
<input type="radio" name="color" /> ❤️ Red<br />
<input type="radio" name="color" /> 💙 Blue<br />
<input type="radio" name="color" /> 💚 Green<br />
<input type="radio" name="color" /> 💛 Yellow<br />
```

The `name` keeps them in the same group!

## 📝 Dropdown Menu

```html livecodes height=12lh
<h3>🎮 Favorite game?</h3>
<select>
  <option>Minecraft</option>
  <option>Roblox</option>
  <option>Fortnite</option>
  <option>Among Us</option>
</select>
```

## 💬 Text Area (Big Text Box!)

```html livecodes height=10lh
<h3>Tell me a story! 📖</h3>
<textarea rows="5" cols="40" placeholder="Once upon a time..."></textarea>
```

## 🚀 Complete Form with Submit Button

```html livecodes height=28lh
<h3>🎉 Party Signup!</h3>

<label>Your Name:</label><br />
<input type="text" placeholder="Enter name" /><br /><br />

<label>Your Age:</label><br />
<input type="number" placeholder="13" /><br /><br />

<label>Favorite Snack:</label><br />
<input type="radio" name="snack" /> 🍕 Pizza<br />
<input type="radio" name="snack" /> 🍪 Cookies<br />
<input type="radio" name="snack" /> 🍎 Fruit<br /><br />

<button>Submit! 🎊</button>
```

## 🎯 Challenge Time!

Use the editor on the right to complete this challenge!

Create a "Favorite Things" survey with:

- Name input
- Age input
- 3 hobby checkboxes
- 3 music radio buttons
- Submit button

1. Copy the code below into the editor.
2. Complete the form.
3. Click **Run** to see your code.
4. Click **Submit** when you're done!

```html livecodes mode=codeblock height=11lh
<h2>📋 All About Me Survey</h2>

<label>Name:</label><br />
<input type="text" placeholder="Your name" /><br /><br />

<!-- Add your code here! -->

<button>Submit My Answers! ✨</button>
```
