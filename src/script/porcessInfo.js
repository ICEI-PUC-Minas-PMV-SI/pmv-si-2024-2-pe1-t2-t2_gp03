function processResults() {
   
    var selectedGender = Array.from(document.querySelectorAll('.gender-card')).find(card => {
        const img = card.querySelector('img');
        return img && img.src.includes('selected');
    })?.querySelector('img').alt || 'Não selecionado';

   
    var height = parseInt(document.getElementById('height-display').innerText.replace('cm', ''), 10);

    
    var weight = parseInt(document.getElementById('weight-display').innerText.replace('kg', ''), 10);

  
    var selectedActivity = Array.from(document.querySelectorAll('.physical-activity-card'))
        .find(card => card.classList.contains('selected'))?.querySelector('.card-title')?.innerText || 'Não selecionado';

   
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
            activityFactor = 1.2; 
            break;
    }

    
    var imc = (weight / ((height / 100) ** 2)).toFixed(2);

    
    var tmb;
    if (selectedGender.toLowerCase() === 'masculino') {
        tmb = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * 25)).toFixed(2); 
    } else {
        tmb = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * 25)).toFixed(2); 
    }

    
    var get = (tmb * activityFactor).toFixed(2);

   
    var data = {
        gender: selectedGender,
        height: height + 'cm',
        weight: weight + 'kg',
        activity: selectedActivity,
        imc: imc,
        tmb: tmb,
        get: get
    };

    
    localStorage.setItem('userData', JSON.stringify(data));
    console.log('Dados atualizados com sucesso:', data);

   
    window.location.href = '/results.html';

    
    document.getElementById('get-result').innerText = data.get + ' KCAL';
    document.getElementById('tmb-result').innerText = data.tmb + ' KCAL';
    document.getElementById('imc-result').innerText = data.imc;
}

window.onload = function() {
    
    var data = JSON.parse(localStorage.getItem('userData'));

    if (data) {
        
        document.getElementById('get-result').innerText = data.get + ' KCAL';
        document.getElementById('tmb-result').innerText = data.tmb + ' KCAL';
        document.getElementById('imc-result').innerText = data.imc;

        
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

       
        document.querySelector('#imc-result + p').innerText = imcStatus;
    } else {
        alert('Dados não encontrados');
    }
};