# Data Types

In Python, every value has a "type". Knowing the type of data is important because it determines what you can do with it.

## Common Data Types

1.  **String (`str`)**: Text enclosed in quotes.
    - Example: `"Hello"`, `'Python'`
2.  **Integer (`int`)**: Whole numbers (positive or negative) without decimals.
    - Example: `10`, `-5`, `0`
3.  **Float (`float`)**: Numbers with a decimal point.
    - Example: `3.14`, `-0.01`, `2.0`
4.  **Boolean (`bool`)**: Represents `True` or `False`.
    - Example: `True`, `False`

## Checking the Type

You can use the `type()` function to find out the data type of a value.

### Example

```python
x = 5
print(type(x))  # Output: <class 'int'>

y = "Hello"
print(type(y))  # Output: <class 'str'>
```

## Type Conversion (Casting)

Sometimes you need to convert one type to another.

- `int("10")` converts the string "10" to the integer 10.
- `str(10)` converts the integer 10 to the string "10".
- `float(5)` converts the integer 5 to the float 5.0.

### Important Note on Input

Remember that `input()` always returns a **string**. If you want to do math with user input, you must convert it first!

```python
age = input("Enter your age: ")
age_int = int(age)
print("Next year you will be", age_int + 1)
```
