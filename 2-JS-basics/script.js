/***************************
 * Varivales and Data Types
 */

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
var fullAge = true; /* 성인 */

console.log(fullAge);


var job;
console.log(job); // undefined 출력

job = 'Teacher';
console.log(job);

/* variable naming : camelcase notation  (ex firstName)
                     사용하는 것이 convention 임

                    첫 글자로 $ 또느 _ 외에는 사용 안함
                    
                    var 3years = 3;   : 불가능
*/
var _3years = 3;
var $3years = 3;  /* 가능 */

/* function  / delete / if  등 js 예약어들도 variable name으로 사용 불가능*/





/**************************************
 * Variable mutation and type coercion
 */

 var firstName = 'John';
 var age = 28;

 console.log(firstName + ' ' + age); /* Number -> String type coercion*/

 var job, isMarried;
 job = 'Teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old  ' + job + '. Is he married? ' + isMarried);
 /* boolean -> String   type coercion  */

 // Variable mutation
 age ='twenty eight';  /* age의 type 을 값에 따라 변경시켰음  */

 alert(firstName + ' is a '  + age + ' year old ' +
 job + '. Is he married? ' + isMarried);

 var lastName = prompt('What is his last Nmae?');
console.log(firstName + ' ' + lastName);



/***************************************
 * Basic operators
 */

 var year, yearJohn, yearMark;
 now = 2019;
 ageJohn = now - 28;
 ageMark = now -33;

 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

 // Logical operators
 var johnOlder = ageJohn > ageMark;
 console.log(johnOlder);

 // typeof operator
 console.log(typeof johnOlder); /* boolean 출력됨  */
console.log(typeof ageJohn);
console.log(typeof ageMark);

var x;
console.log(typeof x);  /* undefined 출력  */




// Multiple assignments
var x, y;
x = y = (3 + 5) *4 -6;
console.log(x, y); /* 26 26   출력함  */