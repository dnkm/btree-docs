# codeblocks

markdown on the tutorials will have special code blocks that shows code and its output. For that, code section must follow the following format:

```python static
for i in range(2):
    print(i)
---
0
1
```

The "static" meta will trigger a special code block that shows code and its output. The output and the code are split by the "---" line.

In generating tutorials, always use the "static" meta for code blocks. 요새 아이들이 좋아하는 재미있는 스타일의 강좌들을 써줘. 그렇지만 유머는 너무 과하지는 않게 적절하게 해주고, 전체적으로 재미를 느끼도록 너무 길고 지루한 설명보다는 짧게 핵심위주로 설명해줘. (물론 필요하면 괜찮아)
ai 가 쓴것처럼 너무 획일적이지 않도록 해주고!

# Naming Conventions

`doc` folder stores all the markdown files for the documentation site.
It will be in the form of `doc/course-name-COURSEID/topic-name-TOPICID/SEQUENCE-title.md`
For example: `doc/python-basics-kh148zap/variables-kh123ttp/01-introduction-to-python.md`
The COURSEID and TOPICID are unique alphanumeric strings to identify the course and topic respectively.
