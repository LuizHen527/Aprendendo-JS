const filmes = [
{
    nome: 'O Iluminado',
    duracao: '2h26',
    ano: '1980',
    genero: 'Drama/Terror',
    diretor: 'Stanley Kubrick',
    ondeAssistir: 'HBO Max e Amazon Prime',
    elenco: ['Shelley Duvall', ' Jack Nicholson', ' Danny Lloyd', ' ...']
}, 
{
    nome: 'O Iluminado',
    duracao: '2h26',
    ano: '1980',
    genero: 'Drama/Terror',
    diretor: 'Stanley Kubrick',
    ondeAssistir: 'HBO Max e Amazon Prime',
    elenco: ['Shelley Duvall', ' Jack Nicholson', ' Danny Lloyd', ' ...']
}, 
{
    nome: 'O Iluminado',
    duracao: '2h26',
    ano: '1980',
    genero: 'Drama/Terror',
    diretor: 'Stanley Kubrick',
    ondeAssistir: 'HBO Max e Amazon Prime',
    elenco: ['Shelley Duvall', ' Jack Nicholson', ' Danny Lloyd', ' ...']
}

];

const {nome, duracao, ano, elenco} = filmes;

console.log(`
${nome}

Duracao: ${duracao}
Data: ${ano}
Elenco: ${elenco}`);

filmes.forEach( ({nome, genero}, i) => {
    console.log(`
    Titulo: ${nome}
    Genero: ${genero}
    `);
})