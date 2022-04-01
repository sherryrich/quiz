const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull; = document.querySelector('#progressBarFull');

let currentQUESTION = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "what is 2 + 27?" ,
        choice1: "2",
        choice2: "4",
        choice3: "21",
        choice4: "17",
        answer: 2,
    },
    {
        question: "The tallest building in the world is located in which city?" ,
        choice1: "Dubai",
        choice2: "New York",
        choice3: "Shanhai",
        choice4: "Non of the above",
        answer: 1,
    },

    {
        question: "What is the capital of Iceland?" ,
        choice1: "Hafnarfjordur",
        choice2: "Helgafell",
        choice3: "Nuuk",
        choice4: "Reykjavík",
        answer: 4,
    },
    {
        question: "Which planet is closest to the sun?" ,
        choice1: "Venus",
        choice2: "Mercury",
        choice3: "Jupiter",
        choice4: "Pluto",
        answer: 2,
    }

]

