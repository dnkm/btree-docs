Create course where students learn how to create websites using HTML + CSS.

Assume

- students have no prior knowledge of HTML + CSS.
- students have almost no knowledge of programming.
- no frameworks or libraries are to be used.
- students will be using a live editor to write code.

I want the following strategy to be employed:

1. Start with the most basic concepts and build up to more complex ones.
2. Use real-world examples to explain concepts.
3. Use visual aids to explain concepts.
4. Use interactive examples to explain concepts.
5. Use quizzes to test understanding.
6. Use exercises to practice what was learned.
7. Use projects to apply what was learned.
8. Use feedback to improve the course.
9. Use updates to keep the course relevant.
10. Use a consistent style throughout the course.

An example would be

1. Project A (Style first then functionality)

- First build the skeleton
- Then add HTML content
- Add more HTML Content (it's an exercise, so tell students what to build but do not provide code)
- Then add the styling
- Add more styling (it's an exercise, so tell students what to build but do not provide code)
- Then add the interactivity
- Add more interactivity (it's an exercise, so tell students what to build but do not provide code)
- Then add the final touches

2. Project B (Functionality first then style)

- First build the skeleton
- Then add the content
- Add more content (it's an exercise, so tell students what to build but do not provide code)
- Then add the interactivity
- Add more interactivity (it's an exercise, so tell students what to build but do not provide code)
- Then add the styling
- Add more styling (it's an exercise, so tell students what to build but do not provide code)
- Repeat as we build the project by adding more features
- Then add the final touches

For each project, we will teach some HTML, CSS, and JavaScript.
Create multiple steps for each larger project. One of the most important things is to teach them how to split a project into smaller parts.

HTML topics to cover:

- Headings
- Paragraphs
- Links
- Images
- Lists
- Forms
- Tables
  But generally will be using <div> and <span> for styling.

CSS topics to cover:

- Box model
- Colors
- Typography
- Layout
- Responsive design
- Flexbox
- Grid
- Animations
- Transitions
- Positioning
- Using CSS variables
- Using classes and selectors

JavaScript topics to cover:

- Variables
- Functions
- Events
- DOM manipulation
- Forms
- Arrays
- Objects
- Conditionals
- Loops
- Asynchronous programming (limited await, async functions only)

What we will not cover:

- Anything server-side
- Any external libraries or frameworks outside of vanilla JS and DOM
- Advanced topics like classes, inheritance, asynchronous programming, etc.

Target Audience:

- 5th to 8th graders
- Students with very basic knowledge of programming
- older students will learn it and move on to more advanced topics not covered in this course

Make the course consist of topics. An example hierarchy would be:

The first two levels will be folders and the rest will be markdown files.

- Course
  - Hello World
    - HTML (markdown file)
    - More HTML (quiz)
    - CSS
    - More CSS (quiz)
    - JavaScript
    - More JavaScript (quiz)
    - Additional Ideas
  - Click Counter
    - HTML
    - CSS
    - JavaScript
    - My ideas

Feel free to change them however you see fit. Try to squeeze in exercises (but not quizzes) so students can practice what they learned.

# codeblock

A special code block has been implemented to make it easier for students to edit and run code.

```html
<h1>hello world</h1>
```

The above codeblock renders a highlighted code block, common to all markdown documentations.

```html iframe height=3lh showEditor
<h1>hello world</h1>
```

The `showEditor` and `iframe` parameters provide an editor for students to view/edit the code and also see the result. Most of the time, use this instead of the plain codeblock.

```html iframe height=3lh
<h1>hello world</h1>
```

For exercises, use the `iframe` parameter without `showEditor`. In this setting, it will render the result in an iframe so students will see the result only. A height needs to be provided to match the result's height. This will be handy to give out an exercise to students since they can only see the result and not the code. Make sure these coding exercises are separated in a separate file. IMPORTANT.

# Coding exercises

Provide coding exercises in a separate file. IMPORTANT.
Use the `iframe` parameter without `showEditor` to showcase the wanted result. Provide written specifications for the exercise.

They will be provided a separate Editor to edit the code and see the result so instructions should be clear and concise.
