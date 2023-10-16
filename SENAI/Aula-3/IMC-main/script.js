const arrPessoas = []; //array vazio

function calcular(event){
    alert('A funcao esta funcionando');
    event.preventDefault();

    let nome = document.getElementById('nome').value.trim();
    let altura =parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    if(isNaN(altura) || isNaN(peso) || nome.length == 0){
        alert('Coloque os dados corretamente');
        return; // Para a funcao
    }

    //Calcular imc

    const imc = calcularImc(altura, peso);

    const situacao = retornaSituacao(imc);

    alert(`Situacao: ${situacao}`);

    const pessoa = {
        peso,
        altura,
        nome,
        imc,
        situacao
    }

    arrPessoas.push(pessoa);

    listarPessoas();

    console.log(pessoa);
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

function listarPessoas(){
    let template = '';
    
    arrPessoas.forEach((p) => {

        template += `
        <tr>
        <td data-cell="nome">${p.nome}</td>
        <td data-cell="altura">${p.altura}</td>
        <td data-cell="peso">${p.peso}</td>
        <td data-cell="valor do IMC">${p.imc}</td>
        <td data-cell="classificação do IMC">${p.situacao}</td>
        <td data-cell="data de cadastro">19/06/2023 21:27</td>
    </tr>`;
    })

    console.log(arrPessoas);

    document.getElementById('corpo-tabela').innerHTML = template;
}