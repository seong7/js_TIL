// Lectrue : let and const

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
    console.log(firstName + ', born in ' + yearOfBirth + ', is now ' +
    'officially allowed to drive a car.')
}
driversLicence6(true);