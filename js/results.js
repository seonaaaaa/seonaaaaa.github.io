import {results, mbtis} from './data.js';

const mbti = new URLSearchParams(location.search).get('mbti');

let mbtiNumber = mbtis[mbti];
let result = results[mbtiNumber];

console.log(result);

const title = document.querySelector('.page-title');
const character = document.querySelector('.character');
const boxes = document.querySelectorAll('.box');
const jobs = document.querySelectorAll('.job');
const lectureUrl = document.querySelector('.lecture');
const lectureImg= document.querySelector('.lecture img')

title.innerHTML = result.title;
character.src = result.character;
boxes.forEach(function(boxEl, index){
  boxEl.innerHTML = result.results[index];
})
jobs.forEach((job, index)=>{
  job.innerHTML = result.jobs[index];
})
lectureImg.src=result.lectureImg;
lectureUrl.href=result.lectureUrl;