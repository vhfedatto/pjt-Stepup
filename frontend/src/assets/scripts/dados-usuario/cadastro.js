document.getElementById("signUpForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const userType = document.querySelector(".user-type-btn.active").innerText.toLowerCase();
    const isAthlete = userType === "atleta";
    const formData = {};

    // Limpar mensagens de erro antigas
    document.querySelectorAll(".mensagem-erro").forEach(el => el.remove());

    // Obtenha os campos relevantes
    const campos = isAthlete
        ? {
            nome: document.getElementById("nome"),
            username: document.getElementById("usernome"),
            genero: document.getElementById("genero"),
            nascimento: document.getElementById("dataNascimento"),
            email: document.getElementById("emailAtleta"),
            senha: document.getElementById("senhaAtleta"),
            confirmarSenha: document.getElementById("confirmarSenhaAtleta"),
            termos: document.querySelector("#athleteFields input[type='checkbox']")
        }
        : {
            nome: document.getElementById("nome"),
            username: document.getElementById("usernome"),
            genero: document.getElementById("genero"),
            cpf: document.getElementById("cpf"),
            profissao: document.getElementById("profissao"),
            registro: document.getElementById("registro"),
            email: document.getElementById("emailProfissional"),
            senha: document.getElementById("senhaProfissional"),
            confirmarSenha: document.getElementById("confirmarSenhaProfissional"),
            termos: document.querySelector("#professionalFields input[type='checkbox']")
        };

    let erro = false;

    for (let key in campos) {
        const campo = campos[key];
        if (!campo || (campo.type !== "checkbox" && campo.value.trim() === "")) {
            erro = true;
            campo.style.border = "2px solid red";

            const msg = document.createElement("p");
            msg.classList.add("mensagem-erro");
            msg.style.color = "red";
            msg.style.marginTop = "4px";
            msg.innerText = "Este campo é obrigatório";

            // Insere a mensagem logo após o campo
            if (campo.nextElementSibling && campo.nextElementSibling.classList.contains("mensagem-erro")) {
                continue; // já tem mensagem
            }
            campo.insertAdjacentElement("afterend", msg);
        } else {
            campo.style.border = "1px solid #ccc";
        }
    }

    // Termos obrigatórios
    if (!campos.termos.checked) {
        erro = true;
        const msg = document.createElement("p");
        msg.classList.add("mensagem-erro");
        msg.style.color = "red";
        msg.innerText = "Você deve aceitar os termos de uso";
        campos.termos.parentNode.appendChild(msg);
    }

    // Verificação de senha
    if (campos.senha.value !== campos.confirmarSenha.value) {
        erro = true;
        const msg = document.createElement("p");
        msg.classList.add("mensagem-erro");
        msg.style.color = "red";
        msg.innerText = "As senhas não coincidem";
        campos.confirmarSenha.insertAdjacentElement("afterend", msg);
        campos.senha.style.border = "2px solid red";
        campos.confirmarSenha.style.border = "2px solid red";
    }

    if (erro) return;

    // Salvar dados
    for (let key in campos) {
        if (campos[key].type !== "checkbox") {
            formData[key] = campos[key].value.trim();
        } else {
            formData[key] = campos[key].checked;
        }
    }

    const chave = isAthlete ? "usuarioAtleta" : "usuarioProfissional";
    localStorage.setItem(chave, JSON.stringify(formData));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "../anamnese.html";
});