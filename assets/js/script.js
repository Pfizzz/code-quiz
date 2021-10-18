let questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
];
const quizEl = document.querySelector("#quiz-wrapper");
const startEl = document.querySelector("#start");
const questionEl = document.querySelector("#question");
const optionListEl = document.querySelector("#option-list");
const questionResultEl = document.querySelector("#question-result");
const timerEl = document.querySelector("#timer");

let questionIndex = 0;
let correctCount = 0;

let time = 20;
let intervalId;

// QUIZ FUNCTIONS

// start function

//we need to reveal the first question
const pageLoad = () => {
  // First function to execute
  const quizContainerEl = document.createElement("div");


      const startButton = document.createElement("button");
      startButton.textContent = "Start";
      startButton.setAttribute("class", "start-button red white-text");
      startButton.setAttribute("id", "startId");

      startEl.appendChild(startButton)



     
    };
  

function endQuiz() {
  clearInterval(intervalId);
  let body = document.body;
  body.innerHTML = "Game over, You scored " + correctCount;
}

function updateTime() {
  time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

function renderQuestion() {
  
  if (time == 0) {
    updateTime();
    return;
  }

  intervalId = setInterval(updateTime, 1000);
  
  questionEl.textContent = questions[questionIndex].question;

  optionListEl.innerHTML = "";
  questionResultEl.innerHTML = "";

  let choices = questions[questionIndex].choices;

  for (let i = 0; i < choices.length; i++) {
    let questionListItem = document.createElement("li");
    questionListItem.textContent = choices[i];
    optionListEl.append(questionListItem);
  }
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    time = 0;
  }
  renderQuestion();
}

function checkAnswer(event) {
  clearInterval(intervalId);
  if (event.target.matches("li")) {
    let answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
      questionResultEl.textContent = "Correct";
      correctCount++;
    } else {
      questionResultEl.textContent = "Incorrect";
      time = time - 2;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 2000);
}



//When the page first loads.
pageLoad();

// shows first question after click
const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", renderQuestion);
// make an event listener to hide the start button after the first click
startButton.addEventListener("click", (e) => {
  console.log("clicked!!!");
  document.getElementById("start").style.display = 'none';
});

// Checks for when a list option is selected 
optionListEl.addEventListener("click", checkAnswer);