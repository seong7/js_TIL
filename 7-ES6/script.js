// ES 6 ( ES 2015 )

/////////////////////////////////
// Lectrue : let and const
/////////////////////////////////

    // 특징 : block scoped

// ES 5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES 6
const name6 = 'Jane Smith';
let age6 = 23;
//name6 = 'Jane Miller';      // error (invalid assignment to const `name6)
console.log(name6);

// var  <==> let, const  의 가장 큰 차이점 :
// var        : function-scoped
// let, const : block-scoped

// ES 5
function driversLicence5(passedTest){
    if(passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now ' +
    'officially allowed to drive a car.')
}
driversLicence5(true);

// ES 6
function driversLicence6(passedTest){
    if(passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990;

    }
    // console.log(firstName + ', born in ' + yearOfBirth + ', is now ' +
    // 'officially allowed to drive a car.')        // firstName 에 접근 불가능 ! 
}
driversLicence6(true);



var i = 23;
for (var i = 0; i < 5; i++) {
    console.log(i);  //_ 0, 1, 2, 3, 4 출력
}
console.log(i); //_ 5 출력 
// ==> var 는 function scoped 이므로 for문 안 밖에서 모두 접근, 재선언 가능

{
    let i = 23;
    for (let i = 0; i < 5; i++) {
        console.log(i); //_0, 1, 2, 3, 4 출력
    }
    console.log(i);//_ 23 출력
}
// ==> let , const 는 block scoped 이므로 for문 안과 밖의 i 는 다른 scope 에 존재한다.





/////////////////////////////////
// Lecture: Blocks and IIFEs
/////////////////////////////////

// ES6
{ // __ block 으로 block scope 생성하는 방법 : const, let 에만 유효함
    const a = 1;
    let b = 2;
    var c6 = 3;
} 
//console.log(a + b);  //__ is not defined error (다른 scope 임)
console.log(c6); //_ 3 출력됨 

// ES5
(function() {
    var c5 = 3;
})();
//console.log(c5); //_ is not defined error (var 여도 IIFE 안에 있으므로 다른 function (다른 scope) 임)






/////////////////////////////////
// Lecture: Strings
/////////////////////////////////

{
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year) {
    return 2016 - year;
}
// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');
// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));  //_ false
console.log(n.endsWith('Sm'));   //_ false
console.log(n.includes('oh'));   //_ true
console.log(`${firstName} `.repeat(5)); //_John John John John John
}




/////////////////////////////////
// Lecture: Arrow Function
/////////////////////////////////
{
    const years = [1990, 1965, 1982, 1937];
    
    // ES 5
    var ages5 = years.map(function(el, index, array){
        return 2016 - el;
    }); 
    console.log(ages5);

    // ES 6
    let ages6 = years.map(el => 2016 - el);  // 위와 같은 코드임
    console.log(ages6);
                        
    ages6 = years.map((el, index) => `Age element ${index+1}: ${2016-el}.`);
                        // 0개 또는 두개 이상의 매개변수는 괄호로 묶어줌 !!
    console.log(ages6); //_ [ "Age element 1: 26.", "Age element 2: 51.", "Age element 3: 34.", "Age element 4: 79." ]

    ages6 = years.map((el, index) => {
        const now = new Date().getFullYear();
        const age  = now - el;
        return `Age element ${index+1}: ${age}.`
    }); // 여러 function 을 쓸 경우 {} 로 묶어주며 return 은 따로 선언해야함

    console.log(ages6); //_[ "Age element 1: 30.", "Age element 2: 55.", "Age element 3: 38.", "Age element 4: 83." ]
}



/////////////////////////////////
// Lecture: Arrow Function 2
/////////////////////////////////

// Arrow functions 은 this 키워드가 없다
// lexical 'this' keyword 를 쓴다. (자신만의 this 를 생성하지 않음)
    // 자신을 포함하고 있는 context의 this key 를 이어받는다.


// ES 5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This box number ' + self.position /*this.position*/ + ' and it is ' +
            self.color /*this.color*/;  
                // call back fn의 this : Window obj  -- > not defined error 발생
                // method 가 가진 this (box5 obj)를 self 에 담아주고 사용 가능
            alert(str);
        });
    }
}
// box5.clickMe();

// ES 6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        
        document.querySelector('.green').addEventListener('click', () => { // 매개변수 0개 또는 2개이상 일 때: () 로 묶어줌
            var str = 'This box number ' + /*self.position*/ this.position + ' and it is ' +
            /*self.color*/ this.color;  
                // lexical this keyword 사용 가능함 
            alert(str);
        });
    }
}
// box6.clickMe();

// this 키를 보존해야하는 경우에 해당 방법 자주 사용하여 익숙해 지기 !

const box66 = {
    color: 'green',
    position: 1,
    clickMe:() => {     ////// 중요 //////
                        // method 에도 arrow fn 을 사용할 경우 this 를 한번 더 lexical 로 쓰기 때문에
                        // 아래의 callback fn 내의 this 는 Window 를 가리키게 된다. 
        
        document.querySelector('.green').addEventListener('click', () => { // 매개변수 0개 또는 2개이상 : () 로 묶어줌
            var str = 'This box number ' + /*self.position*/ this.position + ' and it is ' +
            /*self.color*/ this.color;  
                // lexical this keyword 사용 가능함
            alert(str);
        });
    }
}
//box66.clickMe(); //__ undefined



function Person(name){
    this.name = name;
}
var friends = ['Bob', 'jane', 'Mark'];

// ES 5
Person.prototype.myFriends5 = function(friends){

    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));  // callback fn 내 에서는 this 가 window 이므로
                    // .bind 를 통해 해당 객체를 가리키는 this 를 매개변수로 전달해줌

    console.log(arr);
};
new Person('John').myFriends5(friends);


// ES 6
Person.prototype.myFriends6 = function(friends){
    
    const arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
};
new Person('John').myFriends6(friends);



/////////////////////////////////
// Lecture: Destructuring
/////////////////////////////////


// Array destructuring 

// ES 5
// var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// ES 6
// const [name, age] = ['John', 26];   // const name  , const year 생성
// console.log(name);
// console.log(age);  // data structure 를 반대로 destructure 했음


// Object destructuring 

// ES 6
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// function destructuring  (array destructuring 이용)

function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65-age]; // 65세가 은퇴 나이라고 가정
}

const [age, retirement] = calcAgeRetirement(1992);
console.log(age);
console.log(retirement);






/////////////////////////////////
// Lecture: Arrays
/////////////////////////////////


const boxes = document.querySelectorAll('.box');

// ES 5
// var boxesArr5 = Array.prototype.slice.call(boxes);  // : nodeList -> Array 변환
// boxesArr5.forEach(function(el){
//     el.style.backgroundColor = 'dodgerblue';
// });

// ES 6
const boxesArr6 = Array.from(boxes); // Array.from(nodeList)
                                     // : nodeList -> Array 변환
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
            

// loop

// .forEach() 와 .map() 의 경우 loop 중간에 break 나 continue 를 할 수 없음

// ES 5
// for(var i = 0; i<boxesArr5.length; i++){
//     if(boxesArr5[i].className === 'box blue'){  // .className : class 전체명 가져옴 (부분은 못 가져옴)
//         continue;
//         // break;
//     }
//     boxesArr5[i].textContent = 'I changed to blue!';
// }

// ES 6
for(const cur of boxesArr6){
    if(cur.className.includes('blue')){  // .includes() 는 string method 임 
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


// ES 5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES 6
console.log(ages.findIndex(cur => cur >= 18));  //_ fn true 인 첫번째 index return
console.log(ages.find(cur => cur >= 18));   //_ fn true 인 첫번째 value return





/////////////////////////////////
// Lecture: Spread Operator  (...)
/////////////////////////////////
    
    // ...Array 변수  : 해당 Array 를 펼쳐 (spread) 요소들로 분해함

function addFourAges (a, b, c, d){
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1); //_ 81

// ES 5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages); // .apply(this, array) : array 를 분해해서 앞의 fn 에 매개변수로 넣어줌
console.log(sum2); //_ 81


// ES 6
const sum3 = addFourAges(...ages);  // spread operator ...  : 
console.log(sum3); //_ 81

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily); //_ Array(7) [ "John", "Jane", "Mark", "Lily", "Mary", "Bob", "Ann" ]

// nodeList (array-like)에 사용하기
const h = document.querySelector('h1');
const boxes6 = document.querySelectorAll('.box');  // - nodeList
const all = [h, ...boxes6];  // nodeList 의 요소들이 분해되어 배열에 나열됨

Array.from(all).forEach(cur => cur.style.color = 'purple'); // 한번에 color 속성 값 변경





/////////////////////////////////
// Lecture: Rest Parameters  (...)
/////////////////////////////////

    // function(...매개변수){}  : ... 부호가 fn 선언문에 매개변수로 쓰일 때 Rest Parameter라고 부름
        // 들어온 매개변수를 Array 로 묶어서 fn 구현부에 보냄

// ES 5
function isFullAge5(){
    console.log(arguments); //_ Arguments (Array-like object)객체 출력 {0: 1990, 1: 1999, 2: 1965}
            // arguments : 각각의 excution context 가 가지고 있는 keyword
                         // 매개변수를 가리킴
    var argsArr = Array.prototype.slice.call(arguments);
    console.log(argsArr);   //_ Array 객체 출력 [1990, 1999, 1965]

    argsArr.forEach(function(cur){
        console.log((2016 - cur) >= 18);
    })
}

isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);


// ES 6
function isFullAge6(...years){  // ... 를 fn 선언문의 매개변수에 쓰면
                                // 들어오는 값들을 자동으로 배열로 합침 (앞에 선언된 매개변수가 없을 경우)

    console.log(years); //_ 매개변수가 자동으로 Array로 변환되어 출력됨 (값이 하나여도 마찬가지)

    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);



// ES 5
function isfullAge55(limit){
    console.log(limit); //_ 첫 매개변수만 받음

    console.log(arguments); //_ 전체 매개변수를 Argument 객체로 받음
    var argsArr = Array.prototype.slice.call(arguments, 1); // 1번 index 부터 잘라서 Array 복사
    console.log(argsArr);

    argsArr.forEach(function(cur){      // 새로운 Array 에 대해 forEach method 적용
        console.log((2020 - cur) >= limit);
    })
} 

isfullAge55(21, 1990, 1999, 1965); //_ true, true, true    (세 번)    
// : ES 5 에서는 매개변수를 추가하여 fn 을 짜는 것이 복잡함


// ES 6
function isFullAge66(limit1, limit2, ...years){ //@@@ ...years 앞에 선언된 매개변수만큼 제외한 후
                                                    // 나머지 (rest) 를 배열로 묶어 변수에 저장
    console.log(limit1);
    console.log(limit2);
    console.log(years); //__ Array [1990, 1999, 1965] 
    years.forEach(cur => console.log((2020 - cur) >= limit1));
}

isFullAge66(16, 20, 1990, 1999, 1965); //_ true, true, true (세 번)





/////////////////////////////////
// Lecture: Default Parameters
/////////////////////////////////

// ES 5
function SmithPerson5(firstName, yearOfBirth, lastName, nationality){

    lastName === undefined? lastName='Smith' : lastName;
    nationality === undefined? nationality = 'american' : nationality;
    // ternary operator 를 이용해 매개변수가 undefined 일 경우 default 값을 정해줄 수 있음

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
};

var john = new SmithPerson5('John', 1990);
var emily = new SmithPerson5('Emily', 1991, 'Diaz', 'spanish'); // defualt parameter 를 안씀

// ES 6
function SmithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american'){
                                                // default Parameter 임
    // 구현부 생략 (위와 동일)
}






/////////////////////////////////
// Lecture: Maps        ES 6 에서 완전 새롭게 추가된 data structure
/////////////////////////////////

    // 기존의 Object 과 다른 점 및 Object 보다 hash map 을 구성하기에 더 편한 이유 :
        // 1. key 값으로 다양한 type 지정 가능
        // 2. iteratable : loop 에서 사용 가능
        // 3. distructuring 하기 쉬움
        // 4. size property 로 size 쉽게 알 수 있음
        // 5. add, remove data 가 쉽다.
        


const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version');
question.set(1, "ES5");  // key , value
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question')); //_ value 출력됨
console.log(question.size);

if(question.has(4)){    // key  return - boolean
    // question.delete(4);
}

// question.delete(4); // key
// question.delete(4); // 이미 삭제된 경우 nothing happens

// question.clear();


/*iteratable 특징 이용해 distructuring*/

// question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}.`));

for (let [key, value] of question.entries()){
    
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`)
    }
}

// const ans = parseInt(prompt('Write the correct answer.'));
// console.log(question.get(ans === question.get('correct')));





/////////////////////////////////
// Lecture: Classes
/////////////////////////////////
        // 비난 여론 : js 의 객체 지향 상속 특성을 숨기기 때문 (예: prototype 상속을 자동으로 시켜줌)

        /*
            특징 : 
            1. class definition 은 hoist 되지 않는다.
                    -> fn constructor 와는 다르게 class는 선언문 아래에서만 접근할 수 있다.
            2. class 에 별도로 method 를 추가할 수 있지만 protperty 는 불가능하다.
                    -> 새로운 property 를 추가하는 것은 중요하지 않으므로 문제 안됨. 
        */

// ES 5  : function constructor 이용
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job; 
};
Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear()-this.yearOfBirth;
    console.log(age);
};

var john5 = new Person5('John', 1990, 'teacher');


// ES 6   : class 를 이용함
class Person6 {
    constructor (name, yearOfBirth, job){   /* property 및 method 영역 */
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
        this.calc2 = function(){
            console.log(`method test : ${this.name}`);
        }
    } /* , 또는 ; 를 쓰지 않는다. */

    /* Prototype 영역 !  */
    calculateAge(){
        var age = new Date().getFullYear-this.yearOfBirth;
        console.log(`prototype의 this : ${this.name}`);
    }

    /* static 영역 !  (instance에게 상속되지 않음)*/
    static greeting(){
        console.log(`Hey there!`);
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();



/////////////////////////////////
// Lecture: Classes and subclasses 
/////////////////////////////////

// ES 5  : function constructor 이용
var Person55 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job; 
};
Person55.prototype.calculateAge = function(){
    var age = new Date().getFullYear()-this.yearOfBirth;
    console.log(age);
};


// /* 상속 */ subclass (super class 와 동일한 매개변수 받아야함)
var Athlete55 = function(name, yearOfBirth, job, olympicGames, medals){
    
    Person5.call(this, name, yearOfBirth, job); // super class 로부터 받은 매개변수 호출

    // this 를 넣어주는 이유 : new operator 로 빈 객체가 생성되면 this는 해당 객체를 가리킴
    // -> 해당 객체를 가리키는 this를 Person5 에도 적용하여 호출하기 위해 this 넣어줌 

    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete55.prototype = Object.create(Person55.prototype); 
// prototype = Person5 의 prototype 을 prototype 으로 가지는 객체로 정함
// => prototype 상속

// 상속 받은 prototype 외에 자신만의 method 추가해줌 ( *** 상속 먼저 받고 추가해야함)
Athlete55.prototype.wonMedal = function(){  // Athlete55 만의 prototype 지정
    this.medals++;
    console.log(this.medals);
}

var johnAthlete55 = new Athlete55('John', 1992, 'swimmer', 3, 10);

johnAthlete55.calculateAge();  // prototype 상속된 것 확인
johnAthlete55.wonMedal();      // 자신만의 prototype 확인




// ES 6
class Person66 {
    constructor (name, yearOfBirth, job){   /* property 및 method 영역 */
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
        this.calc2 = function(){
            console.log(`method test : ${this.name}`);
        }
    } /* , 또는 ; 를 쓰지 않는다. */

    /* Prototype 영역 !  */
    calculateAge(){
        var age = new Date().getFullYear-this.yearOfBirth;
        console.log(`prototype의 this : ${this.name}`);
    }
}

class Athlete66 extends Person66{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job); 
        // ES 5 의 Person55.call(this, name, yearOfBirth, job); 를 대신해줌

        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

// Athlete55.prototype = Object.create(Person55.prototype);  // prototype 상속 코드 없이도 자동으로 상속됨 !!
                                                             // 자동으로 prototype chain 구성

const johnAthlete66 = new Athlete66('John', 1992, 'swimmer', 3, 10);

johnAthlete66.wonMedal();
johnAthlete66.calculateAge();