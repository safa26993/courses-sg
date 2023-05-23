const questions = [
    {
        question: "Why We Use <br> Element",
        answers: [
            {text: "To Add Breakline", correct: true},
            {text: "To Make Text Bold", correct: false},
        ]
    },
    {
        question: "Is <img> Element Has Attribute href",
        answers: [
            {text: "Yes", correct: false},
            {text: "No Its For Anchor Tag <a>", correct: true}
        ]
    },{
        question: "How Can We Include External Page Inside Our HTML Page",
        answers: [
            {text: "By Using Include in HTML", correct: false},
            {text: "By Using iFrame Tag", correct: true}
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let scoreP = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    scoreP = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        scoreP++ ; 
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${scoreP} out of ${questions.length}!`;
    nextButton.innerHTML = "Back to game";
    nextButton.style.display = "block";
    nextButton.addEventListener("click",()=>{
        document.querySelector('.app').style.display='none';
        document.getElementById('body').style.background = 'url("/images/mario-bg.jpg")';
    });
    if (scoreP == questions.length){
        console.log("you win");
        addToScore(50)
        alert("you add to your score 50 points !!!!")
    }
    else if(scoreP < questions.length){
        alert("you lose 20 points of your score :( ")
        addToScore(-20)
        console.log("you lose !")
    }
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();