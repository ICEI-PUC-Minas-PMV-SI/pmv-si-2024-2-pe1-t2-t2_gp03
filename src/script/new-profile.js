function changeWeight(quantityToChange){
    let weightDisplayName = 'weight-display'
    let weightDisplay = document.getElementById(weightDisplayName)
    let currentWeight = parseInt(weightDisplay.textContent, 10);
    let newWeight = currentWeight+quantityToChange
    weightDisplay.textContent = `${newWeight}kg`;
}

function changeHeight(quantityToChange){
    let heightDisplayName = 'height-display'
    let heightDisplay = document.getElementById(heightDisplayName)
    let currentHeight = parseInt(heightDisplay.textContent, 10);
    let newHeight = currentHeight+quantityToChange
    heightDisplay.textContent = `${newHeight}cm`;
}

function hoverCard(card) {
    const img = card.querySelector('img');
    img.src = './img/icons-check-highlighted.svg';
}

function unhoverCard(card) {
    const img = card.querySelector('img');
    if (!card.classList.contains('physical-activity-card-selected')) {
        img.src = './img/icons-check.svg';
    }
}

function hoverCard(card) {
    const img = card.querySelector('img');
    img.src = './img/icons-check-highlighted.svg';
}


function unhoverCard(card) {
    const img = card.querySelector('img');
    if (!card.classList.contains('physical-activity-card-selected')) {
        img.src = './img/icons-check.svg';
    }
}


function selectCard(card) {
    const cards = document.querySelectorAll('.physical-activity-card, .physical-activity-card-selected');

    cards.forEach(c => {
        const img = c.querySelector('img');
        if (c === card) {
            c.classList.add('physical-activity-card-selected', 'selected');
            img.src = './img/icons-check-highlighted.svg';
        } else {
            c.classList.remove('physical-activity-card-selected', 'selected');
            img.src = './img/icons-check.svg';
        }
    });
}

let selectedCard = null;
function selectGender(currentCard) {
    const img = currentCard.querySelector('.gender-card');


    if (selectedCard && selectedCard !== currentCard) {
        const previousImg = selectedCard.querySelector('.gender-card');
        previousImg.src = previousImg.src.replace('-selected', ''); 
        selectedCard.style.backgroundColor = ''; 
    }


    img.src = img.getAttribute('data-selected-src');
    
 
    if (img.src.includes('female')) {
        currentCard.style.backgroundColor = '#EF476F';
    } else {
        currentCard.style.backgroundColor = '#26547C' 
    }

  
    selectedCard = currentCard;
}




function showElements() {
    const mobileElements = document.querySelectorAll('.mobile-1, .mobile-2, .mobile-3');
    const tabletElements = document.querySelectorAll('.tablet-1, .tablet-2');
    const nextButton = document.querySelector('.next-page-btn');
    const generateButton = document.querySelector('.generate-btn');

    const isTablet = window.innerWidth >= 375 && window.innerWidth <= 768;
    const isDesktop = window.innerWidth > 768;


    const mobileIndex = parseInt(localStorage.getItem('mobile-page-index')) || 0;
    const tabletIndex = parseInt(localStorage.getItem('tablet-page-index')) || 0;


    if (!isTablet) {
        mobileElements.forEach((element) => {
            element.style.display = element.classList.contains(`mobile-${mobileIndex + 1}`) ? 'flex' : 'none';
        });

       
        if (mobileIndex === 2) { 
            nextButton.style.display = 'none'; 
            generateButton.style.display = 'flex'; 
        } else {
            nextButton.style.display = 'flex';
            generateButton.style.display = 'none'; 
        }
    }

   
    if (isTablet) {
        tabletElements.forEach((element) => {
            element.style.display = element.classList.contains(`tablet-${tabletIndex + 1}`) ? 'flex' : 'none';
        });

     
        if (tabletIndex === 1) { 
            nextButton.style.display = 'none'; 
            generateButton.style.display = 'flex'; 
        } else {
            nextButton.style.display = 'flex'; 
            generateButton.style.display = 'none'; 
        }
    }

    
    if (isDesktop) {
        mobileElements.forEach((element) => {
            element.style.display = 'flex'; 
        });
        tabletElements.forEach((element) => {
            element.style.display = 'flex'; 
        });
        nextButton.style.display = 'none'; 
        generateButton.style.display = 'flex'; 
    }
}


function nextPage() {
    const isTablet = window.innerWidth >= 375 && window.innerWidth <= 768;

    if (!isTablet) {
        let currentIndex = parseInt(localStorage.getItem('mobile-page-index')) || 0;
        currentIndex = (currentIndex + 1) % 3; // Incrementar e resetar após a última visualização
        localStorage.setItem('mobile-page-index', currentIndex);
    } else {
        let currentIndex = parseInt(localStorage.getItem('tablet-page-index')) || 0;
        currentIndex = (currentIndex + 1) % 2; // Incrementar e resetar após a última visualização (tablet)
        localStorage.setItem('tablet-page-index', currentIndex);
    }
    
    showElements(); // Atualiza a visualização
}

// Inicializar a visualização
function initialize() {
    showElements(); // Mostra elementos baseados nos índices salvos
}


window.addEventListener('resize', initialize);


document.addEventListener('DOMContentLoaded', initialize);


function calculateIMC(weight, height) {
    return weight / (height * height);  // altura em metros, peso em kg
}


function calculateTMB(weight, height, age, gender) {
    if (gender === 'male') {
        return 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age); // Homens
    } else {
        return 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age); // Mulheres
    }
}


function calculateGET(tmb, activityLevel) {
    let activityMultiplier;

    switch (activityLevel) {
        case 'sedentary':
            activityMultiplier = 1.2;
            break;
        case 'light':
            activityMultiplier = 1.375;
            break;
        case 'moderate':
            activityMultiplier = 1.55;
            break;
        case 'intense':
            activityMultiplier = 1.725;
            break;
        case 'veryIntense':
            activityMultiplier = 1.9;
            break;
        default:
            activityMultiplier = 1.2; // Padrão para sedentário
            break;
    }

    return tmb * activityMultiplier;
}


function calculateProfile() {
    // Captura as informações do perfil
    const weight = parseInt(document.getElementById('weight-display').textContent, 10); // Peso do display
    const height = parseInt(document.getElementById('height-display').textContent, 10); // Altura do display
    const age = parseInt(document.getElementById('age-display').textContent, 10); // Idade (necessário adicionar no HTML)
    const gender = document.querySelector('input[name="gender"]:checked').value; // Gênero (selecione com base nos inputs de radio)
    const activityLevel = document.querySelector('input[name="activity"]:checked').value; // Nível de atividade (baseado nos inputs de radio)

    
    const heightInMeters = height / 100;

 
    const imc = calculateIMC(weight, heightInMeters);
    const tmb = calculateTMB(weight, height, age, gender);
    const get = calculateGET(tmb, activityLevel);

    
    localStorage.setItem('imc', imc.toFixed(2));
    localStorage.setItem('tmb', tmb.toFixed(2));
    localStorage.setItem('get', get.toFixed(2));

 
    window.location = './results.html';
}


document.querySelector('.generate-btn').addEventListener('click', calculateProfile);

