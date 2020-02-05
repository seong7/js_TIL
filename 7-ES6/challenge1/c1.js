/////////////////////////////////
// CODING CHALLENGE

/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees

4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.
HINT: Use some of the ES6 features: classes, subclasses ( + prototype chain), template strings(literal), default parameters, maps, arrow functions( +this ), destructuring, etc.
                                    let, const, Block, IIFE, Array's methods, spread operator, Rest operator
*/

/*
    ** 설계 **

    goal
    - park (3개) , street (4개) 에 대한 연말 보고서 작성
    - name, builtYear 가짐
    - 보고서 내용
      1 각 park 의 tree density (나무 수 / park 넓이)
      2 Average age of parks   (sum of all ages / park 수)
      3 나무 1000 개 이상 가진 park 의 이름

      4 street 들의 총 길이, 평균 길이
      5 street size 분류 (default = normal) [tiny, small, normal, big, huge]  

    todo list

    - controller / data / view(console) module 나누기
    - park, street class 통해 객체 생성 (3개, 4개)
    - 각각의 계산 값 구하기
    - view : 보고서 항목별 String 저장해두고 사용하기
*/


// Data module
const dataCtrl = (function(){
    
    class TownElemenet{
        constructor(name, builtYear){
            this.name = name;
            this.builtYear = builtYear;
        }
    };

    class Park extends TownElemenet{
        constructor(name, builtYear, numOfTree, area){
            super(name, builtYear);
            this.numOfTree = numOfTree;
            this.area = area;
        };
        
        calculateAge(){
            this.age = 2020 - this.builtYear;
        };
    };


    class Street extends TownElemenet{
        constructor(name, builtYear, length, size){
            super(name, builtYear);
            this.length = length;
            this.size = size;
        }
    };


    return{
        addPark: function(name, builtYear, numOfTree, area){
            const parkTest = new Park(name, builtYear, numOfTree, area);
            // console.log(parkTest);
            // console.log(parkTest.calculateAge());
            // console.log(parkTest.age);
        }
    
    
    }
})();

// View module
const viewCtrl = (function(){



})();

// Global Controller
const contorller = (function(){

    const addElement = function(){

        // 1. park 객체 생성  (3개)

        // 2. Street 객체 생성 (4개)

    };


    return{
        init: function(){
            // dataCtrl.addElement('ss', 1992, 30, 20);
        }
    }

})(dataCtrl, viewCtrl);


contorller.init();