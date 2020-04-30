/*
    
    GAME RULES: (app.js부분)

    - The game has 2 players, playing in rounds
    - In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
    - BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
    - The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
    - The first player to reach 100 points on GLOBAL score wins the game


    YOUR 3 CHALLENGES  (challenge 부분 _새 규칙)
  
    Change the game to follow these rules:
    // 1. A player looses his ENTIRE score when he rolls two 6 in a row. 
       After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
    2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. 
       (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
    // 3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. 
       (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundScore, activePlayer, gamePlaying, goalScoreOpen, previousDice, goalScore;

init();

// 'ROLL' 버튼 Event Listener
document.querySelector('.btn-roll').addEventListener('click', function(){    // anonymouse function 이용
    // Anonymouse function 실행문  : 해당 eventListerner function 내에서만 실행 가능한 구역

    
    // Is game is playing now ?
    if(gamePlaying){
        
        // 목표 점수 get
        setGoalScore();
        // 목표 점수 null 이 아니면 실행
        if(goalScore){

            // 목표 점수 입력칸 disabled = true;
            goalScoreDisabled();
            
            // 1. Random Number
            var dice_0 = Math.floor(Math.random()*6) +1;
            var dice_1 = Math.floor(Math.random()*6) +1;
            
            // 2. Display the result
            var diceDOM_0 = document.querySelector('.dice-0'); 
            var diceDOM_1 = document.querySelector('.dice-1'); 
            diceDOM_0.style.display = 'block';
            diceDOM_1.style.display = 'block';
            diceDOM_0.src = '../dice-'+ dice_0 + '.png'; // src 로 쓰면 <img> 의 src 를 조작 가능
            diceDOM_1.src = '../dice-'+ dice_1 + '.png'; // src 로 쓰면 <img> 의 src 를 조작 가능
            
            // 3.
            
            // if : 현재 주사위 중 1 존재  ==> nextPlayer()
            if(dice_0 == 1 || dice_1 == 1){
                nextPlayer();
                
                // else if : 이전 주사위 중 6 존재 and 현재 주사위 중 6 존재 ==> nextPlayer()   
            }else if(previousDice[0] == 6 || previousDice[1] == 6){
                if(dice_0 == 6 || dice_1 ==6){
                    nextPlayer();
                }else{
                    // else : Update the round score   
                    addRoundScore(dice_0, dice_1);
                }
            }else{
                // else : Update the round score   
                addRoundScore(dice_0, dice_1);
            }
        }
    }
});

// 'HOLD' 버튼 Event Listener
document.querySelector('.btn-hold').addEventListener('click', function(){
    // Is game is playing now ?
    if(gamePlaying){

        // 목표 점수 null 이 아니면 실행
        if(goalScore){
            
            // 1. Add CURRENT Score to GLOBAL Score 
            scores[activePlayer] += roundScore;  // activePlayer 번호가 scores 배열의 자리수 나타냄
            
            // 2. Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            
            
            // 3. Check If a Player Won The Game
            if(scores[activePlayer] >= goalScore){
                
                // game stops
                gamePlaying = false;
                
                // Change player name 
                document.querySelector('#name-' + activePlayer).textContent = 'WINNER!'; 
                
                // Dice Display 'none'
                document.querySelector('.dice-0').style.display = 'none';
                document.querySelector('.dice-1').style.display = 'none';
                
                // Class 조작하여 CSS 변경
                // CSS property 를 하나하나 먹이는 것보다 아래처럼 class 를 조작해주는 것이 효율적임
                document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            } else{
                // 4. Next Player
                nextPlayer();
            };
        }
    }
});


// player 바꾸는 function
function nextPlayer(){
        // Next Player
        activePlayer === 0 ? activePlayer=1 : activePlayer=0;
        roundScore = 0;
        previousDice = [0, 0];
        
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';

        // toggle class ( toggle 방식  :  on -> off || off -> on 자동 변경 )
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice-0').style.display='none';
        document.querySelector('.dice-1').style.display='none';
};

// new Game 버튼  Event Listener
document.querySelector('.btn-new').addEventListener('click', init); //  function 호출에 () 가 붙지 않는 것 주의

function init(){

        scores = [0, 0];
        roundScore = 0;
        activePlayer = 0;
        previousDice = [0, 0];
        gamePlaying = true;
        goalScoreOpen = true;
        
        document.querySelector('.goalScore').disabled = false;
        document.querySelector('.dice-0').style.display = 'none';
        document.querySelector('.dice-1').style.display = 'none';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('#name-0').textContent = 'Player 1';
        document.querySelector('#name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');  // 최초에 player 0 이 active 임
        // remove 를 먼저해줘야 class가 중복 추가 되는 것을 막을 수 있음
};

// 목표점수 설정하는 function
function setGoalScore(){
    goalScore = document.querySelector('.goalScore').value;
    if(!goalScore){
        alert('목표점수를 입력하세요.');
    }
};

function goalScoreDisabled(){
    document.querySelector('.goalScore').disabled = true;
}

// RoundScore 에 현재 주사위값 더하는 function
function addRoundScore(dice_0, dice_1){
    // save dice values
    previousDice = [dice_0, dice_1];
    // Add Score to roundScore
    roundScore += (dice_0 + dice_1);
    document.querySelector('#current-' + activePlayer).textContent =  roundScore; 
};