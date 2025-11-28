# codeblocks

code section on markdown files should add livecodes directive next to it.
For example

```python
print(1)
```

should be

```python livecodes height=20lh
print(1)
```

calculate height based on the number of lines in the code block and cap it at 50lh. Also take into account the expected output of the code block. Always add about 1 or 2lh more to the height to account for the header and footer.

# Task

At the bottom of each page, add a task/exercise for the reader to do. The task should be related to the content of the page and should be challenging but not too hard. The task should be self-contained and should not require any external resources.

use "mode=codeblock" to indicate that the task should be a code block.

For example:

## 🚀 Your Turn!

Use the editor on the right to complete this challenge!

1. Copy the code below into the editor.
2. Change `_____` to your name.
3. Click **Run** to see your code.
4. Click **Submit** when you're done!

```html livecodes mode=codeblock height=4lh
<h1>Hello, World!</h1>
<p>My name is _____ and I'm learning HTML!</p>
```
