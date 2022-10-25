let quizQuestionsElement = document.querySelector(".quiz-questions");
let startButton = document.querySelector(".start-quiz");
let quizTime = document.getElementById("time");

const quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "curly brackets"
    }
]

quizQuestionsElement.innerHTML = ""

for (let i = 0; i < quizQuestions.length; i++) {
    console.log(quizQuestions[i]);

    

    quizQuestionsElement.innerHTML +=  ` 
    <h2>${quizQuestions[i].question}</h2>
    <ol>
        <li>${quizQuestions[i].options[0]}</li>
        <li>${quizQuestions[i].options[1]}</li>
        <li>${quizQuestions[i].options[2]}</li>
        <li>${quizQuestions[i].options[3]}</li>
    </ol>
    <span id="guess"></span>`;
}
let count = 6;
startButton.addEventListener("click", function(event){

    var interval = setInterval(function(){
       quizTime.innerHTML = count;
        count--;
        if (count === 0){
            quizTime.innerHTML = count;
          clearInterval(interval);
        }
      }, 1000);
    
})