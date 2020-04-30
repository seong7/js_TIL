<h1>How JavaScript Works</h1>

<ol>
    <li>
        <h3>
            Hoisting
            <a href="https://github.com/seong7/js_TIL/blob/master/03-how-JS-works/script.js#L2">
                >>>
            </a>
        </h3>
        <ol>
            <li>function</li>
            <li>variable</li>
        </ol>
    </li>
    <li>
        <h3>
            Scoping Chain
            <a href="https://github.com/seong7/js_TIL/blob/master/03-how-JS-works/script.js#L72">
                >>>
            </a>
        </h3>
        <ul>
            <li>Variable, Function 모두 Scope로 접근 제한 받음</li>
        </ul>
    </li>
    <li>
        <h3>
            'This' Keyword
            <a href="https://github.com/seong7/js_TIL/blob/master/03-how-JS-works/script.js#L118">
                >>>
            </a>
        </h3>
        <ul>
            <li>
                Method 가 아닌 모든 Function 내 'this'는 항상 Window object return 함<br/>
                    (Method 내에 선언된 Function declaration 또한 마찬가지)
                <a href="https://github.com/seong7/js_TIL/blob/master/03-how-JS-works/script.js#L147">
                    >>
                </a><br/>
                    (이름 없이 구현부만 작성된 call back function 또한 마찬가지) 
            </li>
        </ul>
    </li>
</ol>
