/*
  
 App-Structure 설계 
 
  1. To-Do List 
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
            -> module 내 private variable, function 선언하여 scoping 
            -> 원하는 경우 public method 또한 선언 (public interface 또는 API 라고 불림)


  3. Module 생성 
        - Module Pattern 사용
            Module Pattern : 
            -> closure , IIFE 사용
            -> public 으로 open 할 function 들 포함하고 있는 object return 함  

 */

 var budgetController = (function(){

    var x = 23;

    var add = function(a){
        return x + a;
    }

    return {
        publicTest: function(b){
            console.log(add(b));
        }
    }

 })();