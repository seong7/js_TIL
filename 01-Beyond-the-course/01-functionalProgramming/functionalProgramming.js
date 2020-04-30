const logArray = function (array) {
    array.forEach((c) => {console.log(c)}); 
    console.log("---")
} 


let animals = [
    {name: "aaa", species : "rabbit"},
    {name: "bbb", species : "dog"},
    {name: "ccc", species : "dog"},
    {name: "ddd", species : "fish"},
    {name: "eee", species : "cat"},
    {name: "fff", species : "fish"},
]
// dog 를 찾기

/* 일반적인 방법 */
const dogs = [];
for(let i = 0; i < animals.length; i++){
    if(animals[i].species === "dog"){
        dogs.push(animals[i]);
    }
}

/* 함수형 프로그래밍 level 1 */
const dogs1 = animals.filter(function (animal) {
    return animal.species === "dog";
})

/* 함수형 프로그래밍 level 2 */
const isDog = function (animal) {
    return animal.species === 'dog';
}
const isNotDog = (animal) => animal.species !== 'dog';
const dogs2 = animals.filter(isDog);
// const otherAnimals = animals.reject(isDog);
const otherAnimals = animals.filter(isNotDog);

// logArray(dogs2);
// logArray(otherAnimals);


// map
const names1 = animals.map((c) => c.name + `  is a ` + c.species);
// logArray(names1);

// reduce
const orders = [
    {amount : 250},
    {amount : 400},
    {amount : 100},
    {amount : 325},
];

let totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amout;
}

const totalAmount1 = orders.reduce((sum, order) => sum + order.amount, 0)
console.log(totalAmount1);
