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



  function fillTodoList(dataSnapshot){
    dataSnapshot.forEach(function(item){
        var value = item.val()

        var li = document.createElement('li')
        var spanLi = document.createElement('span')

        spanLi.appendChild(document.createTextNode(value.name))
        li.appendChild(spanLi)
        ulTodoList.appendChild(li)
    })
    
};


function fillResults(dataSnapshot) {
 
  dataSnapshot.forEach(function(item) {
      var value = item.val(); 
      
     
      var get = value.get || 'Não disponível'; 
      var tmb = value.tmb || 'Não disponível'; 
      var imc = value.imc || 'Não disponível'; 

      
      document.getElementById('get-result').textContent = get + ' KCAL';
      document.getElementById('tmb-result').textContent = tmb + ' KCAL';
      document.getElementById('imc-result').textContent = imc;

      
      var imcClassification = '';
      if (imc < 18.5) {
          imcClassification = 'Abaixo do peso';
      } else if (imc >= 18.5 && imc < 24.9) {
          imcClassification = 'Peso normal';
      } else if (imc >= 25 && imc < 29.9) {
          imcClassification = 'Sobrepeso';
      } else {
          imcClassification = 'Obesidade';
      }

     
      var imcClassificationElement = document.querySelector('#imc-result + p');
      if (imcClassificationElement) {
          imcClassificationElement.textContent = imcClassification;
      }
  });
}

  

function displayResults() {
 
  var resultData = JSON.parse(localStorage.getItem('profileResults'));

 
  if (resultData) {
      
      document.getElementById('get-result').textContent = resultData.get + ' KCAL';
      document.getElementById('tmb-result').textContent = resultData.tmb + ' KCAL';
      document.getElementById('imc-result').textContent = resultData.imc;

      C
      var imcClassification = '';
      if (parseFloat(resultData.imc) < 18.5) {
          imcClassification = 'Abaixo do peso';
      } else if (parseFloat(resultData.imc) >= 18.5 && parseFloat(resultData.imc) < 24.9) {
          imcClassification = 'Peso normal';
      } else if (parseFloat(resultData.imc) >= 25 && parseFloat(resultData.imc) < 29.9) {
          imcClassification = 'Sobrepeso';
      } else {
          imcClassification = 'Obesidade';
      }

      
      var imcClassificationElement = document.querySelector('#imc-result + p');
      if (imcClassificationElement) {
          imcClassificationElement.textContent = imcClassification;
      }
  } else {
      console.error('Nenhum dado encontrado no localStorage');
  }
}






window.onload = function() {
  displayResults();
  console.log(localStorage.getItem('profileResults'));


};



window.onload = function() {
    dbRefUsers.child(firebase.auth().currentUser.uid).on('value', function(dataSnapshot) {
      fillTodoList(dataSnapshot)
    })
    animateCount();
    animateCount2();
    incrementCounter();
};


