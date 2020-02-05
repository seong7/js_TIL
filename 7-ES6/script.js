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
    var c = 3;
} 
//console.log(a + b);  //__ is not defined error (다른 scope 임)
console.log(c);

// ES5
(function() {
    var c = 3;
})();
console.log(c); //_ is not defined error (var 여도 IIFE 안에 있으므로 다른 function (다른 scope)임)






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
// var boxesArr5 = Array.prototype.slice.call(boxes);
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
    if(cur.className.includes('blue')){  // el.className -> string 
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
// Lecture: Spread Operator
/////////////////////////////////

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
const all = [h, ...boxes6];  // 모든 dom 객체들이 배열로 나열됨

Array.from(all).forEach(cur => cur.style.color = 'purple'); // 한번에 color 속성 값 변경





/////////////////////////////////
// Lecture: Rest Parameters
/////////////////////////////////

// ES 5
function isFullAge5(){
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);
    console.log(argsArr);
}

isFullAge5(1990, 1999, 1965);