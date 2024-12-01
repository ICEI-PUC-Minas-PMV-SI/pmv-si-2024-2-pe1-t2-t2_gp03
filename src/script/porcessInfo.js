/**
 * Função que processa os resultados do usuário e realiza cálculos para IMC, TMB e GET.
 * A função também armazena esses dados no LocalStorage e os exibe na página de resultados.
 */
    function processResults() {
    
        // Busca o gênero selecionado entre as opções de cartões de gênero.
        // Verifica se a imagem do cartão contém a palavra 'selected' na URL, para identificar o gênero escolhido.
        var selectedGender = Array.from(document.querySelectorAll('.gender-card')).find(card => {
            const img = card.querySelector('img');
            return img && img.src.includes('selected'); // Verifica se a imagem contém 'selected'
        })?.querySelector('img').alt || 'Não selecionado'; // Se não encontrado, retorna 'Não selecionado'

    
        // Obtém a altura a partir do elemento HTML que contém a altura do usuário, removendo a unidade 'cm' e convertendo para inteiro.
        var heightElement = document.getElementById('height-display');
        if (heightElement) {
            var height = parseInt(heightElement.innerHTML?.replace('cm', ''), 10);
        }

        
        // Obtém o peso a partir do elemento HTML que contém o peso do usuário, removendo a unidade 'kg' e convertendo para inteiro.
        var weight = parseInt(document.getElementById('weight-display').innerHTML?.replace('kg', ''), 10);

  
    // Busca a atividade física selecionada entre as opções de cartões de atividade física.
    // Se encontrar um cartão com a classe 'selected', pega o título dessa atividade. 
    var selectedActivity = Array.from(document.querySelectorAll('.physical-activity-card'))
    .find(card => card.classList.contains('selected'))?.querySelector('.card-title')?.innerHTML || 'Não selecionado'; // Caso não encontre, retorna 'Não selecionado'

   
    // Determina o fator de atividade baseado na atividade física selecionada.
    // O fator de atividade é utilizado para calcular o gasto energético diário (GET).
    let activityFactor;
    switch (selectedActivity.toLowerCase()) {
        case 'sedentário':
            activityFactor = 1.2;
            break;
        case 'levemente ativo':
            activityFactor = 1.375;
            break;
        case 'moderadamente ativo':
            activityFactor = 1.55;
            break;
        case 'muito ativo':
            activityFactor = 1.725;
            break;
        default:
            activityFactor = 1.2;  // Caso a atividade não seja reconhecida, assume o valor para 'sedentário'
            break;
    }

    
    // Cálculo do Índice de Massa Corporal (IMC): peso / (altura em metros)^2
    var imc = (weight / ((height / 100) ** 2)).toFixed(2); // Converte para 2 casas decimais

    
    // Cálculo da Taxa de Metabolismo Basal (TMB) com base no gênero do usuário.
    var tmb
    if (selectedGender.toLowerCase() === 'masculino') {
        // Fórmula para homens
        tmb = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * 25)).toFixed(2);
    } else {
        // Fórmula para mulheres
        tmb = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * 25)).toFixed(2);
    }

    
    // Cálculo do Gasto Energético Total (GET): TMB * fator de atividade
    var get = (tmb * activityFactor).toFixed(2); // Converte para 2 casas decimais

   
    // Cria um objeto com todos os dados calculados e armazenados.
    var data = {
        gender: selectedGender,
        height: height + 'cm',
        weight: weight + 'kg',
        activity: selectedActivity,
        imc: imc,
        tmb: tmb,
        get: get
    };

    
    // Armazena os dados no LocalStorage para uso futuro.
    localStorage.setItem('userData', JSON.stringify(data));
    console.log('Dados atualizados com sucesso:', data);

   
    // Redireciona para a página de resultados.
    window.location.href = '/results.html';

    
    // Exibe os resultados de GET, TMB e IMC diretamente na página de resultados.
    document.getElementById('get-result').innerText = data.get + ' KCAL';
    document.getElementById('tmb-result').innerText = data.tmb + ' KCAL';
    document.getElementById('imc-result').innerText = data.imc;
}

/**
 * Função que carrega os dados armazenados no LocalStorage ao carregar a página de resultados.
 * Exibe os dados de GET, TMB e IMC e classifica o IMC em uma faixa de status.
 */
window.onload = function() {
    
    // Recupera os dados armazenados no LocalStorage.
    var data = JSON.parse(localStorage.getItem('userData'));

    if (data) {
        
        // Exibe os resultados armazenados na página de resultados.
        document.getElementById('get-result').innerText = data.get + ' KCAL';
        document.getElementById('tmb-result').innerText = data.tmb + ' KCAL';
        document.getElementById('imc-result').innerText = data.imc;

        
        // Converte o IMC recuperado para número e classifica o status do IMC.
        var imc = parseFloat(data.imc);
        var imcStatus = '';

        if (imc < 18.5) {
            imcStatus = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            imcStatus = 'Peso normal';
        } else if (imc >= 25 && imc < 29.9) {
            imcStatus = 'Sobrepeso';
        } else {
            imcStatus = 'Obesidade';
        }

       
        // Exibe o status do IMC abaixo do resultado de IMC.
        document.querySelector('#imc-result + p').innerText = imcStatus;
    } else {
        // Exibe um alerta caso não haja dados no LocalStorage.
        alert('Dados não encontrados');
    }
};

module.exports = { processResults }