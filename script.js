const quizzData = [
    {
        question: 'What is my favorit color',
        a: 'Black',
        b: 'White',
        c: 'Red',
        d: 'Green',
        correct: 'c'
    },
    {
        question: 'How many dogs i have?',
        a: '1',
        b: '0',
        c: '2',
        d: '3',
        correct: 'd'
    },
    {
        question: 'What is my favorite singer?',
        a: 'Beyoncé',
        b: 'Mariah Carey',
        c: 'Riannha',
        d: 'Ariana Grande',
        correct: 'a'
    }
]

const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')

let currentQuizz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizzData = quizzData[currentQuizz];

    questionEl.innerHTML = currentQuizzData.question;

    a_text.innerHTML = currentQuizzData.a;
    b_text.innerHTML = currentQuizzData.b;
    c_text.innerHTML = currentQuizzData.c;

    currentQuestion++

}