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
var backArrow = document.querySelector('#backArrow');
var forwardArrow = document.querySelector('#forwardArrow');
var quizzes = [];
var activeBtn;
var storage = window.localStorage;
var currentQuiz;

init();

function Question(question, answers, correctAnswer){  // describe a question ( function constructor )
    this.quizNum = quizzes.length+1;
    this.question = question,
    this.answers = answers,
    this.correctAnswer = correctAnswer;
};
var questions = [];
Question.prototype.showQuiz = function(){
    currentQuiz = this;
    setTextContext('.quizNumShow', ' '+this.quizNum);
    setTextContext('.questionShow', ''+this.question);
    setTextContext('.answer1Show', this.answers[0]);
    setTextContext('.answer2Show', this.answers[1]);
    setTextContext('.correctAnswerShow', this.correctAnswer);
}
Question.prototype.checkTheAnswer = function(userAnswer){
    if(this.correctAnswer === userAnswer){
        addGreenBtn(document.querySelector('#answerBtn'));
        removeRedBtn(document.querySelector('#answerBtn'));
        setAnswerBtn('green')();
        setValue('#answerBtn', '정답');
    }else{
        addRedBtn(document.querySelector('#answerBtn'));
        removeGreenBtn(document.querySelector('#answerBtn'));
        setAnswerBtn('red')();
        setValue('#answerBtn', '오답');
    }
}

// closure 사용
function getAQuiz(sequence){
    return function(quizNum){
        if(sequence === 'random'){
            resetRandomQuiz();
            if(!document.querySelector('#btn-2').classList.contains('activeBtn') && quizzes.length != 0){
                var randomNum = Math.floor(Math.random()*quizzes.length)+1;
                quizzes[randomNum-1].showQuiz();
            }
        }else if(sequence === 'inOrder'){
            if(quizzes.length != 0){
                quizzes[quizNum-1].showQuiz();
                checkArrows();
            }
        }
    }
}


var getARandomQuiz = getAQuiz('random');
var getTheNumOfQuiz = getAQuiz('inOrder');

function setAnswerBtn(flag){
    var answerBtn = document.querySelector('#answerBtn');
    return function(){
        if(flag === 'red'){
            answerBtn.onclick = openPrompt;
            answerBtn.style.cursor='pointer';
        }else if(flag === 'green'){
            answerBtn.onclick = '';
            answerBtn.style.cursor='default';
        }else if(flag === 'reset'){
            answerBtn.onclick = openPrompt;
            answerBtn.style.cursor='pointer';
        }
    }
}

function checkArrows(){
    /*
        양쪽 x : 길이 === 1
        왼쪽 x : 1번일때
        오른쪽 x : 마지막일때
    */
    if(quizzes.length === 1){
        addDisplayNone(forwardArrow);
        addDisplayNone(backArrow);
    }else if(currentQuiz.quizNum === quizzes.length){
        addDisplayNone(forwardArrow);
        removeDisplayNone(backArrow);
    }else if(currentQuiz.quizNum === 1){
        addDisplayNone(backArrow);
        removeDisplayNone(forwardArrow);
    }else{
        removeDisplayNone(forwardArrow);
        removeDisplayNone(backArrow);
    }
}

function nextQuiz(){
    getTheNumOfQuiz(currentQuiz.quizNum+1);
}

function previousQuiz(){
    getTheNumOfQuiz(currentQuiz.quizNum-1);
}


function createQuiz(){
    var question = getValue('#question');
    var answers = [];
    answers.push(getValue('#answer-1'));
    answers.push(getValue('#answer-2'));
    var correctAnswer = function(){
        if(checkAnswerPattern(getValue('#correctAnswer'))){
            return getValue('#correctAnswer');
        }else{
            return undefined;
        }
    }

    if(correctAnswer() != undefined){

        var quiz = new Question(question, answers, correctAnswer().trim());
        
        quizzes.push(quiz);
        // var jsonString = JSON.stringify(quiz);
        // let storageSize = storage.length;
        // storage.setItem(storageSize+1, jsonString);
        // storage.getItem();
        
        clearNewQuiz();
    }
};

function openPrompt(){
    var userAnswer = (prompt('정답을 입력하세요', ''));
    if(userAnswer){
        if(checkAnswerPattern(userAnswer)){
            currentQuiz.checkTheAnswer(userAnswer);
        }
    }
}


function checkAnswerPattern(answer){
    var regexPattern = new RegExp(/^\s*?[1|2]\s*?$/);
    if(regexPattern.exec(answer)){
        return true;
    }else{
        alert('정답은 숫자 1 또는 2 를 입력하세요.');
        return false;
    }
}

function resetRandomQuiz(){
    setTextContext('.quizNumShow', '');
    setTextContext('.questionShow', '');
    setTextContext('.answer1Show', '');
    setTextContext('.answer2Show', '');
    setValue('#answerBtn', '정답 입력');
    removeGreenBtn(document.querySelector('#answerBtn'));
    removeRedBtn(document.querySelector('#answerBtn'));
    setAnswerBtn('reset')();
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
    document.querySelectorAll(selector).forEach(function(el){
        el.value = value;
    });
};

function setTextContext(selector, value){
    document.querySelectorAll(selector).forEach(function(el){
        el.textContent = value;
        el.style.color = '#555555';
    });
}

function addDisplayNone(el){
    el.classList.add('displayNone');
};

function removeDisplayNone(el){
    el.classList.remove('displayNone');
}
function removeActiveBtn(el){
    el.classList.remove('activeBtn');
}

function toggleDisplayNone(el){
    el.classList.toggle('displayNone');
};

function toggleActiveBtn(el){
    el.classList.toggle('activeBtn');
}

function addGreenBtn(el){
    el.classList.add('greenBtn');
}

function removeGreenBtn(el){
    el.classList.remove('greenBtn');
}

function addRedBtn(el){
    el.classList.add('redBtn');
}

function removeRedBtn(el){
    el.classList.remove('redBtn');
}


function init(){

    removeRedBtn(document.querySelector('#answerBtn'));
    removeGreenBtn(document.querySelector('#answerBtn'));
    contents.forEach(el => addDisplayNone(el));
    mainBtns.forEach(el => el.addEventListener('click', function(){
        
        if((el.id ==='btn-2' || el.id === 'btn-3') && quizzes.length === 0 ){
            return;
        }

        toggleActiveBtn(el);
        if(el.id === 'btn-1'){
            activeBtn = 1;
        }else if(el.id === 'btn-2'){
            activeBtn = 2;
        }else{
            activeBtn = 3;
        }
        for(var i=1; i<4; i++){
            if(i===activeBtn){
                toggleDisplayNone(document.querySelector('#con-'+activeBtn));
            }else{
                addDisplayNone(document.querySelector('#con-'+i));
                removeActiveBtn(document.querySelector('#btn-'+i));
            }
        }
   }));

   forwardArrow.addEventListener('click', nextQuiz);
   backArrow.addEventListener('click', previousQuiz);
};