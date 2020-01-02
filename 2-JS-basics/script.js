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


/************************
* if / else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstNmae + ' is married!');
}else{

}

/*  && and    || or   ! not  */



/*********************
 * The Ternary Operator and Switch Statements
 */

 var firstNmae = 'john';
 var age = 16;

 age>=18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks juice.');

 var drink = age >= 18 ? 'beer' : 'juice';
 //  오른쪽의 ternary operator 가 먼저 도록 drink 결과 return

 /*** switch statement */

  // String 이용
 var job = 'teacher';
 switch(job){
    case 'teacher':
        console.log(firstNmae + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(2);
        break;

    default:
        console.log('default Message');
        /* break 필요 없음 */
 }


  // condition statement 이용
  age = 56;
  switch (true) {
      case age < 13:
          console.log(firstName + ' is a boy.');
          break;
      case age >= 13 && age < 20:
          console.log(firstName + ' is a teenager.');
          break;
      case age >= 20 && age < 30:
          console.log(firstName + ' is a young man.');
          break;
      default:
          console.log(firstName + ' is a man.');
  }



  /*****************************************
   *  Truthy and Falsy values and equality operators
   * */

   // falsy values : undefined, null, 0, '', NaN 
   // Truthy values : NOT falsy values

   var height;

   if(height){
       console.log('Variable is defined');   // height 가 undefined || null || '' || 0 || NaN  일 때 출력됨
   } else {
       console.log('Variable is NOT defined  :  falsy value');
    }

    // 0 또는 '' 을 구분하는 방법 :

    if(height || height ===0 || height === ''){
        console.log('Variable is defined');
    } else {

    }


    // Equality operators
    /* 
        중요 !!
        == operator does type coercion!
        === operator does NOT do type coercion! 
    */
    
    console.log(23 == '23');  // true (type coercion)
    console.log(23 === '23'); // false (type coercion X)
