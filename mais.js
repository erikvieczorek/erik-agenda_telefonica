const form = document.getElementById('form-contato');

var contatos = [];
var telefones = [];

let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});


function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    if (contatos.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi cadastrado`)
    } else {
    contatos.push(inputNomeContato.value);
    telefones.push(inputNumeroTelefone.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
    }   

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

const botaoReset = document.getElementById('botao-reset');
botaoReset.addEventListener('click', resetarTabela);

function resetarTabela() {
    contatos = [];      
    telefones = [];  
    linhas = '';      
    atualizaTabela();  
}


