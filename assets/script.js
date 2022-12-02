var display = document.getElementById("section");
var todoList = document.querySelector("#todo-list");
var startBtn= document.querySelector(".startbtn")
var question
var correctanswer
var options

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
    // {
    // question: "What is the lifespan of killer whales?",
    // answer: "10-45 years",
    // },
    // {
    // question: "How tall is Mount Everest",
    // answer: "29,032 ft.",
    // },
    // {
    // question: "Which country invented the Hamburger",
    // answer: "Germany",
    // }
]

function startCountdown (seconds) {
    let counter = seconds;
    var timer= document.querySelector(".timer")

    const interval = setInterval(() => {
        counter--;

        if (counter < 0 ) {
        clearInterval(interval);
        timer.textContent=("TIMES UP!");
        } else{
            timer.textContent="Timer: "+ counter};
    }, 1000);

    };

var timer= document.querySelector(".timer")

// starts countdown timer on Start click
startBtn.addEventListener('click', function(event){
    event.preventDefault();
    startCountdown(60);
   

})



document.querySelector(".ques").textContent= quiz[1].question;


var option_length =4

for (let i = 0; i < 1; i++) {
    var op = quiz[i].options;
};

for (var i = 0; i < option_length; i++) {
    var li = document.createElement("li");
    li.textContent=op[i];
    todoList.appendChild(li);
    }


// sets timer to 60 seconds 
var timer= document.querySelector(".timer")
function startCountdown (seconds) {
    let counter = seconds;
    var timer= document.querySelector(".timer")

    const interval = setInterval(() => {
        counter--;

        if (counter < 0 ) {
        clearInterval(interval);
        timer.textContent=("TIMES UP!");
        } else{
            timer.textContent="Timer: "+ counter};
    }, 1000);

    };