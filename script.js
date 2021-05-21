const quizzData = [
    {
        question: 'What is my favorit color?',
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

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');

let currentQuizz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    const currentQuizzData = quizzData[currentQuizz];

    questionEl.innerText = currentQuizzData.question;

    a_text.innerText = currentQuizzData.a;
    b_text.innerText = currentQuizzData.b;
    c_text.innerText = currentQuizzData.c;

    currentQuestion++
}

function getSelected() {
    const answerEls = document.querySelectorAll("answer")

    let answer = undefined;

    answerEls.forEach((answerEls) => {
        if (answerEls.checked) {
       answer = answerEls.id
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    
    if (answer) {
        currentQuizz++
        if (currentQuizz < quizzData.length) {
            loadQuiz()
        } else {
            alert('You Finished!Get yourself an Orange Lemonade')
        }
    }
})