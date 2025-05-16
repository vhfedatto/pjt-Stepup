document.addEventListener("DOMContentLoaded", function () { 
    const botaoCadastro = document.getElementById("botao-cadastro"); 
});

function cadastrar() {
    let usuario = document.getElementById("CadUsuario");
    let nascimento = document.getElementById("CadNasc");
    let email = document.getElementById("CadEmail");
    let regiao = document.getElementById("CadRegiao");
    let senha = document.getElementById("CadPas");
    let confirmaSenha = document.getElementById("CadConfPas");
    const termos = document.getElementById("CheckTermos");
    const newsletter = document.getElementById("CheckNews");

    let camposObrigatorios = [usuario, nascimento, email, regiao, senha, confirmaSenha];

    let erro = false;

    //remove mensagens de erro
    document.querySelectorAll(".mensagem-erro").forEach(el => el.remove());

    //resetar borda 
    camposObrigatorios.forEach(campo => {
        campo.style.border = "1px solid #ccc";
    });

    //indica e valida os obrigatórios
    camposObrigatorios.forEach(campo => {
        if (campo.value.trim() === "") {
            erro = true;
            campo.style.border = "2px solid red"; //erro

            let mensagemErro = document.createElement("p");
            mensagemErro.innerText = "Este campo é obrigatório";
            mensagemErro.style.color = "red";
            mensagemErro.classList.add("mensagem-erro");

            let container = campo.closest(".campo-container");
            if (container) {
                container.appendChild(mensagemErro);
            } else {
                campo.parentNode.appendChild(mensagemErro); //fallback
            }
        }
    });

    //validação
    if (!termos.checked) {
        erro = true;
        let mensagemErro = document.createElement("p");
        mensagemErro.innerText = "Você deve aceitar os termos de uso";
        mensagemErro.style.color = "red";
        mensagemErro.classList.add("mensagem-erro");
        termos.parentNode.appendChild(mensagemErro);
    }

    //verificação das senhas
    if (senha.value !== confirmaSenha.value) {
        erro = true;
        let mensagemErro = document.createElement("p");
        mensagemErro.innerText = "As senhas não coincidem!";
        mensagemErro.style.color = "red";
        mensagemErro.classList.add("mensagem-erro");

        confirmaSenha.parentNode.appendChild(mensagemErro);
        senha.style.border = "2px solid red";
        confirmaSenha.style.border = "2px solid red";
    }

    if (erro) return; //caso de erro - interrompe

    let usuarioData = {
        usuario: usuario.value.trim(),
        nascimento: nascimento.value.trim(),
        email: email.value.trim(),
        regiao: regiao.value.trim(),
        senha: senha.value,
        termos: termos.checked,
        newsletter: newsletter.checked
    };

    localStorage.setItem("usuario", JSON.stringify(usuarioData));

    usuario.value = "" 
    nascimento.value = "" 
    email.value = "" 
    regiao.value = "" 
    senha.value = "" 

    window.location.href = "index.html";
}

function login() {
    let usuarioDigitado = document.getElementById("caixaUsuario").value.trim();
    let senhaDigitada = document.getElementById("caixaSenha").value;

    let usuarioSalvo = localStorage.getItem("usuario");

    if (!usuarioSalvo) {
        alert("Nenhum usuário cadastrado!");
        return;
    }

    let usuarioData = JSON.parse(usuarioSalvo);

    if (usuarioDigitado === usuarioData.usuario && senhaDigitada === usuarioData.senha) {
        window.location.href = "home.html"; 
    } else {
        alert("Usuário ou senha incorretos!");
    }
}