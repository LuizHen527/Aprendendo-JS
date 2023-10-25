const urlViaCep = "https://viacep.com.br/ws"
const urlCepProfessor = "http://172.16.35.155:3000/myceps"

function cadastrar(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cep = document.getElementById("cep").value;
    const numero = document.getElementById("numero").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
}

async function buscarEndereco(cep) {
    //const resourse = `/${cep}/json/`


    try {
        //const promise = await fetch(urlViaCep + resourse);

        const promise = await fetch(`${urlCepProfessor}/${cep}`)

        const endereco = await promise.json();
        console.log(endereco);

        document.getElementById('endereco').value = endereco.logradouro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;

        document.getElementById('not-found').innerText = "";

    } catch (error) {
        console.log(error);

        document.getElementById('not-found').innerText = "CEP ERRADO";
    }

    
}