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

---

## 1. Higher-order functions [>>](./01-Higher-order-function)
- filter
- map
- reduce

## 2. Closure [>>](./02-Closure)
