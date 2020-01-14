/*
//  Prototype

모든 JS 객체는 prototype property 를 가지고 있다. 

prototype property 내에 다른 객체들이 상속받을 수 있는 method 와 property 를 정의할 수 있다.
    - inheritance (상속) 는 해당 객체의 상위 객체 또는 constructor 의 prototype 에 접속할 수 있음을 의미함
    - 즉, prototype 의 method 와 property 는 하위 객체에 실제로 작성되는 것이 아니라 하위 객체가 접속하여 호출할 수 있음  

Constructor (다른 언어의 class) 의 prototype property 는 해당 Constructor 의 instance 들 (생성된 객체) 의 prototype가 된다.
    - Constructor 자체의 prototype 이 아닌 점 주의 !

method 가 호출되면 해당 객체에서 search 가 시작되어 객체의 prototype으로 올라간다. 
    - 이 것이 prototype chain 
    - 최상위 객체인 Object 객체에서도 해당 method를 찾지 못하면 return undefined
*/



// 객체 (instance / object) 를 생성하는 두가지 방법을 통해 Prototype 에 대해 알아봄 : 

/*** Function constructor ***/
    
    // function constructor 의 variable naming 은 첫 글자 대문자로
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function(){     // prototype 에 작성됨
    //     console.log(2020 - this.yearOfBirth)
    // }
    
    //return 'ss';         -- function constructor 도 return 값을 가져도 됨
    //console.log(this);   -- 이 또한 method 가 아니므로 this 는 Window object 가리킴 
    //return this;              -- 위와 동일
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
                                // calculateAge() 와 lastName 은 jane, mark 의
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


console.log(john.__proto__ === Person.prototype); // __true 출력
                                    // __proto__ : prototype
                                    // .prototype : prototype property

// john 객체의 prototype 에 있는 function 사용 (Object 의 prototype property 에 존재함)
console.log(john.hasOwnProperty('job')); // __ true
console.log(john.hasOwnProperty('lastName')); // __ false  ( 직접 가지고 있지 않음 )
console.log(john instanceof Person); // __ true
console.log(john instanceof Object); // __ true


var x = [2, 4, 6];  // x 는 Array constructor 의 instance 임
                    // 즉, Array constructor 의 prototype property 에 있는
                    // push, pop 등의 function 을 prototype 에 가지고 있음 (접근할 수 있음)
console.info(x);    // browser console 에서 확인가능 






/***  Object.create()  ****/
//    : 매개변수로 prototype 을 넣어 객체를 생성해주는 방법

var personProto = {
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
};

var jack  = Object.create(personProto);
jack.name = 'Jack';
jack.yearOfBirth = 1990;
jack.job = 'teacher';


var maria = Object.create(personProto, {
    name: {value: 'Maria'},
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

    primitives : 변수가 해당 data 를 가지고 있음
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
// : function 을 호출하는 것이 아니므로
console.log(ages);  // __ 나이가 계산된 arrRed 가 출력됨


/* 다른 function 을 arrayCalc() 에 사용할 수 있음 */

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
/***  선언과 동시에 호출되는 function expression  ***/
/** data privacy 목적으로 사용 **/

// 일반적인 방식
// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// IIFE 방식
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
}) ();

//console.log(score);  __ error



(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
}) (5);

/*
    외부 scope 에서 접근할 수 없는 scope 이므로 data privacy 확보
    그리고, global execution context 의 다른 변수들을 방해하지 않음 (안전함)
 */