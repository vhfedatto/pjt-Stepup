document.addEventListener("DOMContentLoaded", function () {
    // Medicação
    let medicacaoRadios = document.getElementsByName("medicacao");
    let medicacaoInput = document.querySelector(".medicacao-tipo");

    medicacaoRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value.startsWith("yes")) {
                medicacaoInput.classList.remove("hidden");
            } else {
                medicacaoInput.classList.add("hidden");
                medicacaoInput.value = "";
            }
        });
    });

    // Doenças
    let doencasRadios = document.getElementsByName("doencas");
    let doencasInput = document.querySelector(".doenca-tipo");

    doencasRadios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (this.value.startsWith("yes")) {
                doencasInput.classList.remove("hidden");
            } else {
                doencasInput.classList.add("hidden");
                doencasInput.value = "";
            }
        });
    });
});