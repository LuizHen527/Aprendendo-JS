const camisaLocoste = {
    descricao: 'Camisa boa',
    preco: 200,
    tamanho: 'm',
    cor: 'azul',
    tipoTecido: 'algodao'
}

//const descricao = camisaLocoste.descricao;
const {descricao, preco} = camisaLocoste;

//const preco = camisaLocoste.preco;
const {tipoTecido} = camisaLocoste;

console.log(`Descricao: ${descricao}`);

console.log(`Preco: ${preco}`);

console.log(`Tecido: ${tipoTecido}`);

//Criar a desestruturacao para objeto filmes
//trazer somente 3 propriedades 
