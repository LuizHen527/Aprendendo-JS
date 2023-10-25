arrFrutas = [];

function CadastrarFruta(e) {
    e.preventDefault();

    const fruta = document.getElementById('fruta').value;
    fruta.trim();

    arrFrutas.push(fruta);

    let template = `<ul>`;

    arrFrutas.array.forEach(f => {
        template += `<li>${f}</li>`
    });

    template = `</ul>`;

    console.log(arrFrutas);
}

function ListarJogos() {
    console.log(arrJogos.sort());
}