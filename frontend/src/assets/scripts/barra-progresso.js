//Script para a barra de progresso:
document.addEventListener("DOMContentLoaded", () => {
    const barra = document.querySelector('.barra-progresso span');
    const resumoText = document.querySelector(".resumo p");
    const macroCalorias = document.querySelectorAll('.macro-card strong')[0];

    let meta = 2000; // meta calórica diária - deve ser alterada

    barra.style.transition = "width 0.4s ease-in-out";

    function atualizarResumo(){
        const checkboxes = document.querySelectorAll('.status-alimento input[type = "checkbox"]');
        let totalKcalConsumidas = 0;

        checkboxes.forEach((checkbox) =>{
            if(checkbox.checked){
                const linha = checkbox.closest('.refeicao-tabela');
                const kcalTexto = linha.querySelector('.kcal-alimento').textContent;
                const kcal = parseFloat(kcalTexto.replace(',','.'));
                totalKcalConsumidas += kcal;
            }
        });

        let percentual = Math.min((totalKcalConsumidas/meta)*100, 100);
        barra.style.width = percentual + "%";

        resumoText.innerHTML = `Calorias Consumidas <strong>${totalKcalConsumidas.toFixed(0)} kcal</strong> / Meta <strong>${meta} kcal</strong>`;

        if(macroCalorias){
            macroCalorias.textContent = `${totalKcalConsumidas.toFixed(0)} kcal`;
        }
    }


    // Ativa eventos de todos os checkboxes visíveis
    function ativarListenersCheckboxes() {
        const checkboxes = document.querySelectorAll('.status-alimento input[type = "checkbox"]');
        checkboxes.forEach(cb => {
            cb.removeEventListener('change', atualizarResumo); 
            cb.addEventListener('change', atualizarResumo);
        });
    }
    ativarListenersCheckboxes();
    atualizarResumo();

// Caso novas refeições sejam adicionadas dinamicamente
const observer = new MutationObserver(() => {
    ativarListenersCheckboxes();
    atualizarResumo();
});

// Observa mudanças em todas as refeições
observer.observe(document.querySelector('.refeicoes'), {
    childList: true,
    subtree: true,
});
});