# Package 설정

- ## Webpack, Babel

  - ### package 다운로드

    > webpack  
    > webpack-cli  
    > webpack-dev-server  
    > html-webpack-plugin  
    > @babel/core  
    > @babel/preset-env  
    > babel-loader  
    > @babel/polyfill (dependency 임)

  - ### package 설정

    #### 1. **[webpack.config.js](../webpack.config.js)** 설정

    1. **entry point** : <u>polyfill</u> 도 포함해줘야함
    2. **output**
    3. **loaders** : module 속성에 loaders (babel-loader)
    4. **plugins** : 사용할 plugins (html-webpack-plugin)

    #### 2. **[package.json \_ scripts](https://github.com/seong7/js_TIL/blob/bc57b4dfe2dcdd32417937b609c05a7a9a2102b4/9-modern-JS/package.json#L6)** 설정

          $ npm run (script 지시어)

    1. **webpack** 지시어 설정 후 bundling test (dev, build)
    2. **webpack-dev-server** 지시어 설정 후 serving test (start)
       > bundle.js 없이도 실행되는지도 확인

    #### 3. **[babel.config.json](../babel.config.json)** 설정

      <pre>    
      // babel.config.json 설명
      
      {
          "presets" : [               // code transform(convert) plug-in 들의 collection
                                      // (__실제 transform 을 하는 code 들)
    
              ["@babel/env", {               // env = environment : 어떤 환경에서 코드가 동작하길 원하는지 설정
                                                  //npm 에서 @babel/preset-env 패키지 다운 받았음
    
                  "targets": {               // env 세부 설정 영역
                      "browsers":[             
                          "last 5 versions",  // "last 5 versions" of all the "browsers" 에 모두 동작하도록
                                              // 설정에 따라 어떤 ES6+ features 를 transform 해야하는지
                                              // babel 이 자동으로 파악한다. 
    
                                              // "env" 외에 다른 preset 을 사용할 경우 수동으로 feature 를 
                                              // 명시해줘야하는 경우가 많다.
    
                                              // "last 2 (또는 10) version 등등 다 가능
    
                          "ie>=8"             //  Internet Explorer 최소 8 이상에서 동작하도록 설정
          ]}}]]}
    
      // 단, es5 에서 포함되지 않았던 기능들 (promise object / Array from ... )은
      // babel-loader 에서 transform 할 수 없음
      // -> <strong>polyfill</strong> 사용으로 해결
      </pre>

    #### 4. 최종 Set Up Test

    - bundle.js 의 code 길이가 babel 사용 전 보다 훨씬 길어짐
    - bundle.js 에서 polyfill 검색하여 이행 여부 확인
