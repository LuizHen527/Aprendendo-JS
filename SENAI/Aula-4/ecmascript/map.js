const numeros = [1, 2, 5, 10, 300];

const mesa = ['Gabriel', 'Demetrio', 'Evelyn', 'Luiz', ''];



//Callback function funcao dentro de funcao

mesa.forEach(
    function Carlos(pessoa){
        console.log(`Bom dia ` + pessoa);
    }
);

//funcao anonima - funcao sem nome
mesa.forEach(
    function (pessoa){
        console.log(`Bom dia ` + pessoa);
    }
);

//arrow function
mesa.forEach(
    (pessoa) => {
        console.log(`Bom dia ` + pessoa);
    }
);

//Funcao dentro de uma variavel
const dobro = (x) => {
    return x * 2;
}

//Return implicito
const dobro2 = (x) => x * 2;

//Return implicito e simplificado
const dobro3 = x => x * 2;

console.log( dobro2(50));

const bomDia = () => 'Bom dia'; // retorna bom dia

console.log(bomDia());

//E melhor usar um funcao dentro de uma variavel. porque dentro da variavel o que esta dentro da function fica em escopo local