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

function selectCard(card) {
    // Remove a classe de seleção e troca a imagem de todos os cards
    const cards = document.querySelectorAll('.physical-activity-card, .physical-activity-card-selected');
    
    cards.forEach(c => {
        const img = c.querySelector('img');
        if (c === card) {
            // Se for o card clicado, adicione a classe "selected" e troque a imagem
            c.classList.add('physical-activity-card-selected');
            img.src = './img/icons-check-highlighted.svg'; // imagem selecionada
        } else {
            // Para os outros cards, remova a classe "selected" e restaure a imagem
            c.classList.remove('physical-activity-card-selected');
            img.src = './img/icons-check.svg'; // imagem padrão
        }
    });
}

let selectedCard = null;

function selectGender(currentCard) {
    const img = currentCard.querySelector('.gender-card');

    // Se já houver um cartão selecionado e não for o atual, desmarque-o
    if (selectedCard && selectedCard !== currentCard) {
        const previousImg = selectedCard.querySelector('.gender-card');
        previousImg.src = previousImg.src.replace('-selected', ''); // Remove '-selected' da imagem
        selectedCard.style.backgroundColor = ''; // Remove a cor de fundo do cartão anterior
    }

    // Altera a imagem do cartão atual para selecionado
    img.src = img.getAttribute('data-selected-src');
    
    // Altera a cor de fundo com base no gênero selecionado
    if (img.src.includes('female')) {
        currentCard.style.backgroundColor = '#EF476F'; //pink
    } else {
        currentCard.style.backgroundColor = '#26547C' //blue;
    }

    // Atualiza o cartão selecionado
    selectedCard = currentCard;
}



// Função para mostrar elementos da visualização correta com base no índice
function showElements() {
    const mobileElements = document.querySelectorAll('.mobile-1, .mobile-2, .mobile-3');
    const tabletElements = document.querySelectorAll('.tablet-1, .tablet-2');
    const nextButton = document.querySelector('.next-page-btn');
    const generateButton = document.querySelector('.generate-btn');

    const isTablet = window.innerWidth >= 375 && window.innerWidth <= 768;
    const isDesktop = window.innerWidth > 768;

    // Recupera o índice do localStorage
    const mobileIndex = parseInt(localStorage.getItem('mobile-page-index')) || 0;
    const tabletIndex = parseInt(localStorage.getItem('tablet-page-index')) || 0;

    // Se for mobile, esconder elementos de tablet
    if (!isTablet) {
        mobileElements.forEach((element) => {
            element.style.display = element.classList.contains(`mobile-${mobileIndex + 1}`) ? 'flex' : 'none';
        });

        // Lógica dos botões para mobile
        if (mobileIndex === 2) { // mobile-3
            nextButton.style.display = 'none'; // Ocultar "Avançar"
            generateButton.style.display = 'flex'; // Mostrar "Gerar Resultados"
        } else {
            nextButton.style.display = 'flex'; // Mostrar "Avançar" nos outros casos
            generateButton.style.display = 'none'; // Ocultar "Gerar Resultados"
        }
    }

    // Se for tablet, mostrar elementos de tablet
    if (isTablet) {
        tabletElements.forEach((element) => {
            element.style.display = element.classList.contains(`tablet-${tabletIndex + 1}`) ? 'flex' : 'none';
        });

        // Lógica dos botões para tablet
        if (tabletIndex === 1) { // tablet-2
            nextButton.style.display = 'none'; // Ocultar "Avançar"
            generateButton.style.display = 'flex'; // Mostrar "Gerar Resultados"
        } else {
            nextButton.style.display = 'flex'; // Mostrar "Avançar" nos outros casos
            generateButton.style.display = 'none'; // Ocultar "Gerar Resultados"
        }
    }

    // Se for desktop, mostrar todos os elementos
    if (isDesktop) {
        mobileElements.forEach((element) => {
            element.style.display = 'flex'; // Exibir todos os elementos
        });
        tabletElements.forEach((element) => {
            element.style.display = 'flex'; // Exibir todos os elementos
        });
        nextButton.style.display = 'none'; // Ocultar "Avançar" no desktop
        generateButton.style.display = 'flex'; // Mostrar "Gerar Resultados"
    }
}

// Função para avançar para a próxima página
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

// Atualizar a visualização ao redimensionar a tela
window.addEventListener('resize', initialize);

// Executar a inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', initialize);
