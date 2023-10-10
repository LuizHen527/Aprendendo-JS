function calcular()
{
    event.preventDefault();

    //Criar uma variavel para cada numero
    //criar uma variavel com o resultado da soma
    //exibir o resultado em uma alert - utilizar a interpolacao

    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let op = document.getElementById('operacao').value;
    let result;

    if(isNaN(n1) || isNaN(n2)){
        alert('Digite um numero')
        return;
    }

    if (op == '+') {
        result = somar(n1, n2);
        // alert(`Resultado ${result}`)
    } else if (op == '-') {
        result = subtrair(n1, n2);
        // alert(`Resultado ${result}`)
    } else if (op == '*') {
        result = multiplicacao(n1, n2);
        // alert(`Resultado ${result}`)
    } else if (op == '/'){
        result = divisao(n1, n2);
        // alert(`Resultado ${result}`)
    } else if (op == ''){
        // alert(`Digite um valor`)
    }

    document.getElementById('result').innerText = result;
}

function subtrair(n1, n2){
    return n1 - n2;
}
function somar(n1, n2){
    return n1 + n2;
}
function multiplicacao(n1, n2){
    return n1 * n2;
}
function divisao(n1, n2){
    if(n2 == 0){
        return 'Nao e um numero';
    }
    return n1 / n2;
}