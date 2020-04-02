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
    question: "What does HTML stand for?",
    answers: ["Home Tool Makeup Language","Hyper Text Markup Language","Human Test Madeup Language"],
    rightAnswer: "Hyper Text Markup Language"
    },
    {
    question: "Which HTML attribute specifies an alternate text for your image, if the image cannot be displayed?",
    answers: ["image","img","src","alt"],
    rightAnswer: "alt"
    },
    {
    question: "Which character is used to indicate an end tag?",
    answers: ["^",".","/",")"],
    rightAnswer: "/"
    },
    {
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets","Concise Style Spread","Constant Style Surface"],
    rightAnswer: "Cascading Style Sheets"
    },
    {
    question: "Which HTML attribute is used to define inline styles?",
    answers: ["font","class","sheets","style"],
    rightAnswer: "style"
    },
    {
    question: "What is the default value of the position property?",
    answers: ["Fixed","Relative","Static","Absolute"],
    rightAnswer: "Static"
    }, 
    {
    question: "The external Javascript file must contain the script tag",
    answers: ["True","False"],
    rightAnswer: "False"
    },
    {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onmouseclick","onclick","onchange","onmouse"],
    rightAnswer: "onclick"
    },
    {
    question: "How do you declare a Javascript variable?",
    answers: ["variable carName","var carName","v newVariable"],
    rightAnswer: "var carName"
    },
    {
    question: "Is Javascript case-sensitive?",
    answers: ["Yes","No"],
    rightAnswer: "Yes"
    },
    ]

var questionNow=0 //refer to this in displayQuestion()
var time = 150

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