 var data1 = prompt('Enter your name');


document.getElementById('current').innerHTML = data1;

window.addEventListener('load', init);
var time = 4;

var score = 0;

var alive;


var timeinput = document.getElementById('time');
var wordinput = document.getElementById('currentword');
var gameword = document.getElementById('gameword');
var message = document.getElementById('message');
var timeleft = document.getElementById('timeleft');

var updatedscore = document.getElementById('score');
var words = [
'hello',
'crabby',
'synonymous',
'harsh',
'friends',
'deeply',
'bike',
'abrasive',
'transport',
'pointless',
'sigh',
'sad',
'apparel',
'coal',
'serve',
'mushy',
'gentle',
'move',
'sad',
'bury',
'worried',
'pine',
'level',
'paddle',
'lacking',
'summer',
'well-to-do',
'vase'
];


function init(){
gameword.addEventListener('input', match);
showword(words);
setInterval(countdown, 1000);

setInterval(check, 50);
}

function showword(words){
    var rand = Math.floor(Math.random() * words.length);

    wordinput.innerHTML = words[rand];
}

function countdown(){
    if(time > 0){
        time--;
    }else if(time == 0){
        alive = false;
    }
    timeleft.innerHTML = time;
}

function check(){
    if(!alive && time == 0){
message.innerHTML = "Failed!! That's okay, type the word to continue playing";
score = 0;

    }
}

function match(){
    if(matchdata()){
alive = true;
time = 5;
showword(words);
gameword.value = '' ;
score++;
}
if(score == -1){
    updatedscore.innerHTML = 0;
}
updatedscore.innerHTML = score;
}

function matchdata(){
    if(gameword.value === wordinput.innerHTML){
        message.innerHTML = 'Awesome!!';
        return true;
    }else{
    message.innerHTML = ' ';
    return false;
        }
}