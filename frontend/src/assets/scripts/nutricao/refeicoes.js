class Refeicao {
    constructor(hr_inicio, hr_fim, kcal_max, dias) {
        this.hr_inicio = hr_inicio;
        this.hr_fim = hr_fim;
        this.kcal_max = kcal_max;
        this.dias = dias;
    }

    mostrarResumo() {
        return `Refeição das ${this.hr_inicio} às ${this.hr_fim}, com até ${this.kcal_max} kcal, dias: ${this.dias}`;
    }
}

document.getElementById('btn-salvar').addEventListener('click', () => {
    const hr_inicio = document.getElementById('input-horario').value;
    const hr_fim = document.getElementById('input-horarioFim').value;
    const kcal_max = document.getElementById('input-calorias').value;
    const dias = document.getElementById('select-dias-semana').value;

    if (!hr_inicio || !hr_fim || !kcal_max) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const novaRefeicao = new Refeicao(hr_inicio, hr_fim, kcal_max, dias);
    alert(novaRefeicao.mostrarResumo());
});








        