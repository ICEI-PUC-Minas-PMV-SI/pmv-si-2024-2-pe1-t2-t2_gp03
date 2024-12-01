// Número alvo para o contador principal
const targetNumber = 2263; 
// Elemento onde o número será exibido
const display = document.getElementById('counter');
let currentNumber = 0;

/**
 * Anima o contador até alcançar o valor de targetNumber.
 * Incrementa o número gradualmente até o valor alvo.
 */
function animateCount(targetNumber, display, currentNumber) {
    const increment = Math.ceil(targetNumber / 100); // Determina o incremento por iteração
    const interval = setInterval(() => {
        currentNumber += increment; 
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber; // Garante que não ultrapasse o valor alvo
            clearInterval(interval); // Interrompe o intervalo ao atingir o alvo
        }
        display.textContent = `${currentNumber}KCAL`; // Atualiza o valor exibido no DOM
    }, 20); // Executa o incremento a cada 20ms
}

// Número alvo para o segundo contador
const targetNumber2 = 1890; 
const display2 = document.getElementById('counter2');
let currentNumber2 = 0;

/**
 * Anima o segundo contador de maneira semelhante ao primeiro.
 */
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

// Adiciona evento de clique no botão para alternar visibilidade do elemento "more-info"
document.querySelector('.chevron-down')?.addEventListener('click', function () {
    var moreInfo = document.getElementById('more-info');
    var chevron = document.querySelector('.chevron-down');
    
    // Alterna entre mostrar e esconder informações adicionais
    if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
      chevron.src = 'img/lucide-chevron-down-11.svg'; // Atualiza o ícone
    } else {
      moreInfo.style.display = 'none';
      chevron.src = 'img/lucide-chevron-down1.svg'; // Atualiza o ícone
    }
});

// Adiciona evento de clique no segundo botão para alternar visibilidade do elemento "more-info2"
document.querySelector('.chevron-down2')?.addEventListener('click', function () {
    var moreInfo = document.getElementById('more-info2');
    var chevron = document.querySelector('.chevron-down2');
    
    // Alterna entre mostrar e esconder informações adicionais
    if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
      chevron.src = 'img/lucide-chevron-down-11.svg';
    } else {
      moreInfo.style.display = 'none';
      chevron.src = 'img/lucide-chevron-down1.svg'; 
    }
});

// Configuração para animação do contador de hidratação
let targetWater = 3; // Quantidade alvo de litros
let counter = 0; // Valor inicial
const counterElement = document.getElementById('counterWater');

/**
 * Incrementa o contador de hidratação até o valor alvo.
 */
function incrementCounter() {
    if (counter < targetWater) {
      counter += 1;
      counterElement.textContent = counter + 'L'; // Atualiza o DOM com o valor atual
    }
}

// Inicia a animação do contador de hidratação
const interval = setInterval(() => {
    incrementCounter();
    if (counter >= 3) {
      clearInterval(interval); // Interrompe ao atingir o valor alvo
    }
}, 400);

/**
 * Preenche uma lista de tarefas com dados provenientes de um snapshot do Firebase.
 * @param {Object} dataSnapshot - Snapshot de dados do Firebase.
 */
function fillTodoList(dataSnapshot) {
    dataSnapshot.forEach(function(item) {
        var value = item.val();

        // Cria elementos de lista para cada item do snapshot
        var li = document.createElement('li');
        var spanLi = document.createElement('span');

        spanLi.appendChild(document.createTextNode(value.name));
        li.appendChild(spanLi);
        ulTodoList.appendChild(li);
    });
}

/**
 * Preenche os resultados na interface com dados do Firebase.
 * @param {Object} dataSnapshot - Snapshot de dados do Firebase.
 */
function fillResults(dataSnapshot) {
    dataSnapshot.forEach(function(item) {
        var value = item.val();
        
        // Extrai valores ou define padrão se não disponíveis
        var get = value.get || 'Não disponível'; 
        var tmb = value.tmb || 'Não disponível'; 
        var imc = value.imc || 'Não disponível'; 

        // Atualiza elementos do DOM com os valores extraídos
        document.getElementById('get-result').textContent = get + ' KCAL';
        document.getElementById('tmb-result').textContent = tmb + ' KCAL';
        document.getElementById('imc-result').textContent = imc;

        // Determina classificação do IMC
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

        // Atualiza a classificação no DOM
        var imcClassificationElement = document.querySelector('#imc-result + p');
        if (imcClassificationElement) {
            imcClassificationElement.textContent = imcClassification;
        }
    });
}

/**
 * Exibe resultados armazenados no localStorage na interface.
 */
function displayResults() {
    var resultData = JSON.parse(localStorage.getItem('profileResults'));

    if (resultData) {
        document.getElementById('get-result').textContent = resultData.get + ' KCAL';
        document.getElementById('tmb-result').textContent = resultData.tmb + ' KCAL';
        document.getElementById('imc-result').textContent = resultData.imc;

        // Determina classificação do IMC com base no valor do localStorage
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

// Executa funções ao carregar a página
window.onload = function() {
    displayResults(); // Exibe resultados do localStorage
    console.log(localStorage.getItem('profileResults'));
};

// Configurações adicionais para carregar dados do Firebase e iniciar animações
window.onload = function() {
    dbRefUsers.child(firebase.auth().currentUser.uid).on('value', function(dataSnapshot) {
        fillTodoList(dataSnapshot);
    });
    animateCount(targetNumber, display, currentNumber);
    animateCount2();
    incrementCounter();
};

module.exports = { animateCount, fillResults, displayResults }