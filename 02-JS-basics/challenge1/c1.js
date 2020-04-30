/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: 
    BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

var massMark = 78;  //kg
var heightMark = 1.69; //meter

var massJohn = 92; 
var heightJohn = 1.95;

function caculateBMI(mass, height){
    //var BMI = mass / (height^2);           // js 에서 지승은  Math.pow(2, 3) 으로 한다. ^ : xor 연산
    var BMI = mass / (height * height);
    console.log(BMI);
    return BMI;
}

var compareBMI = caculateBMI(massMark, heightMark) > caculateBMI(massJohn, heightJohn);

console.log('Is Mark\'s BMI hight than John\'s? ' + compareBMI);
console.log(caculateBMI(massMark, heightMark));
console.log(caculateBMI(massJohn, heightJohn));