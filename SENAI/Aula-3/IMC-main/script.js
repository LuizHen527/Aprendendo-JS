

function calcular(){
    alert('A funcao esta funcionando');
    event.preventDefault();

    let nome = document.getElementById('nome').value.trim();
    let altura =parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    if(isNaN(altura) || isNaN(peso) || nome.length == 0){
        alert('Coloque os dados corretamente');
        return;
    }

    //Calcular imc

    const imc = calcularImc(altura, peso);

    alert(`Situacao: ${retornaSituacao(imc)}`);

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(imc);


}

function calcularImc(altura, peso){
    //return peso / (altura * altura);
    //return peso / altura**2;
    return peso / Math.pow(altura, 2);
    
}

function retornaSituacao(imc){

    let situacao;

    if(imc < 18.5){
        situacao = 'Magreza severa';
    } else if (imc < 24.99){
        situacao = 'Peso normal';
    } else if (imc < 29.99){
        situacao = 'Acima do peso';
    } else if (imc < 34.99){
        situacao = 'Obesidade 1';
    } else if (imc < 39.99){
        situacao = 'Obesidade 2';
    } else{
        situacao = 'VOCE VAI MORRER';
    } 

    return situacao;
}