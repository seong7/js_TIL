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




    /*****************************
    * Functions
    */
    
    function calculateAge(birthYear) {
        return 2018 - birthYear;
    }
    var ageJohn = calculateAge(1990);
    var ageMike = calculateAge(1948);
    var ageJane = calculateAge(1969);
    console.log(ageJohn, ageMike, ageJane);


    function yearsUntilRetirement(year, firstName) {
        var age = calculateAge(year);
        var retirement = 65 - age;
        
        if (retirement > 0) {
            console.log(firstName + ' retires in ' + retirement + ' years.');
        } else {
            console.log(firstName + ' is already retired.')
        }
        
    }
    yearsUntilRetirement(1990, 'John');
    yearsUntilRetirement(1948, 'Mike');
    yearsUntilRetirement(1969, 'Jane');
    

    /*****************************
    * Function Statements and Expressions
    * 
    *          Statement 는 expression 과 다르게 return 값이 없으므로 console에 ' undefined ' 출력됨 
    *          즉, return 값이 있으면 expression 임
    */
    
    // Function declaration
    // function whatDoYouDo(job, firstName) {}
    // Function expression
    var whatDoYouDo = function(job, firstName) {
        switch(job) {
            case 'teacher':
                return firstName + ' teaches kids how to code';   // expression
            case 'driver':
                return firstName + ' drives a cab in Lisbon.'
            case 'designer':
                return firstName + ' designs beautiful websites';
            default:
                return firstName + ' does something else';
        }
    }
    console.log(whatDoYouDo('teacher', 'John'));
    console.log(whatDoYouDo('designer', 'Jane'));
    console.log(whatDoYouDo('retired', 'Mark'));
    


    

    /*****************************
    * Arrays
    */
   
    // Initialize new array
    var names = ['John', 'Mark', 'Jane'];
    var years = new Array(1990, 1969, 1948);
    console.log(names[2]);
    console.log(names.length);

    // Mutate array data
    names[1] = 'Ben';
    names[names.length] = 'Mary';
    console.log(names);

    // Different data types
    var john = ['John', 'Smith', 1990, 'designer', false];
    john.push('blue');
    john.unshift('Mr.');   /* unshift :  0번째 자리에 element 삽입 */
    console.log(john);
    john.pop();
    john.pop();
    john.shift();           /* shift :  0번째 자리의 element 제거하고 자리 당김 */
    console.log(john);
    console.log(john.indexOf(23));
    var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
    console.log(isDesigner);
    



    /*****************************
    * Objects and properties             
    * 
    * ** object 는 value 에 index 대신 이름(key) 을 주어 관리할 수 있음
    */

    // Object literal
    var john = {
        firstName: 'John',                      // key 또는 property : firstName    |  value 또는 object : 'John'
        lastName: 'Smith',
        birthYear: 1990,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false
    };
    console.log(john.firstName);   
    console.log(john['lastName']);   // 위 아래 모두 같음   | key 에 ' ' 처리 중요 !!

    var x = 'birthYear';
    console.log(john[x]);  // john 의 birthYear 출력

    john.job = 'designer';  // mutate object (수정)
    john['isMarried'] = true;
    console.log(john);

    // new Object syntax
    var jane = new Object();
    jane.firstName = 'Jane';
    jane.birthYear = 1969;
    jane['lastName'] = 'Smith';
    console.log(jane);


    
    /*****************************
    * Objects and methods
    */

    var john = {
        firstName: 'John',
        lastName: 'Smith',
        birthYear: 1992,
        family: ['Jane', 'Mark', 'Bob', 'Emily'],
        job: 'teacher',
        isMarried: false,
        calcAge: function() {
            this.age = 2018 - this.birthYear;
        }
    };
    john.calcAge();
    console.log(john);
    
