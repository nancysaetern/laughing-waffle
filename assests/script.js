const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById

let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionsIndex = 0
    questionContainerElement.classList.remove('hide')

}
    setNextQuestion(){
        showQuestion(shuffledQuestions[currentQuestionsIndex])
    }
    

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct}
        })
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    }


function setNextQuestion() {

}

function selectAnswer() {

}

const questions = [
    {
        question: 'What is 2 + 2 ,'


        
    }
]