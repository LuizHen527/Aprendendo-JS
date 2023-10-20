const urlViaCep = "https://viacep.com.br/ws"

function cadastrar(e) {
    e.preventDefault();
    alert('Cadastrando...')
}

async function buscarEndereco(cep) {
    const resourse = `/${cep}/json/`


    try {
        const promise = await fetch(urlViaCep + resourse);
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