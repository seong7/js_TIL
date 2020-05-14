# 04-Jest-Test

모든 코드는 처음엔 단순해 보이지만 점점 복잡해지기 마련이다.   
Unit Test 는 동료들 또는 미래의 나에게 정말 중요한 의사소통 수단이다. (함수에 대한 가장 상세한 설명이 된다.)

(TDD) 본 코드보다 TEST 코드를 먼저 작성해야하는 이유 :    
  - 본 코드를 먼저 작성하면 다시 한번 코드를 분석하면서 TEST 코드를 작성해야한다.
  - 그리고 더 귀찮아짐
  - 먼저 작성된 TEST 코드를 하나하나 달성하면서 작성하면 단계적으로 올바른 방향으로 코딩 가능 (인터페이스를 먼저 정하고 툴을 개발했던 것과 같음)

### [>> ](./UnitTestBasic/example.js) Unit Test 기본 코드 (순수 js 사용)

### [>> ](./Jest_Basic/order-total.test.js) Jest 기본 사용법

### [>> ](./Jest_Mock/selfMade_Mock/order-total-async.test.js) Mock Function Test - 1 (self Made Mock fn) (비동기 통신 Test)

### [>> ](./Jest_Mock/jestMade_Mock/order-total-async-jest.test.js) Jest Mock Function Test - 2 (jest Made Mock fn) (비동기 통신 Test)

<br/>

## TDD 접근법 (세 가지)

#### 1. Trangulation
  - 가장 단순함 (초보에게 좋음)
  - **RED, GREEN, REFACTOR (실패 -> 작성 및 수정 -> 성공 -> refactor)**

#### 2. Fake it untill you make it

#### 3. Obvious implmentation


## Test Runners
test 를 쉽게 하도록 도와주는 tool

### Test Runner 의 장점
 - 동료들이 모두 이해할 수 있는 형식으로 test 를 작성하게 됨
 - **auto run (가장 중요)** : 변경이 있을 때마다 save 할때 자동으로 test 해준다.

### Test Runner 의 종류
 - Mocha, Jasmine, Balloon test
 - 그리고 **Jest**
   - Jest 를 가장 많이 사용하는 이유
     1. create-react-app 의 표준 Test Runner 이다.
     2. 사용하기 편하게 tool 들이 갖춰져 있다. (?) 

