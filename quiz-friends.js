var readlineSync = require('readline-sync');

var userName = readlineSync.question('Welcome to the quiz, Whats your name?? \n')

var score=0

var highscore ={name: "dev",score: "70" }

console.log("\nHELLO " + userName.toUpperCase() +" WELCOME TO THE FRIENDS QUIZ ")
console.log("YOU WILL GET +10 FOR CORRECT AND -5 FOR WRING ANSWER\n")

function play(question,option,answer){
  var userAnswer = readlineSync.question(question + "\n ANSWER: ")
  if(userAnswer.toUpperCase()==answer.toUpperCase()||userAnswer.toUpperCase()==option.toUpperCase()){
    console.log("CORRECT")
    score= score +10
  }
  else{
    console.log("WRONG")
    score = score -5
  }
  console.log("---------------------------")
  console.log("YOUR CURRENT SCORE IS " + score)
  console.log("---------------------------")
}

var questions=[
  {
    question: `1. HOW MANY TIMES IS ROSS MARRIED??
                A) 1
                B) 3
                C) 4
                D) 2`, 
    answer: "3" ,
    answerletter: "B",
    },
   {question: `2. HOW MANY SISTER DOES JOEY HAVE??
                A) 4
                B) 6
                C) 7
                D) 8`, 
    answer: "7", 
    answerletter:"C"},
    {question: `3. WHAT IS PHOEBE'S SISTERS NAME ??
                A) URSELLA
                B) MONICA
                C) MIKE
                D) DAVE`, 
    answer: "URSELLA" ,
    answerletter:"A"},
    {question: `4. WHAT IS RACHEL SCARED OF??
                A) DOG
                B) CAT
                C) SWING
                D) SPIDERS`,
    answer: "SWING" ,
    answerletter:"C"},
    {question: `5. WHICH MILLIONARE DID MONICA DATE??
                A) MIKE
                B) DAVE
                C) MICHEAL
                D) PETE`,
    answer: "PETE" ,
    answerletter:"D"},
    {question: `6. NAME OF ROSS FIRST WIFE??
                A) EMILY
                B) RACHEL
                C) CAROL
                D) SUSAN` ,
    answer: "CAROL" ,
    answerletter:"C"},
    {question: `7. WHICH SOAP OPERAN IS JOEY DRAKE RAMORAY??
                A) DAYS OF OUR LIVES
                B) ALL MY LIFE
                C) GENERAL HOSPITAL
                D) THE BOLD AND THE BEAUTIFUL`, 
    answer: "DAYS OF OUR LIVES" ,
    answerletter:"A"},
    {question: `8. HOW MANY CATAGORIES OF TOWEL DOES MONICA HAVE??
                A) 10
                B) 11
                C) 7
                D) 4` ,
    answer: "11" ,
    answerletter:"B"},
   {question: `9. WHAT WAS THE COLOUR OF THE COUCH IN CENTRAL PERK??
                A) RED
                B) GREEN
                C) PINK
                D) ORANGE` ,
    answer: "ORANGE" ,
    answerletter:"D"},
    {question: `10. GUNTHER HAD A CRUSH ON??
                A) ROSS
                B) RACHEL
                C) MONICA
                D) PHOEBE` ,
    answer: "RACHEL" ,
    answerletter:"B"},
 ]

 for(var i=0;i<questions.length;i++){
   play(questions[i].question,questions[i].answerletter,questions[i].answer)
 }

if(highscore.score<score){
  console.log("YOU HAVE BEATEN THE HIGH SCORE")
  console.log("****************************")
  console.log("YOUR HIGH SCORE IS "+score)
  console.log("****************************")
}
else{
  console.log("****************************")
  console.log("YOUR TOTAL SCORE IS "+ score)
  console.log("****************************")
}

