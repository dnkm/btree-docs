# If Statements

If statements allow your program to make decisions. They let you run specific blocks of code only if a certain condition is true.

## The `if` Statement

```python
age = 18

if age >= 18:
    print("You are an adult.")
```

Note the **indentation**. The code inside the `if` block must be indented (usually 4 spaces or 1 tab).

## The `else` Statement

Use `else` to specify a block of code to be executed if the condition is `False`.

```python
age = 15

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
```

## The `elif` Statement

Use `elif` (short for "else if") to check multiple conditions.

```python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
```

### Try It Yourself

Write a program that asks the user for a number.

- If the number is positive, print "Positive".
- If the number is negative, print "Negative".
- If the number is zero, print "Zero".
