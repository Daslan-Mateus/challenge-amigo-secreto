//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
 let nomes = [];

function adicionarAmigo() {
   
    let nome = document.getElementById("amigo").value;
    let lista = document.getElementById("listaAmigos");

    if (nome) {
        nomes.push(nome);
        let novoElemento = document.createElement('li');
        novoElemento.textContent = nome;
        lista.append(novoElemento);
        document.getElementById("amigo").value = ""
    }
}

function sortearAmigo() {
    let listaSorteados = document.getElementById("resultado");
    const randomIndex = Math.floor(Math.random() * nomes.length);

    if (nomes) {
        let novoElemento = document.createElement('li');
        novoElemento.textContent = nomes[randomIndex];

        listaSorteados.append(novoElemento);
    }
}



