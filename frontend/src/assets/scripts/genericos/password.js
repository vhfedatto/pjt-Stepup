function toggleSenha(inputId, imgId) {
    const senhaInput = document.getElementById(inputId);
    const img = document.getElementById(imgId);

    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        img.src = "../../public/images/olho-aberto.png";
    } else {
        senhaInput.type = "password";
        img.src = "../../public/images/olho-fechado.png";
    }
}
