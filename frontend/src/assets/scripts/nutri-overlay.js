function abrirModal(){
    document.getElementById('modal-criar-cardapio').classList.remove('hidden');
}
function fecharModal(){
    document.getElementById('modal-criar-cardapio').classList.add('hidden');
}

function criarCardapio(){
    const nome = document.getElementById('nome-cardapio').value;
    const tipo = document.getElementById('tipo-refeicao').value;

    if(!nome.trim()){
        alert('Por favor, insita um nome para o cardápio.');
        return;
    }

    window.location.href = `nutricao-pages-childs/criar-refeicao.html?nome=${encodeURIComponent(nome)}&tipo=${tipo}`;
}

window.addEventListener('click', function(e){
    const modal = document.getElementById('modal-criar-cardapio');
    if(e.target === modal){
        fecharModal();
    }
});