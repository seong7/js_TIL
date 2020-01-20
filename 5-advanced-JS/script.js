/*
//  Prototype

모든 JS 객체는 prototype property 를 가지고 있다. 

prototype property 내에 다른 객체들이 상속받을 수 있는 method 와 property 를 정의할 수 있다.
    - inheritance (상속) 는 해당 객체의 상위 객체 또는 constructor 의 prototype 에 접근할 수 있음을 의미함
    - 즉, prototype 의 method 와 property 는 하위 객체에 실제로 작성되는 것이 아니라 하위 객체가 접근하여 호출할 수 있는 것임  

Constructor (다른 언어의 class) 의 prototype property 는 해당 Constructor 의 instance 들 (생성된 객체) 의 prototype가 된다.
    - Constructor 자체의 prototype 이 아닌 점 주의 !

method 가 호출되면 해당 method를 찾기 위해 method 의 객체에서부터 search 가 시작되어 객체의 prototype으로 올라간다. 
    - 이 것이 prototype chain 
    - 최상위 객체인 Object 객체에서도 해당 method를 찾지 못하면 return undefined
*/



// 객체 (instance / object) 를 생성하는 두가지 방법을 통해 Prototype 에 대해 알아봄 : 

/*** Function constructor 으로 객체를 생성하는 방법 ***/
    
    // function constructor 의 variable naming 은 첫 글자 대문자로
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function(){     // prototype 에 작성됨 : 55 line
    //     console.log(2020 - this.yearOfBirth)
    // }
    
    //return 'ss';         -- function constructor 도 return 값을 가질 수 있다.
    //console.log(this);   -- 이 또한 method 가 아니므로 this 는 Window object 가리킴  (method 내의 this 만 해당 객체를 가리킨다.)
    //return this;              -- 위와 동일 (this --> Window object)
}

    // constructor "Person" 이용해 john 객체 생성
var john = new Person('John', 1990, 'teacher');
// _ instantiation 이라고 불림 (Person constructor 의 instance를 생성하는 것이므로)

//john.calculateAge();  //_ 30 출력

//  객체 생성 process
    // "new" operator 가 먼저 빈 객체를 생성한다.
    // => function constructor 의 this 는 Window 가 아닌 해당 빈 객체를 가리키게 된다.
    // => 빈 객체에 지정된 대로 property 를 set 한다.




/*** Prototype Property of Function constructor "Person" ***/
/*** Function 컨스트럭터 "Person" 의 Prototype 프로퍼티 ***/

Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth)
};

Person.prototype.lastName = 'Smith';

// 객체 더 생성
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();
                                // calculateAge() 와 lastName 은 john, jane, mark 객체의 prototype 에 있음
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


console.log(john.__proto__ === Person.prototype); // __true 출력
                                    // __proto__ : prototype
                                    // .prototype : prototype property
                                    // === : type coercion X

// john 객체의 prototype 에 있는 내장 function 들 사용하기 (Object 의 prototype property 에 자동 선언됨)
console.log(john.hasOwnProperty('job')); // __ true
console.log(john.hasOwnProperty('lastName')); // __ false  ( 직접 가지고 있지 않음 __proto__ 에 있음)
console.log(john instanceof Person); // __ true
console.log(john instanceof Object); // __ true


                    // *** 중요 ***
var x = [2, 4, 6];  // x 는 Array constructor 의 instance 임
                    // 즉, Array constructor 의 prototype property 에 있는
                    // push, pop 등의 function 을 prototype 에 가지고 있음 (접근할 수 있음)
console.info(x);    // browser console 에서 확인가능 






/***  Object.create()  ****/
//    : 매개변수로 prototype 을 넣어 객체를 생성해주는 방법
//    : 객체의 property 는 객체 생성 시 직접 선언해주어야함

var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
};

var jack  = Object.create(personProto);  // personProto 객체를 prototype 으로 받음 
jack.name = 'Jack';                     // property 는 직접 선언해야함
jack.yearOfBirth = 1990;
jack.job = 'teacher';


var maria = Object.create(personProto, {  // prototype 받고 property 는 직접 선언
    name: {value: 'Maria'},                 // property 는 객체형태로 선언되어야함.
    yearOfBirth: {value: 1969},
    job: {value: 'designer' }
});


////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////



/***  Primitives  vs  Objects  ***/

/*
    기본적으로 string, number, boolean, undefined, null 이 primitives 임
 
    둘의 가장 큰 차이점 :

    primitives : 변수가 해당 data 의 값을 직접 가지고 있음
    object : 변수가 해당 object 를 가리키고 있을 뿐 가지고 있지는 않음
 */



/* 1. primitives */
// 변수 a, b 는 각각의 primitive data 를 가지고 있다.
var a = 23;
var b = a;    // 현재 a 의 값을 복사하여 b 에 assign
a = 46; //(mutate)
console.log(a);  //__ 46 출력
console.log(b);  //__ 23 출력


/* 2. objects */
// 변수가 달라도 하나의 객체를 공유할 수 있음
var obj1 = {
    name : 'John',
    age : 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);  //__ 30 출력
console.log(obj2.age);  //__ 30 출력



/* 3. function */
// function 에 primitive data 를 가진 변수 'age'를 넣으면 age 의 값인 27이 들어가지 변수 age가 들어가는 것이 아님
//             object 를 가리키는 변수 'obj' 는 해당 function 에서도 여전히 해당 객체를 가리키므로 변화를 줌
var age = 27;
var obj = {
    name : 'Jonas',
    city : 'Lisbon'
};

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);        // __ 27 출력 : 변하지 않음 
console.log(obj.city);   // __ San Francisco 출력 : 변함



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////



/***  FUNCTION  ***/

/*
    1. function 은 Object type 의 instance 이다.

    2. function 은 object 와 마찬가지로 작동한다.

    3. variable 에 function 을 저장할 수 있다.

    4. function 의 매개변수로 다른 function 을 넣을 수 있다.

    5. function 에서 function 을 return 할 수 있다.


    ==> js 에서는 "FIRST-CLASS FUNCTION" 이 존재한다고 본다. 
*/


// function 을 매개변수로 보내기
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRed = [];
    for(var i=0; i<arr.length; i++ ){
        arrRed.push(fn(arr[i]));    // 매개변수인 'fn' function 을 이용 
    }
    return arrRed;
}

function calculateAge2(el){  //el  :  element
    return 2020 - el;
}

var ages = arrayCalc(years, calculateAge2);
// callback function 으로 입력 _ () 가 없는 호출  // arrayCalc 에서는 () 사용됨
// : function 을 호출하는 것이 아니고 매개 변수로 삽입하는 것이므로.
console.log(ages);  // __ 나이가 계산된 arrRed 가 출력됨


/* 위에서 값이 변한 ages 를 다시 arrayCalc() 에 매개변수로 사용할 수 있음 */

// full age (성인) 인지 확인하는 function
function isFullAge(el){
    return el >= 18; // return boolean   
}
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);


// 최대 HeartRate return 하는 function
function maxHeartRate(el){

    if(el >= 18 && el < 81){
        return Math.round(206.9 - (0.67 * el));
    } else{
        return -1;
    }
}
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

///////////////////////////////////////////

// function 을 return 하는 function
    // 익명 function 을 return 하여 해당 function 이 동일한 변수명을 가진채로 대체됨

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){  // anonymous function 
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }   else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

/* return 된 function 을 변수에 저장하는 경우 */

var designerQuestion = interviewQuestion('designer');
var teacherQuestion = interviewQuestion('teacher');
// ==> teacherQuestion 은 위에서 선언한 익명 function 으로 전환됨
teacherQuestion('John'); // 호출
designerQuestion('John');
designerQuestion('Mark'); // 변수에 저장하면 여러번 호출 가능
designerQuestion('Jane');

/* return 된 function 을 변수에 저장하지 않고 바로 사용 */
interviewQuestion('teacher')('Seongjin');



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////




/***  IIFE  ***/

/***  [이피] (Immegiately Invoked Function Expression) ***/
/***  선언과 동시에 호출되는 function expression (한번만 호출 가능) ***/
/** data privacy 목적으로 사용 **/

//** 일반적인 방식
// function game(){
//     var score = Math.random() * 10;  // 0과 1 사이의 소수에 10을 곱하여 랜덤한 integer 로 만듬
//     console.log(score >= 5);
// }
// game();

//**  IIFE 방식
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}) ();

//console.log(score);  __ error (scope가 다름)



(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}) (5);  //_ parameter  gooLuck 을 넣는 방법

/*
    외부 scope 에서 접근할 수 없는 scope 이므로 data privacy 확보
    그리고, global execution context 의 다른 변수들을 방해하지 않음 (안전함)
    한번만 호출가능함  
    (challenge 에서 실제 사용 예시 _필요성_ 다룸)
 */

 

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


/******************/
/***  Closures  ***/
/*** (매우 중요) ***/

/*
*   inner function 은 항상 outer function 에 선언된 
*   variable과 parameter에 접근 가능하다.
*   심지어, outer function 이 return을 한 후에도 가능하다
*   즉, outer function 의 execution context 가 excution stack에서 pop off 된 후에도
*   접근 가능하다
*
*
*   <*** 중요 **>
*   이유 : VO(Variable Object) 는 각 Function 의 EC (Execution context) 가
*   pop off 된 후에도 intact(온전) 하게 유지된다.
*   
*     ==>
*   
*   outer function 의 EC 가 pop off 된 후에도 VO 는 여전히 유지되므로
*   그 다음 생성된 inner function 의 EC 는 scope 에 해당 VO 를 포함시킨다.
*    --> 접근 가능
*/

function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

// 비교적 포괄적인 (generic) 기능의 retirement function 을 "closure" 를 사용해
// 더 specific 한 function 으로 사용할 수 있게됨 

var retirementUS = retirement(66);  // __ 위에 선언한 익명 function 의 retirementAge 의 값이 정해진 채로 function return 됨
retirementUS(1992); // __ return 된 익명클래스에 yearOfBirth 를 대입
retirement(66)(1992); //__ 이와 같은 방법으로도 사용 가능

var retirementGermany = retirement(65);
var retirementKorea = retirement(60);
retirementGermany(1992);  //__ 출력문 : "37 years left until retirement."
retirementKorea(1992);   //__ 출력문 : "32 years left until retirement."



// 'closure' challenge
// interviewQuestion function => closure 이용하여 재구성하기
        // 핵심은 outer function 의 VO 를 inner function 에서 접근하는 것 !
        // job 변수에 접근할 수 있으므로 바로 return 익명 function 안에 결과 도출 코드 작성 가능
function closureInterviewQuestion(job){
    return function(name){
        if(job === 'designer'){
            console.log(name + ', can you please explain what UX design is?');
        }else if(job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        }else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}
closureInterviewQuestion('teacher')('John');

// closure 사용 전 원래 function :
    // job 변수의 케이스마다 function 각각 선언했음

// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){  // anonymous function 
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if(job === 'teacher'){
//         return function(name){
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     }   else{
//         return function(name){
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////


/***  Bind, Call and Apply  이용해 method borrowing ***/

var jason = {
    name : 'Jason',
    age : 29,
    job : 'teacher',
    presentation : function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', ' +
            'ladies and gentlemen! I\'m ' + this.name + '. ' + 
            'I\'m a ' + this.job + '. ' + 
            'I\'m ' + this.age + ' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? ' + 
            'I\'m ' + this.name + '. ' + 
            'I\'m a ' + this.job + 
            ' and I\'m ' + this.age + ' years old. ' + 
            'Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name : 'Emily',
    age : 35,
    job : 'designer'
};

jason.presentation('formal', 'morning');


/*  call , apply 이용해 method borrowing */
jason.presentation.call(emily, 'friendly', 'afternoon');
        // 매개변수 : (this 값 , 매개변수 list)
jason.presentation.apply(emily, ['formal', 'afternoon']); 
        // 매개변수 : (this 값 , 매개변수 array)

// Test 
//var bindingTest = function(timeOfDay){
//     jason.presentation.bind(emily, 'friendly')
// }


/* bind 이용해 method 의 parameter 중 일부를 preset 해주기  */
var jasonFriendly = jason.presentation.bind(jason, 'friendly');
                            // 매개변수 : (this 값 , 매개변수 list)
jasonFriendly('evening'); // 남은 매개변수 넣어주기
jasonFriendly('dinner');

var emilyFormal = jason.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


/*  예시  */
var years2 = [1990, 1965, 1937, 2005, 1998];

function arrayCalc2(arr, fn){
    var arrRed = [];
    for(var i=0; i<arr.length; i++ ){
        arrRed.push(fn(arr[i]));  // 매개변수 하나만 받음
    }
    return arrRed;
}
function calculateAge3(el){  //el  :  element
    return 2020 - el;
}

// arrayCalc2 에 매개변수로 보내려면 매개변수 한개를 preset 해야함
function isFullAge2(limit, el){
    return el >= limit;
}

var ages2 = arrayCalc2(years, calculateAge3); // calculateAge3 : call back function 
var fullKorea = arrayCalc2(ages2, isFullAge2.bind(this, 19));  // method 아니므로 this 는 그냥 써줌 (안 중요)
// function isFullAge2 의 먼저 순서인 parameter 'limit' 을 19 로 preset
// arrayCalc2 에서 나머지 parameter 'el' 에 값이 들어감

console.log(ages2);
console.log(fullKorea);