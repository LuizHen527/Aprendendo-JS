const numeros = [1, 2, 200, 10, 7 , 12, 15, 8];

console.log(numeros);

const nMenor10 = numeros.filter( n => n < 10);

console.log(nMenor10);

const comentarios = [
    {comentario: "bla bla", exibe: true},
    {comentario: "FILHO DA P@34", exibe: false},
    {comentario: "Que site legal", exibe: true}
];

const comentarioOk = comentarios.filter( (c) => {
    return c.exibe === true;
});

console.log(comentarioOk);