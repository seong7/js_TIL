/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

reset();
function reset(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
};


/* 
  Math.floor() : decimal (소수점 아래) 제거 후 integer 만 return 
  Math.random() : "0<= ? <1" 의 randome 수 return
   -- 1~6 randome 수 출력하기 
      : Math.floor(Math.random()*6) +1 
*/
//console.log(dice);

/*
document.querySelector('#current-0').textContent = dice; 
// querySelector() : css 와 똑같은 방법으로 DOM 지정하되 첫 번째 요소만 지정함 (해결책 추후 학습)
//   .textContent : 해당 객체의 text 요소를 control 하기위한 method  ( text 자체만 지정한다. )
*/

/* setter */                                                                
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; 
                                                                // javascrip code 가 아닌 모든 요소는 string 으로 작성
                                                                // <em> : emphasize _ intalic 처리 함

/* getter */                                                                
var x = document.querySelector('#score-0').textContent;
console.log(x);


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


/* event */

// function btn(){
//     //Do Something Here
// }

    // callback function 이용
//document.querySelector('.btn-roll').addEventListener('click', btn);
                                            // ( event type , callback function )
                                            // callback function : 직접 function 을 call 하지 않고 
                                            //                     function 에 매개변수로 다른 fucntion 을 주는 것 

    // anonymouse function 이용
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    // Anonymouse function 실행문  : 해당 eventListerner function 내에서만 사용 가능


    // 1. Random Number
    var dice = Math.floor(Math.random()*6) +1;

    // 2. Display the result
    var diceDOM = document.querySelector('.dice'); 
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png'; // src 로 쓰면 <img> 의 src 를 조작 가능

    // 3. Update the round score IF the rolled number was NOT a 1 
    if(dice !== 1){
        // Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent =  roundScore; 
    }else{
        nextPlayer();        
    }

});



document.querySelector('.btn-hold').addEventListener('click', function(){
    // 1. Add CURRENT Score to GLOBAL Score 
    scores[activePlayer] += roundScore;  // activePlayer 번호가 scores 배열의 자리수 나타냄

    // 2. Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    // 3. Check If a Player Won The Game
    if(scores[activePlayer] >= 20){
        // Change player name 
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'; 

        // Dice Display 'none'
        document.querySelector('.dice').style.display = 'none';

        // Class 조작하여 CSS 변경
            // CSS property 를 하나하나 먹이는 것보다 아래처럼 class 를 조작해주는 것이 효율적임
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        
    } else{
        // 4. Next Player
        nextPlayer();
    };
});


function nextPlayer(){
        // Next Player
        activePlayer === 0 ? activePlayer=1 : activePlayer=0;
        roundScore = 0;
        
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';

        // removing / adding class (class 조작 방법) 
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        // toggle class ( toggle 방식  :  on -> off || off -> on 자동 변경 )
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display='none';
};