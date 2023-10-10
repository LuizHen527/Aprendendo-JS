alert('Boas vindas ao nosso site!');
let numeroSecreto = 5;
let pontos;

let chute = prompt('Escolha um numero entre 1 e 10');

//Desafios da aula 1:

let nome = prompt('Digite seu nome:');
// let idade = prompt('Digite sua idade:');
// let numeroDeVendas = 50;
// let saldoDisponivel = 1000;

// let mensagemErro = 'Erro! Preencha todos os campos.';
// alert(mensagemErro);

// if(idade >= 18){
//     alert('Já pode tirar habilitacao')
// }

//Desafio 2 

// let diaSemana = prompt('Em qual dia da semana estamos?');

// if((diaSemana == 'Sabado') || (diaSemana == 'sabado') || (diaSemana == 'Domingo') || (diaSemana == 'domingo')){
//     alert('Bom fim de semana!');
// } else{
//     alert('Boa semana');
// }

alert(`Bem vindo ${nome}`)

if(chute < 0){
    alert('Seu numero é negativo')
} else {
    alert('Seu numero é positivo')
}

if (numeroSecreto == chute) {
    alert(`Isso o você acertou o numero secreto ${numeroSecreto}`);
    pontos = 50;
} else {
    alert('Errouuu! *voz do faustão*');
}

alert(`Você possui ${pontos} pontos`)

if(pontos == 50)
{
    alert('Parabéns, você venceu!')
}