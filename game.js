const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "what is 2 + 27?",
        choice1: "2",
        choice2: "29",
        choice3: "21",
        choice4: "17",
        answer: 2,
    },
    {
        question: "The tallest building in the world is located in which city?",
        choice1: "Dubai",
        choice2: "New York",
        choice3: "Shanhai",
        choice4: "Non of the above",
        answer: 1,
    },

    {
        question: "What is the capital of Iceland?",
        choice1: "Hafnarfjordur",
        choice2: "Helgafell",
        choice3: "Nuuk",
        choice4: "Reykjavík",
        answer: 4,
    },
    {
        question: "Which planet is closest to the sun?",
        choice1: "Venus",
        choice2: "Mercury",
        choice3: "Jupiter",
        choice4: "Pluto",
        answer: 2,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] //spread operator getting all the questions available
    getNewQuestion()
}


getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem(`mostRecentScore`, score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question


    choices.forEach(choice => {	
        const number = choice.dataset['number']	
        choice.innerText = currentQuestion['choice' + number]	
    })	
    availableQuestions.splice(questionsIndex, 1)	
    acceptingAnswers = true	
}	
choices.forEach(choice => {	
    choice.addEventListener('click', e => {	
        if(!acceptingAnswers) return	
        acceptingAnswers = false	
        const selectedChoice = e.target	
        const selectedAnswer = selectedChoice.dataset['number']	
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'	
        if(classToApply === 'correct') {	
            incrementScore(SCORE_POINTS)	
        }	
        selectedChoice.parentElement.classList.add(classToApply)	
        setTimeout(() => {	
            selectedChoice.parentElement.classList.remove(classToApply)	
            getNewQuestion()	
        }, 1000)	
    })	
})	
incrementScore = num => {	
    score +=num	
    scoreText.innerText = score	
}	
startGame()