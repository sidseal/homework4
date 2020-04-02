//Variables//
var $highScore = document.getElementById('Highscores');
var $timer = document.getElementById('Timer');
var $question = document.getElementById('Question');
var $answer = document.getElementById('Answer');
var $startbtn = document.getElementById('Start');

let intervalRef;
$startbtn.addEventListener('click', function(event){
    event.preventDefault()
    displayQuestion()
    //displayTime()
    intervalRef=setInterval(displayTime,1000)
})



var questions= [
    {
    question: "billy?",
    answers: ["al","bob"],
    rightAnswer: "al"
    },
    {
    question: "jan?",
    answers: ["a","b"],
    rightAnswer: "a"
    },
    {
    question: "gibralter?",
    answers: ["a","b"],
    rightAnswer: "a"
    },
    {
    question: "nonsense?",
    answers: ["a","b"],
    rightAnswer: "a"
    },
    {
    question: "lorem?",
    answers: ["a","b"],
    rightAnswer: "a"
    },
    ]

var questionNow=0 //refer to this in displayQuestion()
var time = 75

function displayQuestion(){
let questionObject = questions[questionNow]
$question.innerText = questionObject.question
html=""
questionObject.answers.forEach(function(answer,index) { 
    html +=  `<p class='clickable' data-index=${index}>${answer}</p>` //template literal
})
$answer.innerHTML = html
}

$(document).on('click', ".clickable", function(){
    const userChoice=this.innerText
    const rightAnswer= questions[questionNow].rightAnswer
    if(userChoice===rightAnswer){
        //answer was right

    }else{
        //answer was wrong
        time -= 15
    }
    //happens no matter right or wrong
    //displayTime()
    questionNow++
    displayQuestion()
})


function displayTime(){
    if(time<=0){
        clearInterval(intervalRef)
        console.log("GAME OVER")
    }
    $timer.innerText=time
    time-=1
}
//gameOver()