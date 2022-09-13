const quizData = [
    {
        question: "What does Malfoy call Hermione?",
        a: "Pureblood",
        b: "Mudblood",
        c: "Muggle-born",
        d: "Dunder head",
        correct: "b",
    },
    {
        question: "What does Dumbledore conceal his thoughts in, and when does Harry first travel into it?",
        a: "Wigenweld Potion",
        b: "Pensieve",
        c: "The Riddle House",
        d: "Floo Powder",
        correct: "b",
    },
    {
        question: "What spell can protect you from a dementor",
        a: "Expecto Patronum",
        b: "Riddukulos",
        c: "Avada Kedavra",
        d: "Crucio",
        correct: "a",
    },
    {
        question: "What potion forces the drinker to tell the truth?",
        a: "Wiggenwald",
        b: "Veritaserum",
        c: "Wolfsbane",
        d: "none Moonstone Maximus the above",
        correct: "b",
    },
    {
        question: "Who tortured the Longbottoms for information?",
        a: "Voldemort",
        b: "Barty crouch senior",
        c: "Bellatrix Lestrange",
        d: "Peter Pettigrew",
        correct: "c",
    },
    {
        question: "What did Sirius Black give Harry in his third year?",
        a: "Nimbus 2000",
        b: "Buckbeak",
        c: "New wand",
        d: "Firebolt",
        correct: "d",
    },
    {
        question: "What does Harry use to kill the basilisk in the 2nd year?",
        a: "Pocket knife",
        b: "Avada Kedavra",
        c: "Sorting Hat",
        d: "The Sword of Godric Gryffindor",
        correct: "d",
    },
    {
        question: "What is the worst fear of Ron?",
        a: "Dementors",
        b: "Spiders",
        c: "Snakes",
        d: "Flear Delacour",
        correct: "b",
    },
    {
        question: "How many points does a seeker score for catching the golden snitch?",
        a: "100",
        b: "150",
        c: "200",
        d: "125",
        correct: "b",
    },
    {
        question: "What was the name of toad owned by Neville?",
        a: "Revor",
        b: "Neville junior",
        c: "Jeff",
        d: "Trevor",
        correct: "d",
    },
    {
        question: "What spells did the half-blood prince invent?",
        a: "The unforgivable curses",
        b: "Levicorpus and Sectumsempra",
        c: "None",
        d: "All",
        correct: "b",
    },
    {
        question: "What is the favorite color of Umbridge?",
        a: "Red",
        b: "Black",
        c: "Pink",
        d: "Blue",
        correct: "c",
    },
    {
        question: "What platform does Harry Potter aboard to the Hogwarts Express, and who does Harry meet there?",
        a: "Platform 10-Remus Lupin",
        b: "Platform 9 and 3/4-the Weasleys",
        c: "Platform 12-Hagrid",
        d: "Diagon Alley-Professor Quirell",
        correct: "b",
    },
    {
        question: "What spell does Hermione Granger use to mend Harrys glasses?",
        a: "Wingardium Leviosa",
        b: "Reducto",
        c: "Oculos Reparo",
        d: "Locomotor Mortis",
        correct: "c",
    },



];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})
