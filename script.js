const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');

        document.getElementById('infos').classList.remove('hidden');

        if (bmi < 18.5){
            description = 'Você está abaixo do peso!';
            value.classList.remove('attention');
            value.classList.remove('normal');
            value.classList.add('danger');
        } 

        else if (bmi >= 18.5 && bmi <= 25) {
            description = "Você está no peso ideal";
            value.classList.remove('danger');
            value.classList.remove('attention');
            value.classList.add('normal');
        }

        else if (bmi > 25 && bmi <= 30) {
            description = "Atenção! Estão um pouco acima do peso!";
            value.classList.remove('normal');
            value.classList.remove('danger');
            value.classList.add('attention');
        }

        else if (bmi > 30 && bmi <= 35) {
            description = "Cuidado! Você está com obesidade moderada!";
            value.classList.remove('attention');
            value.classList.remove('normal');
            value.classList.add('danger');
        }

        else if (bmi > 35 && bmi <= 40) {
            description = "Cuidado! Você está com obesidade severa!";
            value.classList.remove('attention');
            value.classList.remove('normal');
            value.classList.add('danger');
        }

        else {
            description = "Cuidado! Você está com obesidade morbida!";
            value.classList.remove('attention');
            value.classList.remove('normal');
            value.classList.add('danger');
        }

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

form.addEventListener('keypress', function(event) {
    if (event.key === 'press') {
        document.getElementById('#calculate').click();
    }
});