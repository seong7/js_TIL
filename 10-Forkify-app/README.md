# Forkify

## Recipe 정보 app

- ### Architecture

  <img src="./ref/architecture.JPG" alt="App-architecture" height=250px></img>

- ### Memo

  - #### Array 관련

    > - Array.reduce() : [searchView.js]() > [[MDN >>]](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
    > - Array.join() : [searchView.js]()
    > - Array.findIndex(callback fn) : callback 을 true return 하는 첫 번째 요소의 idx return [Recipe.js]()
    > - Array.include() : [Recipe.js]()
    > - Array.map()
    > - Array.slice(시작 idx, 끝 idx) : 배열 분리하여 새 배열 생성 [Recipe.js]()

  - #### Object 관련

    > - property 를 변수로 선언하기 [Recipe.js]()

         <pre>
          object{
              변수명
          }
          ==>  {변수명 : 변수의 값} 으로 자동 저장됨
         </pre>

    > - Global State Object 사용법 [index.js]()

  - #### HTML 관련

    > - ##### DOM 제거하는 법
    >   - loader.parentElement.removeChild(loader)  
    >     : 부모 요소를 먼저 찾은 후 .removeChild(element) 로 해당 el만 제거
    >   - EL.innerHTML = ' '  
    >     : 요소에 관계 없이 EL 안의 모든 HTML 을 삭제한다.
    > - ##### html5 'data-\*' 속성 사용법 [searchView.js]()
    >   - html: \<button class="btn1" data-xx=2>
    >   - js: btn1.dataset.xx // = 2
    > - ##### event.target.closest('selector') 사용법 [index.js]()
    >   : event target 에서 가장 가까운 'selector' 요소를 가리킴 (부모 자식 간에만 서치함)

  - #### Event 관련

    > - ##### event.preventDefault() : [index.js]()
    > - ##### hash change event [>>]()
    >   > url 에서 # 부분 값의 변화를 감지함  
    >   > window.addEventListener('hashchange', callback fn)
    > - ##### load event [>>]()
    >   > page 가 load 되는 것을 감지함  
    >   > window.addEventListener('load', callback fn)
