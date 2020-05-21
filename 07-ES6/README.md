<h1>ES 6</h1>

<ol>
    <li>
        <h3>
            'let' and 'const'
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L4">
                >>>
            </a>
        </h3>
        <ul>
            <li>block-scoped 적용됨 (var : fn-scoped)</li>
        </ul>
        <BlockQuote>
            Array, Object 를 const 로 선언해도 안의 element, property 는 추가, 제거 될 수 있다. (주소값은 그대로)
        </BlockQuote>    
    </li>
    <li>
        <h3>
            Blocks and IIFEs
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L71">
                >>>
            </a>
        </h3>
    </li>
    <li>
        <h3>
            Strings
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L95">
                >>>
            </a>
        </h3>
        <ul>
            <li> `` (back tick) + ${ } (template literal) 사용</li>
            <li> .startsWith() : booean </li>
            <li> .endsWith() : booean</li>
            <li> .includes() : booean</li>
            <li> .repeat(num) : String (해당 문자열을 num 만큼 반복시킨 문자열)</li>
        </ul>
    </li>
    <li>
        <h3>
            Arrow Functions
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L120">
                >>>
            </a>
        </h3>
        <ul>
            <li>array.map() 에 사용법 <a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L131">>></a></li>
            <li>Lexical 'this' keyword : Arrow fn 의 주요 특징<a href="">>></a></li>
        </ul>
    </li>
    <li>
        <h3>
            Destructuring
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L242">
                >>>
            </a>
        </h3>
        <ul>
            <li>Object 또는 Array 에 사용가능</li>
            <li>Map 은 Map.entries() 에 사용가능<a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L524">>></a></li>
        </ul>
    </li>
    <li>
        <h3>
            Arrays
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L292">
                >>>
            </a>
        </h3>
        <ul>
            <li>Array.from()</li>
            <li>
                for..of (Map 또는 Array-like obj 에 사용)<a href ="https://github.com/seong7/js_TIL/blob/master/07-ES6/script.js#L329">
                >>>
            </a>
                <ul>
                    <li>참조 - Object : for..in (Object 에 사용__ property 를 iterate 함)(기존에 있던 syntax임)<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in">>></a></li>
                </ul>
            </li>
            <li>Array.findIndex(callbackFn) : Fn 이 참인 첫번째 index</li>
            <li>Array.find(callbackFn) : Fn 이 참인 첫번째 요소</li>
            <li>참고 - Array.reduce()  (기존에 있던 syntax임)</li>
        </ul>
    </li>
    <li>
        <h3>
            The Spread Operator ( ... )
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L350">
                >>>
            </a>
        </h3>
        <ul>
            <li>
                ES 5 : .apply(this, Array)
            </li>
            <li>
                ES 6 : ...Array 사용해 배열을 자동으로 펼침 
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Rest and Default Parameters
        </h3>
        <ul>
            <li>
                function 의 매개변수를 자유롭게 받는 방법 (REST parameter)<br/>
                <a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L389">
                >>>
                </a>
                <ol>
                    <li>
                        ES 5 : 입력된 모든 매개변수는 Arguments 객체(Array-like) 로 변환되어 arguments 키워드 변수에 저장됨,<br/>
                        -> slice.call 이용해 Array로 변환시켜 사용<br/>
                    </li>
                    <li>
                        ES 6 : 매개변수에 (a, b, ...rest) 선언 (rest parameter)<br/>
                        -> 입력된 매개변수들 중 a, b 를 제외한 나머지 매개변수들은 자동으로 Array로 변환되어 rest 변수에 저장됨<br/>
                        (입력된 매개변수의 수와는 상관없음)<br/>
                        <a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L442">
                            >>
                        </a>
                    </li>
                </ol>
            </li>
            <li>
                매개변수의 Default 값 지정하는 법 (DEFAULT parameter)<br/>
                function fn(a = 1){}<br/>
                <a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L458">>></a>
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Maps
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L489">
                >>>
            </a>
        </h3>
        
> **ES6** 이전에는 key와 value을 연결하려면 객체를 사용해야 했다.   
>    
> **Object 사용의 단점**   
> 1. **Prototype chain** 때문에 의도하지 않은 **연결**이 생길 수 있음   
> 2. **key 와 value 의 수**를 알아내기 힘듦   
> 3. key 는 반드시 **심볼이나 문자열**이여야 하므로 <u>다른 Object 를 key 로 사용 불가</u>   
> 4. 객체는 **Properties 의 순서**를 전혀 보장하지 않음    
>   

> **Map 객체**는 위의 결함을 모두 해결함   
>
> **Key 와 Value 를 연결할 목적이라면 Map 을 사용하는게 옳은 선택**   
> 
> 출처 : [네이버 블로그](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.sort)   
> 블로그에서 WeakMap 도 확인해보기

<ul>
    <li> .set(key, value)</li>
    <li> .get(key)</li>
    <li> .has(key)</li>
    <li> .size __(property 임)</li>
    <li> 
        for ... of Map.entries()  __(array-like Object return)
        <a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L524">>></a>
    </li>
</ul>
    </li>
    <li>
        <h3>Sets [<a href="">mdn</a>]</h3>
        <ul>
            <li>중복을 허용하지 않는 데이터 집합</li>
            <pre>
const roles = new Set();

roles.add('1ilsang');
roles.add('sangchul');

roles.size; // 2

roles.add('1ilsang');
roles.size; // 2. 중복이라면 아무일도 일어나지 않는다.

roles.delete('sangchul');
roles;      // Set ["1ilsang"]
roles.size; // 1
roles.delete('sangchul'); // False
            </pre>
            > 출처 : [네이버 블로그](https://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.sort)   
        </ul>
    </li>
    <li>
        <h3>
            Classes and Subclasses ( Inheritance )
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/07-ES6/script.js#L543">
                >>>
            </a>
        </h3>
        <ul>
            <li>constructor 영역 (property/ method 기입)</li>
            <li>prototype 영역 (prototype method 기입)</li>
            <li>상속 시 prototype chain 형성</li>
        </ul>
    </li>
    <li>
        <h3>
            Export and Import ( Module )
        </h3>
        <a href ="../10-Forkify-app">
            _10-forkify-app 에서 다룸
        </a>
    </li>
</ol>
