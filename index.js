const questions = [
    {
        question: "Which is the largest animal in the world?",
        answer: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        answers: [
            { text: "argest railway station", correct: true },
            { text: "highest railway station", correct: false },
            { text: "longest railway station", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "Entomology is the science that studies",
        answers: [
            { text: "Behavior of human beings", correct: false },
            { text: "Insects", correct: true },
            { text: "The origin and history of technical and scientific terms", correct: false },
            { text: "The formation of rocks", correct: false },
        ]
    },
    {
        question: "Garampani sanctuary is located at",
        answers: [
            { text: "Junagarh, Gujarat", correct: false },
            { text: "Diphu, Assam", correct: true },
            { text: "Kohima, Nagaland", correct: false },
            { text: "Gangtok, Sikkim", correct: false },
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-butttons");
const nextButton = document.getElementById("next-button");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    let currentQuestionIndex = 0;
    let score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect = selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    }

     ) ;
     nextButton.style.display = "block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML="Play Again";
        nextButton.style.display="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex<questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
    nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    })
    startQuiz();

