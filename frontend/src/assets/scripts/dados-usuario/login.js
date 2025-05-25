document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // ← ESSENCIAL

    const usuarioDigitado = document.getElementById("usuario").value.trim();
    const senhaDigitada = document.getElementById("password").value;

    const atleta = JSON.parse(localStorage.getItem("usuarioAtleta"));
    const profissional = JSON.parse(localStorage.getItem("usuarioProfissional"));

    let usuarioValido = null;

    if (atleta && (usuarioDigitado === atleta.username || usuarioDigitado === atleta.email)) {
        if (senhaDigitada === atleta.senha) {
            usuarioValido = "atleta";
        }
    }

    if (profissional && (usuarioDigitado === profissional.username || usuarioDigitado === profissional.email)) {
        if (senhaDigitada === profissional.senha) {
            usuarioValido = "profissional";
        }
    }

    if (usuarioValido) {
        // Redirecionamento pode mudar conforme o perfil
        window.location.href = "../home.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});