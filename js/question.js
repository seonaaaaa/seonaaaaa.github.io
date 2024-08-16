// data.js 파일에서 const question = [] 만 가져오기

import {questions} from './data.js';

//찾기 : querySelector 
const progressValueEl =  document.querySelector('.progress .value');
const numberEl = document.querySelector('.number');
const questionEl = document.querySelector('.question');
const choice1El = document.querySelector('.choice1');
const choice2El = document.querySelector('.choice2');

let currentNumber = 0;
let mbti= '';
let question = '';

function renderQuestion() {
  question = questions[currentNumber];
  numberEl.innerHTML = question.number;
  questionEl.innerHTML = question.question;
  choice1El.innerHTML = question.choices[0].text;
  choice2El.innerHTML = question.choices[1].text;
  progressValueEl.style.width = (currentNumber+1)*10 + '%';
}

renderQuestion()

choice1El.addEventListener('click', function(){
  nextQuestion(0)});
choice2El.addEventListener('click', function(){
  nextQuestion(1)});
    
function nextQuestion(choiceNumber){
  mbti += question.choices[choiceNumber].value;
  if(currentNumber === questions.length-1){
    // /results.html? queryString
    location.href='./results.html?mbti=' + mbti;
  }  
  currentNumber += 1;
  renderQuestion();
}
/** HTTP Method
 *  1. Get : 데이터를 숨기지 않고 보냄
 *  2. Post : 데이터를 숨겨서 보냄 */