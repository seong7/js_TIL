# 함수형 프로그래밍 (Functional Programming)

### 장점
- bug 를 줄여준다.   
  : code 의 reason about (추론) 이 쉬워지기 때문

- 시간을 줄여준다.   
  : code 의 re-use 가 확대되기 때문

### 기초 지식

- **함수형 프로그래밍에서  function 은 value 로 사용한다.**
    ```javascript
    let triple = function (x) {
        return x * 3
    }

    const waffle = triple;  // value 로 사용
    waffle(30);
    ```
- **callback function**   
: function 에 매개변수로 넣어주는 function

## 1. Higher-order functions 의 종류

**Higher-order function 이란?**   
작게 쪼개놓은 function 들을 조합하여 사용하는 function 을 말한다.   
callback funciton 을 매개변수로 사용하는 function 들이라고 볼 수 있다.

### Array.prototype.filter
```javascript
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
const isDog = function (animal) {return animal.species === 'dog';}
const isNotDog = (animal) => animal.species !== 'dog';

const dogs2 = animals.filter(isDog);
const otherAnimals = animals.filter(isNotDog);
// const otherAnimals = animals.reject(isDog); (__lodash)

```
call back fn 을 filtering 과는 전혀 관계없는 function 으로 분리 시킨다.   
즉, 해당 fn 을 다른 곳에서 re-use 할 수 있다.

**그 후 filter 함수에서 조합하여 사용**   

**Array.prototype.find 는 filter 와 동일하지만 첫번째 요소를 return 한다.**

### Array.prototype.map
```javascript
const names = [];
for (let i = 0; i < animals.length; i++) {
    name.push(anmimals[i].name)
}

const names1 = animals.map((c) => c.name + `  is a ` + c.species);
```

### Array.prototype.reduce
다양한 heigher-order function 중에서 원하는 function 을 찾지 못했을 때 reduce 를 사용하면 된다.   
reduce 를 사용하면 어떤 종류의 배열 조작 메소드를 다 구현할 수 있다.

- #### 기본적인 사용법
 수의 합 구하기
```javascript
const orders = [
    {amount : 250},
    {amount : 400},
    {amount : 100},
    {amount : 325},
]

const totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amout;
}

/* reduce */
const totalAmount1 
  = orders.reduce((acc, el, idx, array) => acc + el.amount, 0)
    // callback fn 의 return 값이 다음 acc 로 넘어감 
    // 초기 값(객체)이 없으면 배열의 0번 요소로 시작 (빈배열에 초기 값 없으면 에러)
```
