# Math
  수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체 (함수 객체가 아님)

## 자주 쓰는 함수 정리

#### Math.ceil(x)
소수를 올림하여 정수로 반환 

#### Math.floor(x)
소수를 내림하여 정수로 반환

#### Math.round(x)
소수를 반올림하여 정수로 반환   
(round 도 방법은 있지만, 자리를 정해 반올림할 때는 **number.toFixed(자릿수)** 가 더 편함)

#### Math.trunc(x)
숫자의 정수부분만 반환

#### Math.abs(x)
숫자의 절댓값을 반환

#### Math.pow(x, y)
x 의 y 제곱을 반환

#### Math.cbrt(x)
숫자의 세제곱근 반환

#### Math.sqrt(x)
숫자의 제곱근을 반환

#### Math.log10(x)
숫자의 밑이 10인 로그 반환

#### Math.max(x, y, z, ....)
가장 큰 수 반환

#### Math.min(x, y, z, ....)
가장 작은 수 반환

#### Math.random()
0 과 1 사이의 난수 반환   
(최대값 제한 주려면 최대값을 곱해주면 됨 예_ Math.random()*3000 : 0 에서 3000 사이의 수 반환)   
(다양한 범위의 난수 생성법은 MDN 참조 [>>>](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random))

#### Math.sign(x)
x 의 부호를 알려주는 값 반환   
  - 양수 : (0이면 0) 아니면 1 반환
  - 음수 : (-0이면 -0) 아니면 -1 반환
  - 수가 아니면 NaN 반환

#### Math.PI
원의 둘레와 지름의 비율 (약 3.14159)