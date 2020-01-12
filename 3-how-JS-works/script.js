///////////////////////////////////////
//////// Lecture: Hoisting  //////////
/////////////////////////////////////

/**********  function   *********/
/********************************/

/* function declaration (선언문) 의 경우 **

   global execution context 의 creation phase 에서
   code 가 실행되기 전 이미 function 이 VO(variable object) 에 
   저장되어 있으므로 코드 상 위에 호출해도 상관 없음

*/
calculateAge(1992);  

function calculateAge(year){
    console.log(2020 - year);
}

calculateAge(1992); /* 아래에서 호출해도 상관 없음 */


/* function expression (표현식) 의 경우 **

   *** HOISTING 이 이루어지지 않으므로 표현식 이후에 호출해야만 함 (중요 !!)
*/

//retirement(1992); 호출 불가능

var retirement = function(year){  // function expression (variable 아님) 
    console.log(65 - (2020 - year));
}

retirement(1992);





/**********  variable   *********/
/********************************/

console.log(age);  //_ undefined  (datatype임)

var age = 23; // global execution context 에 저장됨

console.log(age);  //_ 23


function foo(){  // own execution context 생성

    console.log(age); //_ undefined

    var age = 65;  // 해당 execution context 의 VO에 저장됨

    console.log(age);  //_ 65
}

foo();
console.log(age);  //_ 23









///////////////////////////////////////
//////// Lecture: Scoping  //////////
/////////////////////////////////////

// First scoping example


var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    //console.log(a + b + c + d);  __ error :  b 와 c 호출 불가

    /*second();  __ error : 'third()' execution context object 의 scope chain 에는
     *                      'function second()' 가 존재 하지 않으므로 (호출 불가)*/

}




///////////////////////////////////////
// Lecture: The this keyword

console.log(this);