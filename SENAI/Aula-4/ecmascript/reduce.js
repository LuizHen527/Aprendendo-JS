const numeros = [10, 12, 20];

const somatorio = numeros.reduce( (total, n) => {
    return total + n;
}, 0);

console.log(somatorio);

const produtos = [
    {produto: "Camiseta", preco: 29.99},
    {produto: "Tenis", preco: 200.99},
    {produto: "meia", preco: 7.50}
];

const totProdutos = produtos.reduce((totalPreco, oP) => {
    return oP.preco + totalPreco
}, 0)

console.log(`Valor da compra: R$${totProdutos}`);