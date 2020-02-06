<h1>ES 6</h1>

<ol>
    <li>
        <h3>
            'let' and 'const'
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L4">
                >>>
            </a>
        </h3>
        <ul>
            <li>block-scoped 적용됨 (var : fn-scoped)</li>
        </ul>
    </li>
    <li>
        <h3>
            Blocks and IIFEs
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L71">
                >>>
            </a>
        </h3>
    </li>
    <li>
        <h3>
            Strings
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L95">
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
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L120">
                >>>
            </a>
        </h3>
        <ul>
            <li>array.map() 에 사용법 <a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L131">>></a></li>
            <li>Lexical 'this' keyword : Arrow fn 의 주요 특징<a href="">>></a></li>
        </ul>
    </li>
    <li>
        <h3>
            Destructuring
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L242">
                >>>
            </a>
        </h3>
        <ul>
            <li>Object 또는 Array 에 사용가능</li>
            <li>Map 은 Map.entries() 에 사용가능<a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L524">>></a></li>
        </ul>
    </li>
    <li>
        <h3>
            Arrays
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L292">
                >>>
            </a>
        </h3>
        <ul>
            <li>Array.from()</li>
            <li>
                for..of
                <ul>
                    <li>참조 - Object : for..in (기존에 있던 syntax임)<a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in">>></a></li>
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
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L350">
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
                <a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L389">
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
                        <a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L442">
                            >>
                        </a>
                    </li>
                </ol>
            </li>
            <li>
                매개변수의 Default 값 지정하는 법 (DEFAULT parameter)<br/>
                function fn(a = 1){}<br/>
                <a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L458">>></a>
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Maps
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L489">
                >>>
            </a>
        </h3>
        <ul>
            <li> .set(key, value)</li>
            <li> .get(key)</li>
            <li> .has(key)</li>
            <li> .size __(property 임)</li>
            <li> 
                for ... of Map.entries()  __(array-like Object return)
                <a href="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L524">>></a>
            </li>
        </ul>
    </li>
    <li>
        <h3>
            Classes and Subclasses ( Inheritance )
            <a href ="https://github.com/seong7/js_TIL/blob/b32fc9730616a3ea601de25e659b20a05ba779b0/7-ES6/script.js#L543">
                >>>
            </a>
        </h3>
        <ul>
            <li>constructor 영역 (property/ method 기입)</li>
            <li>prototype 영역 (prototype method 기입)</li>
            <li>상속 시 prototype chain 형성</li>
        </ul>
    </li>
</ol>
