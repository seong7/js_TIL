/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
    a) question itself
    b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
    c) correct answer (I would use a number for this)
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).
7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

// closure 사용하기 !

var contents = document.querySelectorAll('.content');
var mainBtns = document.querySelectorAll('.mainBtn');
var quizzes = [];
var activeBtn;
var storage = window.localStorage;

init();

function Question(question, answers, correctAnswer){  // describe a question ( function constructor )
    this.quizNum = quizzes.length+1;
    this.question = question,
    this.answers = answers,
    this.correctAnswer = correctAnswer;
};
var questions = [];
Question.prototype.showQuiz = function(){
    setTextContext('#quizNumShow', ' '+this.quizNum);
    setTextContext('#questionShow', ''+this.question);
    setTextContext('#answer1Show', this.answers[0]);
    setTextContext('#answer2Show', this.answers[1]);
}
Question.prototype.checkTheAnswer = function(number){
    
}

// closure 사용
function getARandomQuiz(){
    var quizNum = Math.floor(Math.random()*quizzes.length)+1;
    return function(){
        if(!document.querySelector('#btn-2').classList.contains('activeBtn') && quizzes.length != 0){
            quizzes[quizNum-1].showQuiz();
        }
    }
}

function createQuiz(){
    var question = getValue('#question');
    var answers = [];
    answers.push(getValue('#answer-1'));
    answers.push(getValue('#answer-2'));
    var correctAnswer = getValue('#correctAnswer');
    var quiz = new Question(question, answers, correctAnswer);

    quizzes.push(quiz);
    var jsonString = JSON.stringify(quiz);

   
    let storageSize = storage.length;

    storage.setItem(storageSize+1, jsonString);
    // storage.getItem();


    clearNewQuiz();
    toggleDisplayNone(document.querySelector('#con-1'));
    toggleActiveBtn(document.querySelector('#btn-1'));
};

function checkPattern(userAnswer){
    return /[1|2]/.exec(userAnswer);
}

function openPrompt(){
    var userAnswer = prompt('정답을 입력하세요', '');
    
    if(!checkPattern(userAnswer)){
        alert('숫자 1 또는 2 를 입력하세요.')
    }else{
        
    }
}

function clearNewQuiz(){
    setValue('#question', '');
    setValue('#answer-1', '');
    setValue('#answer-2', '');
    setValue('#correctAnswer', '');
};

function getValue(selector){
    return document.querySelector(selector).value;
};

function setValue(selector, value){
    document.querySelector(selector).value = value;
};

function setTextContext(selector, value){
    document.querySelector(selector).textContent = value;
    document.querySelector(selector).style.color = '#555555';

}

function setDisplayNone(el){
    el.classList.add('displayNone');
};

function toggleDisplayNone(el){
    el.classList.toggle('displayNone');
};

function toggleActiveBtn(el){
    el.classList.toggle('activeBtn');
}


function init(){

   contents.forEach(el => setDisplayNone(el));
   mainBtns.forEach(el => el.addEventListener('click', function(){
        toggleActiveBtn(el);
        if(el.id === 'btn-1'){
            activeBtn = 1;
        }else if(el.id === 'btn-2'){
            activeBtn = 2;
        }else{
            activeBtn = 3;
        }
        toggleDisplayNone(document.querySelector('#con-'+activeBtn));
   }));
};
