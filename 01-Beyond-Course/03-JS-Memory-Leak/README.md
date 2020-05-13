# Memory Leak (메모리 누수)

JS 는 Garbage Collector 기능이 지원되는 언어이다.

Garbage Collector 는 앱 내에서 더이상 참조되지 않는 객체를 메모리에 반납하는 기능을 한다.

하지만, 종종 개발자의 실수로 Garbage Collector 의 기능을 올바르게 사용하지 못할 수 있다. 개발자는 더이상 사용하지 않는 객체임에도 Garbage Collector 가 해당 객체를 수거할 수 없는 경우인데 이를 메모리 누수 (Memory Leak) 이라고 한다.

## Memory Leak 최소화 방법
#### 1. 함수를 호출할 때 객체에서 필요한 부분만 매개변수로 넣어주고, 처리하기
  전체 객체를 넣어주면 메모리 누수가 발생한다

#### 2. 전역변수 사용을 최소화하고 function 내에 지역변수로 선언하기
  window 객체의 속성으로 선언되는 전역변수들은 garbage collector 가 수거할 수 없다.

#### 3. DOM 에서 컴포넌트를 제거하더라도 이벤트 리스너의 콜백함수에서 해당 컴포넌트를 참조하고 있으면 메모리 누수 발생
  해당 이벤트 핸들러를 삭제해야한다. ( .removeEventListener() 사용) 

#### 4. 객체에서 더이상 사용하지 않는 property 는 delete 연산자로 삭제해준다.
