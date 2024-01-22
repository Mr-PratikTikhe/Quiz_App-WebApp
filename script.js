const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];

    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];

    if (answer === currentQuizData.correctAnswer) {
        score++;
    }

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.innerText = `Your Score: ${score} out of ${quizData.length}`;
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

loadQuestion();
