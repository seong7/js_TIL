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

 // Controller Module
 var budgetController = (function(){

    var x = 23;     // private

    var add = function(a){      // private
        return x + a;
    }

    return {  // 객체 형태로 여러 method 들 또는 variable 들 return 가능
        publicTest: function(b){    // public (innerfunction)
           return add(b);
        }
    }

 })();


 // UI Module
 var UIController = (function(){

    // code

})();


 // Conroller
 var controller = (function(budgetCtrl, UICtrl){  // 83 line 에서 넣은 parameter 에 대한 내부 정의

    //budgetController.publicTest(3);  // 이렇게해도 동작하지만 독립성이 줄어듬 
                                    //  => budgetController 의 이름이 바뀔 경우 이 module 내에도 모두 바꿔줘야함
    var z = budgetCtrl.publicTest(3); // : better way

    return {
        anotherPublic: function(){
            console.log(z);
        }
    }


 })(budgetController, UIController);  // parameter 