// webpack 사용을 위한 설정 파일 

/* 
    webpack 의 네 가지 주요 개념 (설정 사항)

    1. entry point   : bundling 시작점 (하나 또는 다수의 파일)
    2. output        : bundle 파일이 저장될 path 및 name 지정
    3. loaders       : module 속성에 loaders 지정
                      * loader 의 역할
                        - 여러 파일들을 import, load 할 수 있게 해줌
                        - converting (sass -> css || es6+ -> es5) 
    4. plugins       : 사용할 plugins 지정
    
    (추가 설정)
    - server
*/


const path = require('path');   // node js 의 built in 'path' package 호출하여 변수 path 에 저장
const HtmlWebpackPlugin = require('html-webpack-plugin');  // 설치한 plugin 호출  : fn constructor return 함 

module.exports = { // node js 문법 , 해당 Object 를 export 함

    entry: ['@babel/polyfill', './src/js/index.js'], 
                                  // entry point 지정 : webpack 이 bundling 을 시작하는 지점
                                    // 하나 또는 다수의 파일 지정 가능 (다수로 지정할 때는 [] 로 입력)
                                    //   ./  : 현재 폴더 나타냄
                                    // '@babel/polyfill' : polyfill 된 코드들은 dependency 이므로 따로 webpack bundling 의 entry 로 설정해줘야함

    output: {                    // output 지정 : bundle file 이 저장될 path 와 name 을 지정
 
        path: path.resolve(__dirname, 'dist'),   // absolute path(절대 경로) 가 들어가야함
                          // __dirname : 'path' package 에서 접근하게 해주는 current absolute path 값 가진 변수
                          // 'dist' : bundle 파일이 저장될 폴더 위치

                          //path.resolve() 를 통해 두 경로를 join 시킨다. (합침)

        filename: 'js/bundle.js'  // bundle 파일이 저장될 세부 위치 + 이름

    }, 
   // mode: 'development',     // Development mode  ( 지우고 package.json 에 script 에 기입했음 __dev / prod 모드 즉시 사용 용이하도록)
    //mode: 'production',     

    devServer: {               // webpack-dev-server 설정 영역
      contentBase: path.join(__dirname, 'dist')       // webpack 이 file 을 serve 할 폴더 지정 __ dis (distribution) : 배포 폴더 / src : 개발용 폴더
    },

    
    plugins: [                            // plugin  설정 영역

      new HtmlWebpackPlugin({                     // html-webpack-plugin  설정 영역
        filename: 'index.html',
        template: './src/index.html'              // 지정된 html 파일을 복사하여 devServer 영역에의 contentBase 영역에서 stream 해준다.
      })   
    ],
    // webpack-dev-server  :  bundle.js 나 index.js 등 처리된 파일들을 disk 상 (/dist 폴더)에 저장하지 않고도 가상의 공간 띄워 server 에 stream 해준다.
    // disk 상에서 처리된 파일을 실제로 확인하려면 'dev' 나 'build' 명령어를 실행해야한다. 

    module: {                   // Loader 설정 영역 (babel-loader)
      rules: [            // 각각의 loader 별 객체를 담은 배열 설정해줌
        {           
          test: /\.js$/,  // regular expression(regex)  모든 .js 파일을 test 한다는 의미  ($ : 끝)
          exclude:/node_modules/,   // (regex) node_modules 폴더 안의 .js 파일은 제외시킴 (own project 에만 적용하는 것이 목적)
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
};

/* 
    webpack 4 의 새로운 features 

    - Development mode
      : build the bundle without minifying the code (코드 압축 없이 bundling)
        -> 속도 증가
        -- 개발 단계에서는 코드 압축까지 할 필요 없기 때문에 기능 개발됨

    - Production mode
      : automatically enable all kinds of optimization
        자동으로 모든 최적화 기능 실행 (minification_압축, tree shaking)
        -> 최종 bundle 의 size 최소화
*/