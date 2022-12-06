var todoList = document.querySelector("#todo-list");
var startBtn= document.querySelector(".startbtn");
var timer= document.querySelector(".timer");
var hsscore = document.getElementById("highscore");
var header = document.querySelector("header");
var instructions= document.querySelector(".instructions");
var points=document.querySelector(".points");
var timer= document.querySelector(".timer");
var questionTitle= document.querySelector(".ques");
var logScore= document.querySelector(".saveScore");
var quizsec =document.querySelector("#quizsec")
var userName=document.querySelector("#name");
var userScore =document.querySelector("#userScore");
var submitScore= document.querySelector("#submit");
var displayHS= document.querySelector("#displayHS");
var playerScore = document.querySelector("#playerScore")
var hsList=document.querySelector("#hsList");
var counter = 60;
var points=0;
var questionIndex=0
var questionCount=0


var quiz=[{
    question: "What is the capital of Los Angeles?",
    correctanswer: "Los Angeles doesn't have a captial.",
    options:["Sacramento", "Long Beach", "San Diego", "Los Angeles doesn't have a captial."]
    },
    {
    question: "How many states does the United States have?",
    correctanswer: "50",
    options: ["40", "13", "50", "3"]
    },
    {
    question: "What is the lifespan of killer whales?",
    correctanswer: "10-45 years",
    options: ["20-30 years", "5-10 years", "30-60 years", "10-45 years"]
    },
    {
    question: "How tall is Mount Everest?",
    correctanswer: "29,032 ft.",
    options: ["29,032 ft.", "28,032 ft.", "25,032 ft.", "30,032 ft."]
    },
    {
    question: "Which country invented the Hamburger?",
    correctanswer: "Germany",
    options: ["Austria", "Germany", "Sweden", "Canada"]
    },
    {
    question: "Which is the only planet to spin clockwise?",
    correctanswer: "Venus",
    options: ["Venus", "Mars", "Jupiter", "They all spin clockwise"]
    },
    {
    question: "Which letter is not found in any of the states in the U.S.?",
    correctanswer: "Q",
    options: ["F", "Z", "Q", "X"]
    },
    {
    question: "How part of the body cannot heal itelf?",
    correctanswer: "Teeth",
    options: ["Liver", "Pancreas", "Skin", "Teeth"]
    }
]


// sets countdown timer to 60 seconds 
function startCountdown () {
    
    const interval = setInterval(() => {
        counter--;

        if ((counter < 0) || (questionCount>=8)) {
        clearInterval(interval);
        timer.textContent=("TIMES UP!");
        endOfGame();
        } else{
            timer.textContent="Timer: "+ counter};
    }, 1000);

    };


// starts countdown timer on Start click
startBtn.addEventListener('click', function(event){
    event.preventDefault();
    playerScore.style.display= "flex"
    instructions.style.display = "none";
    startCountdown();
    startQuestion();
    playerScore.innerHTML='Score: <span class="points">0 </span>';

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




var wrongOrRight= document.getElementById("quizsec");
todoList.addEventListener('click', function(event){
    questionCount++;
    if (event.target.matches("li")){
        if (event.target.textContent===quiz[questionIndex].correctanswer){
            var rOw = document.createElement("h3");
            rOw.textContent="Correct!";
            wrongOrRight.appendChild(rOw);
            points++;
            playerScore.textContent="Score: " + points;
            setTimeout(() => { rendernextQuestion(); rOw.textContent=""; }, 1000);
        }else{
            var rOw = document.createElement("h3");
            rOw.textContent="Wrong!";
            wrongOrRight.appendChild(rOw);
            counter= counter-4;
            setTimeout(() => { rendernextQuestion(); rOw.textContent="";}, 1000);
            
        }
        
    }
});

endOfGame = function(){
    quizsec.style.display ="none";
    todoList.style.display = "none";
    logScore.style.display = "block";
    userScore.value=points;
};



var highScoreinfo = JSON.parse(localStorage.getItem("UsersInfo"))||[];
submitScore.addEventListener("click", function(){
   var newUserInfo={
    name: userName.value,
    score: userScore.value
    }

    highScoreinfo.push(newUserInfo)
    localStorage.setItem("UsersInfo", JSON.stringify(highScoreinfo));
    var heading =document.createElement("h2");
    heading.textContent= "Score submitted";
    displayHS.append(heading);

    var hslist=document.createElement("li");
    hslist.textContent= (newUserInfo.name+ "-"+ newUserInfo.score);
    hsList.appendChild(hslist);
    allscores=[]
    allUsers=[]
    var lengthlist=(highScoreinfo.length)
    for (let i = 0; i < lengthlist; i++) {
        allscores.push(highScoreinfo[i].score)
        allUsers.push(highScoreinfo[i].name)
    
        





        
       
        // console.log(highScoreinfo[i].score);
        // console.log(highScoreinfo[i].name);
        // console.log(userScore.value);
        // console.log(userName.value);
        // // var hsName=(highScoreinfo[i].name);
        // // var hsScore=(highScoreinfo[i].score);
        // console.log(highScoreinfo[(highScoreinfo.length-2)].score)
        // console.log(highScoreinfo[(highScoreinfo.length-2)].name)
        // console.log(newUserInfo.score)
        // console.log(newUserInfo.name)

        // if (newUserInfo.score > (highScoreinfo[(highScoreinfo.length-2)].score)){
        //     console.log("new hs");
        //     hsscore.textContent="High Score by " + userName.value + " - " + userScore.value + " points"
        
        // }else{
        //     console.log("didnt beat highscore")
        // }

        // hsscore.textContent="High Score by: " + hsName + " - " + hsScore + " points";
        
        // if (userScore.value <= highScoreinfo[i].score)

    }
var max = allscores.reduce((a, b) => Math.max(a, b), -Infinity);
console.log(allUsers)
console.log(allscores)
console.log(max)

});

// highScoreIndex=0

timer.textContent="Timer: "+ counter;

    
    // for (let i = 0; i < usersarr.length; i++) {
    //     console.log(highScoreinfo);
    //     var storedScore= document.createElement("h3");
    //     storedScore.textContent= highScoreinfo.score;
    //     displayHS.append(storedScore);
    //     var storedName=document.createElement("h3");
    //     storedName.textContent= highScoreinfo.name;
    //     displayHS.append(storedName);
    // }
    