/* 
    webpack 의 네 가지 주요 개념

    1. entry point
    2. output
    3. loaders
    4. plugins
*/


const path = require('path');   // node js 의 built in 'path' package 호출하여 변수 path 에 저장

module.exports = { // node js 문법 , 해당 Object 를 export 함

    entry: './src/js/index.js', // entry point 지정 : webpack 이 bundling 을 시작하는 지점
                                    // 하나 또는 다수의 파일 지정 가능 
                                    //   ./  : 현재 폴더 

    output: {                    // output 지정 : bundle file 이 저장될 path 와 name 을 지정

        path: path.resolve(__dirname, 'dist/js'),   // absolute path(절대 경로) 가 들어가야함
                          // __dirname : 'path' package 에서 접근하게 해주는 current absolute path 값 가진 변수
                          // 'dist/js/' : bundle 파일이 저장될 곳

                          //path.resolve() 를 통해 두 경로를 join 시킨다. (합침)

        filename: 'bundle.js'  // bundle 파일의 이름

    } 
    //mode: 'development'     // Development mode  ( 지우고 package.json 에 script 에 기입했음 __dev / prod 모드 변경 용이하도록)
};

/* 
    webpack 4 의 새로운 features 

    - Development mode
      : build the bundle without minifying the code (코드 압축 없이 bundling)
        -> 속도 증가
        -- 개발 단계에서는 코드 압축까지 할 필요 없기 때문에 개발됨

    - Production mode
      : automatically enable all kinds of optimization
        자동으로 모든 최적화 기능 실행 (minification_압축, tree shaking)
        -> 최종 bundle 의 size 최소화
*/