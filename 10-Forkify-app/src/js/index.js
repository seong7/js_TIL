// // import path 에는 파일의 확장자(.js)를 입력하지 않는다.

// import str from './models/Search';  // default export 로부터 imoprt : 변수 명 아무거나

// import { add as a, multiply as m, ID } from './views/searchView'; // named export 로부터 import 방법 1
//                                                                         // export 문과 동일한 변수명 사용
//             // as : 현재 파일에서 사용할 변수명으로 이름 변경
// console.log(`Using imported functions! ${a(ID, 2)} and ${m(3, 5)}. ${str}}`);

// import * as searchView from './views/searchView';   // named export 로부터 import 방법 2
//                                                             // export 문을 모두 하나의 객체에 담아 받아 사용하기
// console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}. ${str}}`);


async 
// https://forkify-api.herokuapp.com/api/search