# Modern JavaScript

- ## node.js / npm  ecosystem
    : 3 party open source tool, __libraries, frameworks__ 사용 가능하게 해줌   
    - ### node.js package 두 종류:   
    > __Library, Framework__ :    
    React, Vue, Angular, Lodash, Jquery 등   

    > __Development Tools__ :   
    tast automation, automatic browser reloading, compile to ES5

    ![npmEcosystem](ref/npmEcosystem.JPG)

    - ### npm (Node Package Manager) 이란?
        : __node.js 의 package__ (라이브러리, 프레임워크, dev tool) 들을 __설치, 공유, 관리__ 해주는 command 기반의 tool   
    
    - ### npm package 대표적인 종류 :

        - __- BABEL__   
        : ES6 / ESNext(7, 8) 를 ES5 로 compile 해주는 tool

        - __- Webpack__   
        : _ES6 Modules_ 로 인해 JS의 모듈화가 가능해짐   
        (각 part 별로 파일을 나눌 수 있음)   
        >
        > 하지만, 아직 이 기능을 지원하지 않는 browser 가 많음
        >> => _Module Bundler_ 사용하여 해결 (대표적: __WebPack__)
        >
        >__- WebPack 의 기능__
        >- _Bundle Modules_
        >- _Decrease JS bundle size_ (treeshaking 알고리즘 사용)
        >- _Code Splitting_
        >- _Load Assets_ (sass, images 등)
    
    - ### npm package 실행방법 :
        - npm scripts 사용   
        모든 package를 cmd line 에서 자동으로 실행할 수 있게 해줌

    - ### package.json
        1. #### package.json 생성
                command line 명령어 (프로젝트 폴더에서 입력)
                $ npm init
                  
                  각 질문에 값 입력 / () 안의 값은 default

        2. #### Webpack 설치
                $ npm install webpack --save-dev
                  
                  --save-dev : webpack 을 프로젝트의 devDependency 로 지정한다는 의미
                               package.json 에서 확인 가능
        
        3. #### Jquery 설치
                $ npm install jquery --save

                  - devDependency 설정은 제외
                  -  dependencies 로 지정됨

        
