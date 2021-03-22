/**********
* DATA *
**********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];
const imgA = document.querySelector('#d6-roll');
const imgB = document.querySelector('#double-d6-roll-1');
const imgC = document.querySelector('#double-d6-roll-2');
const imgD = document.querySelector('#d12-roll');
const imgE = document.querySelector('#d20-roll');
const resetButton = document.querySelector('#reset-button');

const Nodes = document.querySelectorAll
('#d6-rolls-mean, #d6-rolls-median, #d6-rolls-mode, #double-d6-rolls-mean, #double-d6-rolls-median, #double-d6-rolls-mode, #d12-rolls-mean, #d12-rolls-median, #d12-rolls-mode, #d20-rolls-mean, #d20-rolls-median, #d20-rolls-mode');
reset();


/********************
* HELPER FUNCTIONS *
********************/



const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);
  
  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }
  
  return arr.slice().sort(byNumber);
}




/*******************
* YOUR CODE BELOW *
*******************/

//======== DICE =================
function rollDiceA(){
  const num = getRandomNumber(6);
  imgA.src = `./images/d6/${num}.png`;
  sixes.push(num);
  //mean
  document.querySelector('#d6-rolls-mean')
  .innerText = mean(sixes); 
  //median
  document.querySelector('#d6-rolls-median')
  .innerText = median(sixes); 
  //mode
  document.querySelector('#d6-rolls-mode')
  .innerText = mode(sixes); 
};

function rollDiceB(){
  const num = getRandomNumber(6);
  const num2 = getRandomNumber(6);
  imgB.src = `./images/d6/${num}.png`;
  imgC.src = `./images/d6/${num2}.png`;
  doubleSixes.push(num + num2);
  //mean
  document.querySelector('#double-d6-rolls-mean')
  .innerText = mean(doubleSixes); 
  //median 
  document.querySelector('#double-d6-rolls-median')
  .innerText = median(doubleSixes); 
  //mode 
  document.querySelector('#double-d6-rolls-mode')
  .innerText = mode(doubleSixes);
  
  
};


function rollDiceC(){
  const num = getRandomNumber(12);
  imgD.src = `./images/numbers/${num}.png`;
  twelves.push(num);
  //mean
  document.querySelector('#d12-rolls-mean')
  .innerText = mean(twelves);  
  //median 
  document.querySelector('#d12-rolls-median')
  .innerText = median(twelves);
  //mode 
  document.querySelector('#d12-rolls-mode')
  .innerText = mode(twelves);
  
};


function rollDiceD(){
  const num = getRandomNumber(20);
  imgE.src = `./images/numbers/${num}.png`
  twenties.push(num);
  //mean 
  document.querySelector('#d20-rolls-mean')
  .innerText = mean(twenties); 
  //median 
  document.querySelector('#d20-rolls-median')
  .innerText = median(twenties);
  //mode 
  document.querySelector('#d20-rolls-mode')
  .innerText = mode(twenties);
  
};

//============FINDING MEAN=================

function mean(arrayOfnums){
  let total = 0;
  let mean = 0;
  for (const num of arrayOfnums){
    total += num;
  }
  mean = total/arrayOfnums.length;
  return mean.toFixed(2);
}
//===========FINDING MEDIAN=================


const median = arr => {
  const mid = Math.floor(arr.length / 2),
  nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};


//============FINDING MODE==================

function mode(array) {
  let frequency = {}; // array of frequency.
  let maxFreq = 0; // holds the max frequency.
  let modes = 0;
  
  for (let i in array) {
    frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.
    
    if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
      maxFreq = frequency[array[i]]; // update max.
    }
  }
  for (let k in frequency) {
    if (frequency[k] == maxFreq) {
      modes = k;
    }
  }
  return modes;
}




/*******************
* EVENT LISTENERS *
*******************/

imgA.addEventListener('click', rollDiceA);
imgB.addEventListener('click', rollDiceB);
imgC.addEventListener('click', rollDiceB);
imgD.addEventListener('click', rollDiceC);
imgE.addEventListener('click', rollDiceD);

resetButton.addEventListener('click', reset);










/******************
* RESET FUNCTION *
******************/

function reset(){
  sixes.length = 0;
  doubleSixes.length = 0;
  twelves.length = 0;
  twenties.length = 0;
  imgA.src = './images/start/d6.png';
  imgB.src = './images/start/d6.png';
  imgC.src = './images/start/d6.png';
  imgD.src = './images/start/d12.jpeg';
  imgE.src = './images/start/d20.jpg';
  for(const h1node of Nodes){
    h1node.innerText = 'NA'
  };
}

/****************************
* CLICK HANDLING FUNCTIONS *
****************************/



/****************
* MATH SECTION *
****************/
