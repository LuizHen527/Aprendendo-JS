const numeros = [1, 2, 5, 10, 300];

const arrDobro = numeros.map((n) => {
    return n * 2;
})

console.log(numeros);

console.log(arrDobro);

//Crie dois arrays nomes e sobrenomes
//crie um terceiro array de nomes compretos
//ao final exiba os nomes completos no console com o foreach
//min 5 nomes
// use arow function com callback

const nomes = ['Luiz', 'Andre', 'Everton', 'Guilherme'];
const sobrenomes = ['Correia', 'Young', 'Oliveira', 'Souza'];

const nomesCompletos = nomes.map((nome, indice) => `${nome} ${sobrenomes[indice]}`)

console.log(nomesCompletos);