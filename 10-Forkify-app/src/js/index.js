// // import path 에는 파일의 확장자(.js)를 입력하지 않는다.

// import str from './models/Search';  // default export 로부터 imoprt : 변수 명 아무거나

// import { add as a, multiply as m, ID } from './views/searchView'; // named export 로부터 import 방법 1
//                                                                         // export 문과 동일한 변수명 사용
//             // as : 현재 파일에서 사용할 변수명으로 이름 변경
// console.log(`Using imported functions! ${a(ID, 2)} and ${m(3, 5)}. ${str}}`);

// import * as searchView from './views/searchView';   // named export 로부터 import 방법 2
//                                                             // export 문을 모두 하나의 객체에 담아 받아 사용하기
// console.log(`Using imported functions! ${searchView.add(searchView.ID, 2)} and ${searchView.multiply(3, 5)}. ${str}}`);


import Search from './models/Search';
import * as searchView from './views/searchView';
import {elements} from './views/base';

/*
 *** Global state of the app
 *  - Search object
 *  - Current recipe object
 *  - Shopping list object
 *  - Liked recipes
 */
const state = {};

const controlSearch = async () =>{      // async fn 선언 _ getResults() 가 Promise 이므로 (Search.js 참조)
    // 1) Get query from view
    const query = searchView.getInput() // TODO
    console.log(query);

    if(query){
        // 2) New search object and add to state
        state.search = new Search(query);   // global state object 인 state 에 Search 객체를 저장한다.

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        
        
        // 4) Search for recipes
        await state.search.getResults();  // state 객체에서 사용 (await 이므로 결과가 resolve 또는 reject 될 때까지 기다림)
        
        // 5) Render results on UI
        searchView.renderResults(state.search.result);
    }
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();     // default event delegation 을 막음
    controlSearch();
});
