const targetNumber = 2263; 
const display = document.getElementById('counter');
let currentNumber = 0;

function animateCount() {
    const increment = Math.ceil(targetNumber / 100); 
    const interval = setInterval(() => {
        currentNumber += increment; 
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber; 
            clearInterval(interval); 
        }
        display.textContent = `${currentNumber}KCAL`; 
    }, 20); 
}

const targetNumber2 = 1890; 
const display2 = document.getElementById('counter2');
let currentNumber2 = 0;

function animateCount2() {
    const increment = Math.ceil(targetNumber2 / 100); 
    const interval = setInterval(() => {
        currentNumber2 += increment; 
        if (currentNumber2 >= targetNumber2) {
            currentNumber2 = targetNumber2; 
            clearInterval(interval); 
        }
        display2.textContent = `${currentNumber2}KCAL`; 
    }, 20); 
}

document.querySelector('.chevron-down').addEventListener('click', function () {
    var moreInfo = document.getElementById('more-info');
    var chevron = document.querySelector('.chevron-down');
    
    if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
      chevron.src = 'img/lucide-chevron-down-11.svg'; 
    } else {
      moreInfo.style.display = 'none';
      chevron.src = 'img/lucide-chevron-down1.svg'; 
    }
  });


  document.querySelector('.chevron-down2').addEventListener('click', function () {
    var moreInfo = document.getElementById('more-info2');
    var chevron = document.querySelector('.chevron-down2');
    
  
    if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
      chevron.src = 'img/lucide-chevron-down-11.svg';
    } else {
      moreInfo.style.display = 'none';
      chevron.src = 'img/lucide-chevron-down1.svg'; 
    }
  });



  let targetWater = 3;
  let counter = 0;
  const counterElement = document.getElementById('counterWater');
  

  function incrementCounter() {
    if (counter < targetWater) {
      counter += 1;
      counterElement.textContent = counter + 'L';
    }
  }


  const interval = setInterval(() => {
    incrementCounter();
    if (counter >= 3) {
      clearInterval(interval); 
    }
  }, 400);





window.onload = function() {
    animateCount();
    animateCount2();
    incrementCounter();
};
