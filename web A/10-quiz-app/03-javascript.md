# Quiz App - JavaScript

This is the big one. We will use an **Array of Objects** to store our data.

### Code

This code handles questions, checking answers, and keeping score.

```html iframe height=500px showEditor
<style>
  body {
    background: #001e4d;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  .app {
    background: white;
    width: 350px;
    border-radius: 10px;
    padding: 20px;
  }
  .app h1 {
    font-size: 20px;
    color: #001e4d;
    border-bottom: 1px solid #333;
    padding-bottom: 20px;
    margin-top: 0;
  }
  .quiz {
    padding: 10px 0;
  }
  #question {
    font-size: 16px;
    color: #333;
    margin-bottom: 15px;
  }
  .btn {
    background: #fff;
    color: #222;
    width: 100%;
    border: 1px solid #222;
    padding: 8px;
    margin: 5px 0;
    text-align: left;
    border-radius: 4px;
    cursor: pointer;
  }
  .btn:disabled {
    cursor: default;
  }
  .correct {
    background: #9aeabc !important;
  }
  .incorrect {
    background: #ff9393 !important;
  }
  #next-btn {
    background: #001e4d;
    color: #fff;
    width: 100%;
    border: 0;
    padding: 10px;
    margin-top: 15px;
    border-radius: 4px;
    cursor: pointer;
    display: none;
  }
</style>

<div class="app">
  <h1>Simple Quiz</h1>
  <div class="quiz">
    <h2 id="question">Question goes here</h2>
    <div id="answer-buttons"></div>
    <button id="next-btn">Next</button>
  </div>
</div>

<script>
  const questions = [
    {
      question: "Largest animal?",
      answers: [
        { text: "Shark", correct: false },
        { text: "Whale", correct: true },
        { text: "Ant", correct: false },
      ],
    },
    {
      question: "2 + 2?",
      answers: [
        { text: "4", correct: true },
        { text: "22", correct: false },
      ],
    },
  ];

  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  let currentQuestionIndex = 0;
  let score = 0;

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
  }

  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) button.dataset.correct = answer.correct;
      button.addEventListener("click", selectAnswer);
    });
  }

  function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild)
      answerButtons.removeChild(answerButtons.firstChild);
  }

  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") button.classList.add("correct");
      button.disabled = true;
    });
    nextButton.style.display = "block";
  }

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) showQuestion();
    else {
      resetState();
      questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
      nextButton.innerHTML = "Play Again";
      nextButton.style.display = "block";
      nextButton.onclick = startQuiz;
    }
  });

  startQuiz();
</script>
```
