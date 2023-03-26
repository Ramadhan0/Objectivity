/**
 * Develop a text-based quiz application with multiple-choice questions.
 * The app should read questions with answers from an array,
 * display the question randomised to the user,
 * track the user's score,
 * and provide a final summary of the results
 */

const quiz = [
    {
        question: "What does the acronym 'DOM' stand for?",
        choices: [
            "Document Object Model",
            "Document Oriented Model",
            "Distributed Object Model",
            "Dynamic Object Model"
        ],
        answer: "Document Object Model"
    },
    {
        question: "What keyword is used to declare a variable in JavaScript?",
        choices: ["var", "let", "const", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        choices: ["the current function", "the global object", "the object that owns the current function", "none of the above"],
        answer: "the object that owns the current function"
    },
    {
        question: "What is the purpose of the 'map' method in JavaScript?",
        choices: [
            "to modify the original array",
            "to filter elements from the array",
            "to create a new array with the results of calling a provided function on every element in the array",
            "to sort the elements in the array"
        ],
        answer: "to create a new array with the results of calling a provided function on every element in the array"
    },
    {
        question: "What does the 'NaN' value represent in JavaScript?",
        choices: [
            "Not a Number",
            "Null or Nothing",
            "No available Number",
            "None of the Above"
        ],
        answer: "Not a Number"
    }
];

const randomQuestion = () => {
    // random question
    const questionIndex = Math.floor(Math.random() * quiz.length);
    const question = quiz[questionIndex];

    // Display the question and choices to the user
    console.log(question.question);
    question.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
    });

    // Ask the user for their answer and return it
    const userAnswer = prompt("Enter your answer (1-4):");

    return userAnswer;
}

// check user's answer and update the score
const checkAnswer = (userAnswer, questionIndex, score) => {
    const correctAnswer = quiz[questionIndex].answer;

    // Compare the user's choice to the correct answer and update the score
    if (userAnswer === correctAnswer) {
        console.log("Correct!");
        score++;
    } else {
        console.log(`Incorrect. The correct answer is ${correctAnswer}.`);
    }

    return score;
}

// Run the quiz
function runQuiz() {
    // Initial score
    let score = 0;

    for (let i = 0; i < quiz.length; i++) {
        const userAnswer = randomQuestion();
        score = checkAnswer(userAnswer, i, score);
    }

    console.log(`Quiz complete. You scored ${score} out of ${quiz.length}.`);
}

runQuiz();
