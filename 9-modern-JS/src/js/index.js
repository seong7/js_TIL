// Global app controller

// webpack 의 entry point 임

import impNum from './test'; // import 할 module 의 path 와 이름
const x = 23;
console.log(`I imported ${impNum} from another module called test.js! Variable x is ${x}`);

// browser 에서 export / import 는 작동하지 않는다. => webpack 사용함