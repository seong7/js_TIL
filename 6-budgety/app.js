/*
    STEP 1 !!!!

 App-Structure 설계 
 
  1. To-Do List 나열
    Add Event Handler
    Get input values
    Add the new Item to our data structure
    Add the new item to the UI
    Calculate Budget
    Update the UI
  
  2. Module 3개로 To-Do List 분류
    - UI Module
        Get input values
        Add the new item to the UI
        Update the UI 

    - Data Module
        Add the new Item to our data structure
        Calculate Budget

    - Controller Module
        Add Event Handler

    * module 사용의 목적
        - 관련된 코드들을 함께 묶음
        - data encapsulation
            -> module 내 private variable, function 선언하여 안전한 scope 생성
            -> 원하는 경우 public method 또한 선언 (public interface 또는 API 라고 불림)
        - 원할 경우 각각의 Module 만 추출하여 다른 앱에 사용가능함 (separation of concerns)
            -> 각각의 Module 은 서로의 존재를 모르는 상태로 동작함 (분리됨)


  3. Module 생성 
        - Module Pattern 사용
            Module Pattern : 
            -> closure , IIFE 사용
            -> public 으로 공개할 function 들을 포함하고 있는 object 를 return 시킴  

 */


 /*
 -------------------------------------

    STEP 2 !!!!

    App-Structure 설계 

    1. To-Do List 나열
      Add Event Handler : delete 버튼
      Delete the item from our data structre
      Delete the item to the UI
      Re-calculate budget
      Update the UI

 */



 
 ///////////////////////////
 // BUDGET CONTROLLER Module
 ///////////////////////////
 var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };

    // var allExpenses = [];
    // var allIncomes = [];
    // var totalExpences = 0;

    var calculateTotal = function(type){    // data.totals 의 값을 계산
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;  // =  (sum = sum + cur.value;)
        });
        data.totals[type] = sum;
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals:{
            exp: 0,
            inc: 0
        },
        budget: 0, 
        percentage: -1  // -1 : 값이 없는 경우
    };

    return {  // public methods 선언부 

        addItem: function(type, des, value){    // 새로운 data 생성 
            var newItem, ID;

            //Create new ID
            if(data.allItems[type].valueOf.length > 0){  // Array.length === 0 일 때 방지
            // 객체명[key명] : 해당 property 의 value 에 접근하는 방법
                ID = data.allItems[type][data.allItems[type].length -1].id +1; // ID = last ID + 1
            } else{
                ID = 0;
            }

            //Create new item based on 'inc' or 'exp' type
            if(type === 'exp'){
                newItem = new Expense(ID, des, value);
            }else if(type === 'inc'){
                newItem = new Income(ID, des, value);
            }

            // Push item into data struture;
            data.allItems[type].push(newItem);
                // console.log(data.allItems.exp);
                // console.log(data.allItems.inc);
                // console.log(data.allItems);

            // Return the new element
            return newItem;
        },

        calculateBudget: function(){        // 지출, 수익 변화에 따른 총 Budget 계산
            
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');  // __ total 객체의 exp 와 inc 값 결정됨

            // calculate the budget : income - expenses
            data.budget = data.totals.inc - data.totals.exp;


            // calculate the percentage of income that we spent

            if(data.totals.inc > 0){    // 0으로 나누는 것을 방지 (0으로 나누면 Infinty return 함)
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
                // Expences = 100 / Income = 300, spent 33.333% = 100/300 = 0.333 * 100
            } else{
                data.percentage = -1;   // -1 : 값이 없는 것을 의미함
            }

        },

        getBudget: function(){      // return Budget 
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function(){  // 개발하는 동안 interner data 를 유용하게 확인 할 수 있도록 하는 method
            console.log(data);
        }
    }
     
})();





///////////////////////////
// UI CONTROLLER Module
///////////////////////////
var UIController = (function(){
    
    // class 명들을 미리 저장해두어 혼란 방지 /  html 수정 시 해당 객체만 수정하면 됨
    var DOMStrings = {  
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'
    }
    
    
    return {
        getInput: function(){       // new Item 의 입력값 UI에서 가져오기
            return {
                type: document.querySelector(DOMStrings.inputType).value, // will be either 'inc' or 'exp'
                description: document.querySelector(DOMStrings.inputDescription).value,
                // value: document.querySelector(DOMStrings.inputValue).value
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)  // float 으로 변환
            };
        },

        addListItem: function(obj, type){       // 새 Item 을 UI에 추가
            var html, newHtml, element;

            // Create HTML Sring with placeholder text
            if(type === 'inc'){
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
                // single quote 로 시작했으므로 " 를 끝으로 인식하지 않는다.
            }else if (type === 'exp'){
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            
            // Replace the placeholder text with some actual data (String data 다루기)
            newHtml = html.replace('%id%', obj.id);     
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);  
                // String 으로 적힌 HTML 요소를 지정한 요소의 'beforeend' _ 닫는 위치 앞에 삽입
        },
        
        clearFields: function(){        // Item 입력창 비워주기
            var fields, fieldsArr;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
                        // Html 요소를 LIST 형태로 return               // , 사용할 수 있음 !

            // LIST -> Array 로 변환 
            fieldsArr = Array.prototype.slice.call(fields);
            // slice method 의 원래 사용법 :  (Array _function constructor_ 의 prototype 내 메소드임)
                //  fieldsArr.slice();   (fieldsArr 가 Array type 이라면) 
                //  ==>  array 의 복사본 array 를 return 함 (param : 복사 시작과 끝 index)
                
                //  하지만 여기서 fieldsArr 은 List type 이므로 call method 를 통해 method borrowing 함
                                                                                // 5장에서 배움
                //  fields List 를 call method 의 (this) 매개변수로 지정
            // Array.slice(fields);  ??  
            
            fieldsArr.forEach(function(current, i, arr){  // callback function (current element, index, entire array)
                current.value = "";
            });

            fieldsArr[0].focus();  // add__description input 에 focus 줌
        },

        displayBudget: function(obj){       // 총 Budget UI 업데이트

            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expenseLabel).textContent = obj.totalExp;
            
            if(obj.percentage >0){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage;
            }else{
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';
            }
        },

        getDOMstrings: function(){         // 다른 Module 에서 사용하기 위해 DOMStrings return
            return DOMStrings;
        }
        
        
    };
    
})();





///////////////////////////
// GLOBAL APP CONTROLLER
///////////////////////////
var controller = (function(budgetCtrl, UICtrl){  // 83 line 에서 넣은 parameter 에 대한 내부 정의
    
    var setupEventListeners = function(){  // addEventListener fuction 들을 function expression 에 담았으므로
                                           // 해당 function 은 호출이 되어야만 실행됨  => init() 에서 호출하기
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        // keypress event 는 global document 에 event listener 추가해줘야 함
        document.addEventListener('keypress', function(event){
                                        // addEventListener 의 익명 function 은 event 각각 event 별로 다름

            console.log(event);  // keypress event 객체에서 눌려진 key 의 keycode property 값 확인 가능 
            if(event.keyCode === 13 || event.which === 13){  // 오래된 browser 는 event.which 를 사용함
                // console.log('Enter pressed'); 
                
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function(){       //  budgetCtrl 에서 새로운 data 생성 후 UI 에 새 item 추가하는 method
        var input, newItem;

        // 1. Get the filled input data
        input = UICtrl.getInput();
         // console.log(input);

        if(input.description && !isNaN(input.value) && input.value > 0){      // input 예외 처리
                            // isNaN => (number O => false / number X => true)

            
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            //console.log(newItem);
            
            // 3. Add the item to the UI controller
            UICtrl.addListItem(newItem, input.type);
            
            // 4. Clear the fields
            UICtrl.clearFields();
            
            // 5. Calculate and update the budget
            updateBudget();
            
        }
    };


    var updateBudget = function(){      // 총 Budget 업데이트 후 UI 에 반영
        
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();
        
        // 2. return the budget
        var budget = budgetController.getBudget();

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
        
    };



    return{
        init: function(){       // initiate 하기 위한 public method 선언
            console.log('Application has started.');
            UICtrl.displayBudget({         // variable 없이 객체를 매개변수로 넣어줄 수 있음
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    };


 })(budgetController, UIController);  // parameter 

controller.init();