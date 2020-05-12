## 2. Closure
함수의 body 에서 상위 scope 의 변수의 주소에 접근할 수 있는 기능   
Javascript 에서 function 은 하나의 closure 라고 볼 수 있다.

#### 기초 코드
```javascript
let me = "Jason";
function greetMe () {
    console.log(`Hello, ${me}!`); 
    // function scope 의 외부 변수 me 를 참조하고 있다. : closure 가 지원되기 때문에 가능함
}
me = "Seongjin";
greetMe();

// 출력 : Hello, Seongjin!
```
단순히 복사된 값이 아니라, 참조 주소에 접근한다.   
비동기 방식으로 혹은 앱 내에 아예 다른 부분으로 부터 해당 변수의 값이 바뀌어도 계속해서 해당 주소에 접근한다.


### Lexical Scoping (어휘적 스코프)
변수가 어디에서 접근 가능한지를 결정할 때, 코드 내에서 해당 변수가 어느 위치에 선언되었는가를 고려하는 것이 Lexical Scoping 이다.

특히 function 이 nested 일 때 (다른 execution context 에 포함되어 있을 때) js parser 가 변수를 어떻게 처리하는지 알 수 있는 부분이다.   
(JS 에서 모든 함수는 가장 큰범위인 global execution context 에 nest 되어 있으므로 모든 function 을 CLOSURE 라고 부를 수 있다.)

### 사용 예시
#### 1. 함수형 프로그래밍의 기본
```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

#### 2. DOM 조작할 때
```javascript
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;
```
font Size 를 조절할 수 있는 Closure 함수

#### 3. Private Method 를 흉내내보기
```javascript
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }

  return {
    increment: function() {
      changeBy(1);
    },

    decrement: function() {
      changeBy(-1);
    },

    value: function() {
      return privateCounter;
    }
  };
})();

console.log(counter.value());  // 0.

counter.increment();
counter.increment();
console.log(counter.value());  // 2.

counter.decrement();
console.log(counter.value());  // 1.
```
