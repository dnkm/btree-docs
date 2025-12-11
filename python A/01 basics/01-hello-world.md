# Hello World

Welcome to your first Python program! In this lesson, we will learn how to display text on the screen.

## The `print()` Function

To output text in Python, we use the `print()` function. The text must be enclosed in quotes (either single `'` or double `"`).

### Example

```python static
print("Hello, World!")
---
Hello, World!
```

## Common Mistakes

- **Missing quotes**: `print(Hello)` will cause an error because Python looks for a variable named `Hello` instead of text.
- **Capitalization matters**: Python is case-sensitive. `Print("...")` will not work; it must be all lowercase `print`.

## Try It Yourself

Let's try printing different messages.

```python static
print("Coding is fun!")
print("It's harder to read code than write it.")
print('1 + 1')
---
Coding is fun!
It's harder to read code than write it.
1 + 1
```

> **Note**: Notice that `'1 + 1'` is not calculated to equal `2`. It is printed exactly as written because the quotes make it a **string** (text), not a math expression.
