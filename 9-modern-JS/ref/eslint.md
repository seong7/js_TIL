# ESLint 설정

- ### ESLint 란?

  > - javascript **문법검사**를 해주는 tool  
  >   문법 검사 조건들을 **custom 설정**할 수 있음
  > - 보통 **library** 로 배포된 유명 문법 설정을 가져다 사용  
  >   ex) airbnb

- ### 실행

  - vscode extension 설치
  - npm 에서 관련 package 다운로드
    > eslint  
    > eslint-config-airbnb (가장 많이 사용되는 규칙)  
    > eslint-plugin-import  
    > [[React.js 사용시 참조 >>]](https://velog.io/@velopert/eslint-and-prettier-in-react)

- ### 설정

  - [.eslintrc.json]() 또는 package.json 의 "eslintConfig": {} 에 custom 설정

- ### ESLint 검사 무시하는 법
  <!-- prettier-ignore -->
  1. 페이지 전체 : 가장 상단에 /* eslint-disable */ 기입 
  2. line 별 무시 : vscode problem 경고란에서 설정 가능
