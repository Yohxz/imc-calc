const calcular = document.getElementById('calcular');


function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome, peso, altura !== '') {
        
        const valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if(valorImc < 18.5){
            classificacao = 'abaixo do peso.';
        } else if (valorImc < 25) {
            classificacao = 'com peso ideal. Parabens!!!';
        } else if (valorImc < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorImc < 30){
            classificacao = 'obesidade grau I.';
        } else if (valorImc < 40) {
            classificacao = 'obesidade grau II.';
        } else {
            classificacao = 'Quase explodindo!';
        }

        resultado.textContent = `${nome.toUpperCase()} seu IMC é ${valorImc} e você está ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', imc);