# Inputs

Programs become more interactive when they can take input from the user. In Python, we use the `input()` function for this.

## The `input()` Function

The `input()` function pauses the program and waits for the user to type something and press Enter. It always returns the input as a **string** (text).

### Example

```python
name = input("What is your name? ")
print("Hello, " + name + "!")
```

In this example:

1. The program asks "What is your name?".
2. The user types their name.
3. The program stores the name in the variable `name`.
4. Finally, it prints a greeting using the name.

### Try It Yourself

Write a program that asks for your favorite color and then prints "I like [color] too!".
