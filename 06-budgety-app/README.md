<h1>Budgety project</h1>

## [App-Structure 설계](https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L2) 순서
<ol>
  <li>
    <h3>
      To-do List 나열
    </h3>
  </li>
  <li>
    <h3>
      Module 로 todo list 분류
    </h3>
    <ul>
      <li>
        Structure Sample <a href="">[예시]</a>
      </li>
      <li>
        Module 사용의 목적
        <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/sample_structure.js#L26">
          >>>
        </a>
      </li>
      <li>
        Module Pattern 특징
        <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/sample_structure.js#L35">
          >>>
        </a>
      </li>
    </ul>
  </li><br/>
</ol>


<h2>Memo</h2>
<ul>
  <li>
    <p>
      <h3>Array 관련 method</h3>
    </p>
    <ol>
      <li>
        <p>
          <b>array like Object -> Array 변환 (.querySelectAll 의 return 값에 사용)
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L351"> >>> </a></b><br/>
          <BlockQuote>array.slice() method 사용</BlockQuote>
        </p>   
      </li>
      <li>
        <p>
          <b>List 를 Array 변환하지 않고 nodeList 인채로 사용법<br/>>
          (.querySelectAll 의 return 값에 사용)
            <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L294"> >>> </a></b></br>
            <BlockQuote><strong><a href="https://github.com/seong7/js_TIL/tree/master/05-advanced-JS#------first-class-function-%EC%9D%BC%EA%B8%89-%ED%95%A8%EC%88%98------------------------">First Class Function (1급 함수)</a></strong>의 특징 사용</BlockQuote>
        </p>   
      </li>
      <li>
        <p>
          <b>Array 에서 요소 삭제
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L166"> >>> </a></b><br/>
          array.splice((삭제 시작 index), (삭제할 요소의 수)) method 사용
        </p>   
      </li>
      <li>
        <p>
          <b>Array 를 사용해 또 다른 Array 생성
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L157"> >>> </a></b><br/>
          array.map(callback fn) method 사용
        </p>   
      </li>
      <li>
        <p>
          <b>Array 내 value 값으로 index 찾기
            <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L162"> >>> </a></b><br/>
          array.indexOf( value ) method 사용
        </p>   
      </li>
      <li>
        <p>
          <b>forEach 사용법
            <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L365"> >>> </a></b>
        </p>   
      </li>
    </ol>
  </li>
   <li>
    <p>
      <h3>string 관련 팁 및 method</h3>
    </p>
    <ol>
      <li>
        <p>
          <h4>string 에서 '' 와 "" 의 사용법
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L319"> >>> </a></h4>
        </p>   
      </li>
      <li>
        <p>
          <h4>string replace 및 insertAdjecentHTML 사용법</h4>
          <BlockQuote>
            <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L326"> replace() </a></br>
            <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L334">insertAdjecentHTML()</a>
          </BlockQuote>
        </p>   
      </li>
      <li>
        <p>
          <h4>string .split() 및 .substr() 사용법 
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L281"> >>> </a></h4>
        </p>   
      </li>
      <li>
        <p>
          <h4>string, number : primitive -> Object 자동 변환</h4>
          JS에서 wrapper 활용해 Object 로 변환시킴<br/>
          ==> 해당 Object의 method 사용 가능<br/>
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L281"> string.split() 예시 </a>
        </p>   
      </li>
    </ol>
  </li>
  <li>
    <p>
      <h3>number 관련 팁 및 method</h3>
    </p>
    <ol>
     <li>
      <p>
        <h4>isNan 사용법
        <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L488"> >>> </a></h4>
      </p>   
    </li>
    <li>
      <p>
        <h4>Percentage 구현 (반올림)
        <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L183"> >>> </a></h4>
        Math.round() : 가장 가까운 integer 값 return
      </p>   
    </li>
    <li>
      <p>
        <h4>절대값 return
        <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L275"> >>> </a></h4>
        Math.abs()
      </p>   
    </li>
    <li>
      <p>
        <h4>parseFloat 사용법
        <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L308"> >>> </a></h4>
      </p>   
    </li>
    <li>
      <p>
        <h4>Number obj .toFixed() 사용법
        <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L278"> >>> </a></h4>
        <BlockQuote>반올림 자리수 고정값 지정<BlockQuote>
      </p>   
    </li>
    </ol>
  </li>
  <li>
    <p>
      <h3>Event 관련 팁 및 method</h3>
    </p>
    <ol>
      <li>
        <p>
          <h4>keypress 이벤트 사용법
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L460"> >>> </a></h4>
        </p>   
      </li>
      <li>
        <p>
          <h4>Event Bubbling / Delegation
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L472"> >>> </a></h4>
          DOM Traversing (event target -> 부모 node)
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L511"> >>> </a>
        </p>   
      </li>
      <li>
        <p>
          <h4>change Event
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L477"> >>> </a></h4>
         change event 에는 classList.toggle() 이 적절함
        </p>   
      </li>
    </ol>
  </li>
  <li>
    <p>
      <h3>객체 관련 Memo</h3>
    </p>
    <ol>
      <li>
        <p>
          <h4>객체 내부에 객체 선언 방법
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L107"> >>> </a></h4>
        </p>   
      </li>
      <li>
        <p>
          <h4>객체 내 property 동적인 호출 방법
          <a href="https://github.com/seong7/js_TIL/blob/master/06-budgety-app/app.js#L125"> >>> </a></h4>
          object[key]
        </p>   
      </li>
    </ol>
  </li>
</ul>

