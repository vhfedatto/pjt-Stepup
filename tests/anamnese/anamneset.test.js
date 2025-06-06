/**
 * @jest-environment jsdom
 */

const configurarFormulario = require('./anamnese');

describe("Interação com radio buttons", () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <input type="radio" name="medicacao" value="yes_medicacao">
            <input type="radio" name="medicacao" value="no_medicacao">
            <input class="medicacao-tipo hidden" value="alguma coisa">

            <input type="radio" name="doencas" value="yes_doencas">
            <input type="radio" name="doencas" value="no_doencas">
            <input class="doenca-tipo hidden" value="alguma doença">
        `;

        configurarFormulario();

        // Simula o carregamento do DOM
        document.dispatchEvent(new Event("DOMContentLoaded"));
    });

    test("Exibe o campo medicacao quando opção 'yes' é selecionada", () => {
        const yesRadio = document.querySelector('input[value="yes_medicacao"]');
        const input = document.querySelector('.medicacao-tipo');

        yesRadio.checked = true;
        yesRadio.dispatchEvent(new Event("change"));

        expect(input.classList.contains("hidden")).toBe(false);
    });

    test("Esconde o campo medicacao e limpa o valor quando opção 'no' é selecionada", () => {
        const input = document.querySelector('.medicacao-tipo');
        input.classList.remove("hidden");
        input.value = "Remédio A";

        const noRadio = document.querySelector('input[value="no_medicacao"]');
        noRadio.checked = true;
        noRadio.dispatchEvent(new Event("change"));

        expect(input.classList.contains("hidden")).toBe(true);
        expect(input.value).toBe("");
    });
});
