# js_TIL
javascript Today I Learned
<hr/>

<h2>Language Basics</h2>
<ol>
    <li>
        Variables and Data Types
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L2">
            >>>
        </a>
        <ol>
            <li>
                Variable Naming Tip
            </li>
        </ol>
    </li><br/>
    <li>
        Type Coercion (형 변환)
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L38">
            >>>
        </a>
    </li><br/>
    <li>
        Basic Operators
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L65">
        >>>
        </a>
        <ol>
            <li>Logical</li>
            <li>Type of</li>
            <li>Multiple Assignments</li>
        </ol>
    </li><br/>
    <li>
        If / Else Statement
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L101">
            >>>
        </a>
    </li><br/>
    <li>
        The Ternary Operator
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L118">
            >>>
        </a>
    </li><br/>
    <li>
        Switch Statements
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L130">
            >>>
        </a>
        <ol>
            <li>String 이용</li>
            <li>Condition Stetement 이용</li> 
        </ol>
    </li><br/>
    <li>
        Truthy and Falsy Values
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L167">
            >>>
        </a>
        <ol>
            <li>Falsy values :   undefined, null, 0, '', NaN </li>
            <li>Truthy values :  NOT falsy values
                <ul>
                    <li>예) if(height){  } </li>
                </ul>
            </li>
            <li>0 또는 '' 을 구분하는 방법</li>
        </ol>
    </li><br/>
    <li>
        Equality Operators
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L190">
            >>>
        </a>
        <ul>
            <li>
                중요 !<br/>
                == operater : type coercion O<br/>
                === operater : type coercion X
            </li>
        </ul>
    </li><br/>
    <li>
        Functions
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L204">
            >>>
        </a>
        <ul>
            <li>
                Function Browing 사용법
                <a href="https://github.com/seong7/js_TIL/blob/505baf69936f2271968baea58437f1a93ca7989b/3-how-JS-works/script.js#L168">
                    >>
                </a>
            </li> 
        </ul>
    </li><br/>
    <li>
        Function Statements, Declaration and Expressions
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L233">
            >>>
        </a>
        <ul>
            <li>Declaration : HOISTING O</li>
            <li>
                Expressions : HOISTING X
                <a href="https://github.com/seong7/js_TIL/blob/505baf69936f2271968baea58437f1a93ca7989b/3-how-JS-works/script.js#L5">
                    [참고_ hoisting]
                </a>
            </li>    
        </ul>
    </li><br/>
    <li>
        Arrays
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L265">
            >>>
        </a>
        <ol>
            <li>Initialize new array</li>
            <li>Mutate array data</li>
            <li>Different data types</li>
        </ol>
    </li><br/>
    <li>
        Objects and properties
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L296">
            >>>
        </a>
        <ol>
            <li>object 는 value 에 index 대신 이름(key) 을 주어 사용할 수 있음</li>
        </ol>
    </li><br/>
    <li>
        Objects and Methods
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L330">
            >>>
        </a>
        <ol>
            <li>this variable 의 사용</li>
            <li>method를 통해 object에 property : value 추가</li>
        </ol>
    </li><br/>
    <li>
        Loops and iteration
        <a href="https://github.com/seong7/js_TIL/blob/92c296a3643696fc0c8261c1b0107ada48dac6f2/2-JS-basics/script.js#L351">
            >>>
        </a>
        <ol>
            <li>for</li>
            <li>while</li>
            <li>continue, break</li>
        </ol>
    </li><br/>
</ol>
<hr/>

<h2>How JavaScript Works</h2>
<ol>
    <li>
        Hoisting
        <a href="https://github.com/seong7/js_TIL/blob/505baf69936f2271968baea58437f1a93ca7989b/3-how-JS-works/script.js#L2">
            >>>
        </a>
        <ol>
            <li>function</li>
            <li>variable</li>
        </ol>
    </li>
    <li>
        Scoping Chain
        <a href="https://github.com/seong7/js_TIL/blob/505baf69936f2271968baea58437f1a93ca7989b/3-how-JS-works/script.js#L72">
            >>>
        </a>
        <ul>
            <li>Variable, Function 모두 Scope로 접근 제한 받음</li>
        </ul>
    </li>
    <li>
        'This' Keyword
        <a href="https://github.com/seong7/js_TIL/blob/505baf69936f2271968baea58437f1a93ca7989b/3-how-JS-works/script.js#L118">
            >>>
        </a>
        <ul>
            <li>
                Method 가 아닌 모든 Function 내 'this'는 항상 Window object return 함<br/>
                 (Method 내에 선언된 Function declaration 또한 마찬가지)
                <a href="https://github.com/seong7/js_TIL/blob/505baf69936f2271968baea58437f1a93ca7989b/3-how-JS-works/script.js#L147">
                    >>
                </a>
            </li>
        </ul>
    </li>
</ol>
<hr/>    

<h2>Advanced JavaScript</h2>
정리 파일로 이동
<a href="5-advanced-JS/summary.md">
    >>>
</a>
<hr/>

<h2>Reference Link List</h2>
<ul>
    <li>
        js 연산 처리 순서표 : 
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence">
            JavaScript Operator Precedence Table (MDN)
        </a> 
    </li>
    <li>
        Events 종류 : 
        <a href="https://developer.mozilla.org/en-US/docs/Web/Events">
            JavaScript Event Reference (MDN)
        </a> 
    </li>
    <li>
        생성자의 Property 내 method의 장점 :
        <a href="https://velog.io/@gtobio11/Javascript-Prototype-methods-vs-Object-methods">
         참조 블로그
        </a>
    </li>
</ul>
