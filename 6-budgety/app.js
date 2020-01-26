/*
  
 App-Structure 설계 
 
  1. To-Do List 나열
    Add Event Handler
    Get input values
    Add the new Item to our data structure
    Add the new item to the UI
    Calculate Budget
    Update the UI
  
  2. Module 로 세분화
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
        - 원할 경우 각각의 Module 만 다른 코드에 사용가능함 (separation of concerns)
            -> 각각의 Module 은 서로의 존재를 모르는 상태로 동작함 (분리됨)


  3. Module 생성 
        - Module Pattern 사용
            Module Pattern : 
            -> closure , IIFE 사용
            -> public 으로 공개할 function 들을 포함하고 있는 object 를 return 시킴  

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
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals:{
            exp: 0,
            inc: 0
        }
        // allExpenses: [],
        // allIncomes: []
    };

    return {  // public methods 선언부 

        addItem: function(type, des, value){
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

        testing: function(){
            console.log(data);
        }
    }
     
})();

///////////////////////////
// UI CONTROLLER Module
///////////////////////////
var UIController = (function(){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn' 
    }
    
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either 'inc' or 'exp'
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        
        getDOMstrings: function(){
            return DOMstrings;
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
            //console.log(event);  // keypress event 객체에서 눌려진 key 의 keycode property 값 확인 가능 
            if(event.keyCode === 13 || event.which === 13){  // 오래된 browser 는 event.which 를 사용함
                // console.log('Enter pressed'); 
                
                ctrlAddItem();
            }
        });
    };


    var ctrlAddItem = function(){
        var input, newItem;

        // 1. Get the filled input data
        input = UICtrl.getInput();
         // console.log(input);

        // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        //console.log(newItem);

        // 3. Add the item to the UI controller

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        
    };

    return{
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    };


 })(budgetController, UIController);  // parameter 

controller.init();