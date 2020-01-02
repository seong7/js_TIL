/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/



// var massMark = 78;  //kg
// var heightMark = 1.69; //meter

// var massJohn = 92; 
// var heightJohn = 1.95;

var john = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.92,
    calcBmi : function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBmi : function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};


//john.calcBmi();
//mark.calcBmi();  
//** 한번 function 을 호출하고 나면 선언한 bmi 가 property 로 생성됨 */

console.log(john, mark); // bmi property 확인 가능 (위의 코드 없으면 확인 불가)


if(john.calcBmi() > mark.calcBmi()){  // 여기서도 bmi 계산됨 (property 생성)  / 즉, 한번만 실행시키면 됨 !!!
    printOut(john);
} else if(john.calcBmi() < mark.calcBmi()){
    printOut(mark);
} else{
    console.log('draw');
}

function printOut(obj){
    //console.log(obj);
    console.log(obj.fullName + ' ' + obj.bmi)
}