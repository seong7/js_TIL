# Advanced JavaScript

- ### function constructor [>>>](https://github.com/seong7/js_TIL/blob/master/05-advanced-JS/script.js#L25)
- ### Prototype [>>>](https://github.com/seong7/js_TIL/blob/master/05-advanced-JS/script.js#L52)

  - Prototype , **proto** , Prototype chain 이해하기
    [[블로그 >>](https://medium.com/@bluesh55/javascript-prototype-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-f8e67c286b67)]

  - 생성자의 Property 내 method의 장점 :
    [[블로그 >>](https://velog.io/@gtobio11/Javascript-Prototype-methods-vs-Object-methods)]

    - 메소드를 메모리 내 한 곳에만 저장하고 다른 인스턴스들은 링크로 상속 받으므로 효율적이다. (빠름 \_ 생각보다 차이가 크다)
      > 생성자에 선언한 메소드는 모든 인스턴스에 직접 기입되어야해 비교적 느리다.
    - 생성자로 객체들을 생성한 후에도 Property 의 method 만 수정해주면 모든 객체에서도 수정된 method 로 사용 가능

- ### IIFE (Imediately Invoked Function Expression) [>>>](https://github.com/seong7/js_TIL/blob/master/05-advanced-JS/script.js#L292)
  선언과 동시에 호출 및 실행됨
- ### Method Borrowing (Bind, Call, Apply) [>>>](https://github.com/seong7/js_TIL/blob/master/05-advanced-JS/script.js#L418)
- ### CallBack 사용 [>>>](https://github.com/seong7/js_TIL/blob/master/05-advanced-JS/challenge1/c1.js#L64)
- ### Closure [>>>](https://github.com/seong7/js_TIL/blob/master/05-advanced-JS/script.js#L334)
  - 사용 예시
    [>>>](https://github.com/seong7/js_TIL/blob/master/05-advanced-JS/challenge1/c1.js#L113)
- ### First Class Function (일급 함수) [>>>](https://developer.mozilla.org/ko/docs/Glossary/First-class_Function)
  ```
  함수를 다른 변수와 동일하게 다루는 언어는 일급 함수를 가졌다고 표현함.
    예) 일급 함수를 가진 언어에서는 :
    1. 함수를 다른 함수에 매개변수로 제공 가능
    2. 함수가 함수를 반환(return)할 수 있음
    3. 변수에 함수를 할당 가능
  ```
