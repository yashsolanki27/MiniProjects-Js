const questions = [
{
    question : "Which keyword is used to declare a variable that cannot be reassigned?",
    answers: [
        { text: "const",correct: true},
        { text: "let",correct: false},
        { text: "var",correct: false},
        { text: "final",correct: false},
    ]
   
},
{
    question : "What is the result of the expression typeof([])?",
    answers: [
        
        { text: "array",correct: false},
        { text: "object",correct: true},
        { text: "undefined",correct: false},
        { text: "string",correct: false },
    ]
   
},
{
    question : "What is the purpose of the addEventListener method in JavaScript?" ,
    answers: [
        
        { text: "To remove an event listener from an element",correct: false},
        { text: "To execute an event immediately on page load",correct: false},
        { text: " To add an event listener to an element",correct: true},
        { text: "To retrieve the event object associated with an element",correct: false },
    ]
   
},
{
    question : "Which function is used to parse a JSON string into a JavaScript object?",
    answers: [
        
        { text: "RRR",correct: false} ,
               { text: " JSON.objectify()",correct: false},
        { text: " JSON.decode()",correct: false},
        { text: "JSON.parse()",correct: true},
    ]
   
},
{
    question : "What does the setTimeout function do?",
    answers: [
        
        { text: "Pauses the execution of a function for a specified number of milliseconds",correct: false},
        { text: " Calls a function repeatedly at a fixed time interval",correct: false},
        { text: " Sets a timer which executes a function or specified piece of code once after a specified time interval",correct: true},
                { text: " Clears the delay set by `setTimeout`",correct: false},
    ]  
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next",
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
       if(answer.correct){
        button.dataset.correct = answer.correct;
       }
        button.addEventListener("click" , selectAnswer);
        });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
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
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";

}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",  ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
  }else{
    startQuiz();
  }
});




startQuiz();