var display = document.querySelector("section");
var todoList = document.querySelector("#todo-list");
var startBtn= document.querySelector(".startbtn");
var timer= document.querySelector(".timer");
var score = document.getElementById("highscore");
var header = document.querySelector("header");
var instructions= document.querySelector(".instructions");
var points=document.querySelector(".points");
var timer= document.querySelector(".timer");
var questionTitle= document.querySelector(".ques");
var counter = 60;
var points=0;
var questionIndex=0

var quiz=[{
    question: "What is the capital of Los Angeles?",
    correctanswer: "Los Angeles doesn't have a captial.",
    options:["Sacramento", "Long Beach", "San Diego", "Los Angeles doesn't have a captial."]
    },
    {
    question: "How many states does the United States have?",
    correctanswer: "50",
    options: ["40", "13", "50", "3"]
    }
    {
    question: "What is the lifespan of killer whales?",
    answer: "10-45 years",
    options: ["40", "13", "50", "3"]
    },
    {
    question: "How tall is Mount Everest",
    answer: "29,032 ft.",
    options: ["40", "13", "50", "3"]
    },
    {
    question: "Which country invented the Hamburger",
    answer: "Germany",
    options: ["40", "13", "50", "3"]
    }
]

// sets countdown timer to 60 seconds 
function startCountdown () {
    const interval = setInterval(() => {
        counter--;

        if (counter < 0 ) {
        clearInterval(interval);
        timer.textContent=("TIMES UP!");
        } else{
            timer.textContent="Timer: "+ counter};
    }, 1000);

    };

// starts countdown timer on Start click
startBtn.addEventListener('click', function(event){
    event.preventDefault();
    instructions.style.display = "none";
    startCountdown();
    startQuestion();
    score.innerHTML='Score: <span class="points">0 </span>';
});

startQuestion= function() {
questionTitle.textContent= quiz[questionIndex].question;
var option_length =4
var op = quiz[0].options;
for (var i = 0; i < option_length; i++) {
    var li = document.createElement("li");
    li.textContent=op[i];
    todoList.appendChild(li);
    }
};

rendernextQuestion= function(){
questionIndex++;
questionTitle.textContent='';
questionTitle.textContent= quiz[questionIndex].question;
var option_length =4
var op = quiz[questionIndex].options;
todoList.textContent='';
for (var i = 0; i < option_length; i++) {
    var li = document.createElement("li");
    li.textContent=op[i];
    todoList.appendChild(li);
    }
};

// let li= document.getElementById("<li>")
// li.addEventListener('click', function(event){
//     event.preventDefault();
    
// });
// score.textContent('h2>Score: <span class="win">0 </span> </h2>');

    // if (quiz[0].correctanswer==quiz[0].options)

// init()
// highscore if there is  if not set to 0
// instructions on page and start button

// when start clicked
// timer starts counting down from 60
// questions appear on screen with correct answer options.

// if (correctanswer){
//     change background color of LI to Green for 3 seconds
//     add 1 points to score
//     move to next question
// else if (!correctanswer)
//     change background to red for 3 seconds
//     take away 5 seconds from timer.
//     move on to next question

// if all questions are asked || or time is 0:
//     form to put inital and save score.
//     if highscore add to highscore h2.
//     else store in local stoarage
// reset game
// }

var wrongOrRight= document.getElementById("quizsec");
todoList.addEventListener('click', function(event){
    if (event.target.matches("li")){
        if (event.target.textContent===quiz[questionIndex].correctanswer){
            var rOw = document.createElement("h3");
            rOw.textContent="Correct!";
            wrongOrRight.appendChild(rOw);
            points++;
            score.textContent="Score: " + points;
            setTimeout(() => { rendernextQuestion(); rOw.textContent=""; }, 3000);
        }else{
            var rOw = document.createElement("h3");
            rOw.textContent="Wrong!";
            wrongOrRight.appendChild(rOw);
            counter= counter-4;
            setTimeout(() => { rendernextQuestion(); rOw.textContent="";}, 3000);
            
        }
        
    }
});

