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


/*
--- Expert level ---
8. After you display the result, display the next random question, so that the game never ends
   (Hint: write a function for this and call it right after displaying the result)
9. Be careful: after Task 8, the game literally never ends.
   So include the option to quit the game if the user writes 'exit' instead of the answer. 
   In this case, DON'T call the function from task 8.


10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score 
   (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).
11. Display the score in the console. Use yet another method for this.
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
        addGreenBtn('#answerBtn');
        removeRedBtn('#answerBtn');
        removeDisplayNone('#optionBtnWrapper');
        setAnswerBtn('green')();
        setValue('#answerBtn', '정답');
    }else{
        addRedBtn('#answerBtn');
        removeGreenBtn('#answerBtn');
        addDisplayNone('#optionBtnWrapper');
        setAnswerBtn('red')();
        setValue('#answerBtn', '오답');
    }
}

// closure 사용
function getAQuiz(sequence){
    return function(quizNum){
        if(sequence === 'random'){
            resetRandomQuiz();
            if((!document.querySelector('#btn-2').classList.contains('activeBtn')
                || quizNum === 'nextQuiz')
                && quizzes.length != 0){
                console.log('33');
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
            answerBtn.style.cursor='pointer';
            answerBtn.disabled = false;
        }else if(flag === 'green'){
            answerBtn.style.cursor='default';
            answerBtn.disabled = true;
        }else if(flag === 'reset'){
            answerBtn.style.cursor='pointer';
            answerBtn.disabled = false;
        }
    }
}

var answerBtn = document.querySelector('#answerBtn');
var continueBtn = document.querySelector('#continueBtn');
var stopBtn = document.querySelector('#stopBtn');
(function(){
    answerBtn.addEventListener('click', openPrompt);
    continueBtn.addEventListener('click', function(){
        getARandomQuiz('nextQuiz');
    });
    stopBtn.addEventListener('click', function(){
        addDisplayNone('#optionBtnWrapper');
        addDisplayNone('#con-2');
        removeActiveBtn('#btn-2');
        resetRandomQuiz();
    });
})();

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
    removeGreenBtn('#answerBtn');
    removeRedBtn('#answerBtn');
    addDisplayNone('#optionBtnWrapper');
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

function addDisplayNone(selector){
    document.querySelector(selector).classList.add('displayNone');
};

function removeDisplayNone(selector){
    document.querySelector(selector).classList.remove('displayNone');
}
function removeActiveBtn(selector){
    document.querySelector(selector).classList.remove('activeBtn');
}

function toggleDisplayNone(selector){
    document.querySelector(selector).classList.toggle('displayNone');
};

function toggleActiveBtn(selector){
    document.querySelector(selector).classList.toggle('activeBtn');
}

function addGreenBtn(selector){
    document.querySelector(selector).classList.add('greenBtn');
}

function removeGreenBtn(selector){
    document.querySelector(selector).classList.remove('greenBtn');
}

function addRedBtn(selector){
    document.querySelector(selector).classList.add('redBtn');
}

function removeRedBtn(selector){
    document.querySelector(selector).classList.remove('redBtn');
}


function init(){

    removeRedBtn('#answerBtn');
    removeGreenBtn('#answerBtn');
    addDisplayNone('#optionBtnWrapper');
    contents.forEach(el => el.classList.add('displayNone'));
    mainBtns.forEach(el => el.addEventListener('click', function(){
        
        if((el.id ==='btn-2' || el.id === 'btn-3') && quizzes.length === 0 ){
            return;
        }

        el.classList.toggle('activeBtn');
        if(el.id === 'btn-1'){
            activeBtn = 1;
        }else if(el.id === 'btn-2'){
            activeBtn = 2;
        }else{
            activeBtn = 3;
        }
        for(var i=1; i<4; i++){
            if(i===activeBtn){
                toggleDisplayNone('#con-'+activeBtn);
            }else{
                addDisplayNone('#con-'+i);
                removeActiveBtn('#btn-'+i);
            }
        }
   }));

   forwardArrow.addEventListener('click', nextQuiz);
   backArrow.addEventListener('click', previousQuiz);
};