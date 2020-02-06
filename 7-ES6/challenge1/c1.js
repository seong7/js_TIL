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
HINT: Use some of the ES6 features: //classes, //subclasses ( + //prototype chain), template strings(literal), 
                                    //default parameters, //maps, //arrow functions( +this ), //destructuring, etc.
                                    //let, //const, Block, //IIFE, Array's methods, //..spread operator, Rest operator
*/

/*
    ** 설계 **

    goal
    - park (3개) , street (4개) 에 대한 연말 보고서 작성
    - name, buildYear 가짐
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
        constructor(name, buildYear){   /* property 및 method 영역 */
            this.name = name;
            this.buildYear = buildYear;
        }

        /* prototype 영역 (prototype chain 이용) */
        calculateAge(){ // Element 의 나이 계산
            this.age = 2020 - this.buildYear;
        }
    };

    class Park extends TownElemenet{
        constructor(name, buildYear, numOfTree, area){
            super(name, buildYear);
            this.numOfTree = numOfTree;
            this.area = area;
        }
        
        calTreeDensity(){ // park 의 Tree 밀집도 계산
            this.treeDensity = this.numOfTree / this.area;
        }
    };


    class Street extends TownElemenet{
        constructor(name, buildYear, length, size = 3 /*default parameter*/){
            super(name, buildYear);
            this.length = length;
            this.size = size;
        }

        classfySize(){  // street 의 size 분류
            const classification = new Map();
            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'normal');
            classification.set(4, 'big');
            classification.set(5, 'huge');

            this.sizeClass = classification.get(this.size);
        }
    };

    const allData = {
        parksMap : new Map(),
        streetsMap : new Map()
        // numOfParks : this.parksMap.size,
        // numOfStreets : this.streetsMap.size
    };


    return{
        addPark: function(num, name, buildYear, numOfTree, area){       // park 객체 생성 후 Map 에 추가
            const park = new Park(name, buildYear, numOfTree, area);
            park.calculateAge();
            park.calTreeDensity();

            allData.parksMap.set(num, park); // Map 에 추가
        },

        addStreet: function(num, name, buildYear, length, size){        // street 객체 생성 후 Map 에 추가
            const street = new Street(name, buildYear, length, size);
            street.calculateAge();
            street.classfySize();

            allData.streetsMap.set(num, street); // Map 에 추가
        },

        getParkTreeDens: function(){        // 각 park 의 Array [name, tree density] get 
            const treeDens = [];

            allData.parksMap.forEach(el => {
                treeDens.push([el.name, el.treeDensity]);
            });
            return treeDens;
        },

        getParksAvgAge: function(){         // park 들의 평균 연령 get
            let sumAge = 0;
            allData.parksMap.forEach(el => sumAge = sumAge + el.age);

            return sumAge/this.getNumOf('park');
        },

        getNumOf: function(element){        // park 들의 수 get
            if(element == 'park'){
                return allData.parksMap.size;
            }else if(element == 'street'){
                return allData.streetsMap.size;
            }
        },

        get1000TreePkNames: function(){     // 나무가 1000 개 이상이 park name Array get
            const _1000TreePkNames = [];
            allData.parksMap.forEach(el => {
                if(el.numOfTree >= 1000){
                    _1000TreePkNames.push(el.name);
                }
            });

            return _1000TreePkNames;
        },

        getLngSumStreet: function(){     // 길이 총 합 get
            let sum = 0;
            allData.streetsMap.forEach(el => {
                sum = sum + el.length;
                // console.log(el.length);
                // console.log(sum);
            });
            return sum;
        },

        getAvgLngStreets: function(){       // 평균 길이 get
            return this.getLngSumStreet() / this.getNumOf('street');
        },

        getStreeeNm_bY_sC: function(){      // 각 street 의 [name, buildYear, sizeClass] 2중 배열 get
            const arry = [];
            allData.streetsMap.forEach(el => {
                arry.push([el.name, el.buildYear, el.sizeClass]);
            });

            return arry;
        },


        testingElement: function(){
            console.log(allData.parksMap);
            console.log(allData.streetsMap);
        }
    }
})();



// UI module
const UICtrl = (function(){

    const parkReportForm = {
        start : '---- PARKS REPORT ----',
        treeDensity : '%name has a tree density of %density trees per square km.',
        averageAge : 'Our %numParks park(s) have an average age of %averageAge years.',
        treeOver1000 : '%name has more than 1000 trees.'
    };

    const streetReportForm = {
        start : '---- STREETS REPORT ----',
        length : 'Our %numStreets street(s) have a total length of %totalLength km, '
                + 'with an averge of %avrageLength km.',
        size : '%name, built in %buildYear, is a %sizeClass street.'
    };

    const replaceStr = function(wholeText, is, toBe){
        const replacedStr = wholeText.replace(is, toBe);
        return replacedStr;
    };

    let reportForm;

    


    return{
        startParkReport: function(){    // park report 시작 문구 출력
            console.log(parkReportForm.start);
        },

        reportParkTreeDense: function(parkName, treeDensity){   // park tree density  출력
            reportForm = replaceStr(parkReportForm.treeDensity, '%name', parkName);
            reportForm = replaceStr(reportForm, '%density', treeDensity.toString());
            console.log(reportForm);
        },

        reportParksAvgAge: function(numOfParks, avgAge){
            reportForm = replaceStr(parkReportForm.averageAge, '%numParks', numOfParks.toString());
            reportForm = replaceStr(reportForm, '%averageAge', avgAge.toString());
            console.log(reportForm);
        },

        reportTreeOver1000: function(parkName){
            reportForm = replaceStr(parkReportForm.treeOver1000, '%name', parkName);
            console.log(reportForm);
        },

        startStreetReport: function(){    // park report 시작 문구 출력
            console.log(streetReportForm.start);
        },

        reportStreetLength: function(numStreet, totalLength, avgLength ){
            reportFrom = replaceStr(streetReportForm.length, '%numStreets', numStreet);
            reportFrom = replaceStr(reportFrom, '%totalLength', totalLength);
            reportFrom = replaceStr(reportFrom, '%avrageLength', avgLength);
            console.log(reportFrom);
        },

        reportStreetSize: function(streetName, buildYear, sizeClass ){
            reportFrom = replaceStr(streetReportForm.size, '%name', streetName);
            reportFrom = replaceStr(reportFrom, '%buildYear', buildYear);
            reportFrom = replaceStr(reportFrom, '%sizeClass', sizeClass);
            console.log(reportFrom);
        }
    }
})();


// Global Controller
const contorller = (function(){

    // Park 3개 정보
    const parkInfo = [
        [1, 'Green Park', 1987, 215, 0.2],
        [2, 'National Park', 1894, 3541, 2.9],
        [3, 'Oak Park', 1953, 949, 0.4]
    ];

    // Street 4개 정보
    const streetInfo = [
        [1,'Ocean Avenue', 1999, 1.1, 4],
        [2,'Evergreen Street', 2008, 2.7, 2],
        [3,'4th Street', 2015, 0.8],
        [4,'Sunset Boulevard', 1982, 2.5, 5],

    ];

    const ctrlAddEls = function(){  // park, street 객체 생성

        // 1. park 객체 생성
        parkInfo.forEach(el => dataCtrl.addPark(...el));    // spread operator  (배열을 분해해서 매개변수로 입력)

        // 2. Street 객체 생성
        streetInfo.forEach(el => dataCtrl.addStreet(...el));  // spread operator
    };

    const parkTreeDensReport = function(){

        // 1-1. get Array (park 명, treeDensity)
        const treeDensity = dataCtrl.getParkTreeDens();
        // console.log(treeDensity);

        // 1-2. 보고서 작성
        treeDensity.forEach(el => UICtrl.reportParkTreeDense(...el));   // spread Operator
    };

    const parkAvgAgeReport = function(){

        // 2-1. get Average age of parks
        const avgAge = dataCtrl.getParksAvgAge();
        // console.log(avgAge);
        const numOfParks = dataCtrl.getNumOf('park');

        // 2-2. 보고서 작성
        UICtrl.reportParksAvgAge(numOfParks, avgAge);
    };

    const park1000TreesReport = function(){

        // 3-1. 1000 개 이상 가진 park 찾아서 배열로 return
        const pkNames = dataCtrl.get1000TreePkNames();
        // console.log(pkNames);

        // 3-2. 보고서 작성
        UICtrl.reportTreeOver1000(pkNames);
        
    };

    const reportPark = function(){  // park report 생성
    
        // Park Report 시작
        UICtrl.startParkReport();
    
        // 1 Tree Density 보고
        parkTreeDensReport();
      
        // 2 Average age of parks   (sum of all ages / park 수)
        parkAvgAgeReport();
        
        // 3 나무 1000 개 이상 가진 park 의 이름
        park1000TreesReport();
    };

    const reportStreet = function(){

        // street report 시작
        UICtrl.startStreetReport();
        
        // 1. street 들의 총 길이, 평균 길이
        const totalLength = dataCtrl.getLngSumStreet();
        const avgLength = dataCtrl.getAvgLngStreets();
        const numOfParks = dataCtrl.getNumOf('street');
        UICtrl.reportStreetLength(numOfParks, totalLength, avgLength);
        
        
        // 2. street size 분류 (default = normal) [tiny, small, normal, big, huge] 
        const streets = dataCtrl.getStreeeNm_bY_sC();
        streets.forEach(el => UICtrl.reportStreetSize(...el));
    
    };

    return{
        init: function(){
            ctrlAddEls();
            reportPark();
            reportStreet();
        }
    }

})(dataCtrl, UICtrl);


contorller.init();







// answer (lecturer)

// class Element {
//     constructor(name, buildYear) {
//         this.name = name;
//         this.buildYear = buildYear;
//     }
// }


// class Park extends Element {
//     constructor(name, buildYear, area, numTrees) {
//         super(name, buildYear);
//         this.area = area; //km2
//         this.numTrees = numTrees;
//     }
    
//     treeDensity() {
//         const density = this.numTrees / this.area;
//         console.log(`${this.name} has a tree density of ${density} trees per square km.`);
//     }
// }


// class Street extends Element {
//     constructor(name, buildYear, length, size = 3) {
//         super(name, buildYear);
//         this.length = length;
//         this.size = size;
//     }
    
//     classifyStreet () {
//         const classification = new Map();
//         classification.set(1, 'tiny');
//         classification.set(2, 'small');
//         classification.set(3, 'normal');
//         classification.set(4, 'big');
//         classification.set(5, 'huge');
//         console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
//     }
// }


// const allParks = [new Park('Green Park', 1987, 0.2, 215),
//                  new Park('National Park', 1894, 2.9, 3541),
//                  new Park('Oak Park', 1953, 0.4, 949)];

// const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
//                    new Street('Evergreen Street', 2008, 2.7, 2),
//                    new Street('4th Street', 2015, 0.8),
//                    new Street('Sunset Boulevard', 1982, 2.5, 5)];


// function calc(arr) {
    
//     const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
        // reduce() : callback fn 이용                       // initial value : 0 에 모든 요소 값 합한다.
        // previous value 를 매개변수로 호출 가능
        
        // ex) [3, 5, 6].reduce((prev, cur, index) => prev + cur, 0);   // => 뒤의 식 바꿀 수 있음
        //  -> 0 + 3 = 3   ->   3 + 5 = 8   ->   8 + 6 = 48 
            // return :  48 


//     return [sum, sum / arr.length];
    
// }


// function reportParks(p) {
    
//     console.log('-----PARKS REPORT-----');
    
//     // Density
//     p.forEach(el => el.treeDensity());
    
//     // Average age
//     const ages = p.map(el => new Date().getFullYear() - el.buildYear);
//     const [totalAge, avgAge] = calc(ages);
//     console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    
//     // Which park has more than 1000 trees
//     const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
//     console.log(`${p[i].name} has more than 1000 trees.`);
    
// }


// function reportStreets(s) {
    
//     console.log('-----STREETS REPORT-----');
    
//     //Total and average length of the town's streets
//     const [totalLength, avgLength] = calc(s.map(el => el.length));
//     console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
//     // CLassify sizes
//     s.forEach(el => el.classifyStreet());
// }

// reportParks(allParks);
// reportStreets(allStreets);