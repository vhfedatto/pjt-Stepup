// Dados dos estudantes
const studentsData = {
    sergio: {
        calories: 85,
        water: 60,
        workouts: 75,
        frequency: 90
    },
    victor: {
        calories: 92,
        water: 45,
        workouts: 40,
        frequency: 70
    }
};

// Função para atualizar métricas
function updateMetrics(studentId) {
    const data = studentsData[studentId];
    
    // Atualiza as barras de progresso com animação
    document.getElementById('barraCalorias').style.width = data.calories + '%';
    document.getElementById('barraConsumoAgua').style.width = data.water + '%';
    document.getElementById('barraTreinosRealizados').style.width = data.workouts + '%';
    document.getElementById('barraFrequenciaSemanal').style.width = data.frequency + '%';
}

// Event listener para mudança de estudante
document.getElementById('seletorAlunos').addEventListener('change', function(e) {
    updateMetrics(e.target.value);
});

// Funções das ações rápidas
function editarTreino() {
    const studentName = document.getElementById('seletorAlunos').selectedOptions[0].text;
    alert(`Redirecionando para edição de treino de ${studentName}...`);
    
    // Simula redirecionamento
    console.log('Ação: Editar Treino');
    console.log('Aluno:', studentName);
}

function editarDieta() {
    const studentName = document.getElementById('seletorAlunos').selectedOptions[0].text;
    alert(`Redirecionando para edição de dieta de ${studentName}...`);
    
    // Simula redirecionamento
    console.log('Ação: Editar Dieta');
    console.log('Aluno:', studentName);
}

function enviarMotivacao() {
    const studentName = document.getElementById('seletorAlunos').selectedOptions[0].text;
    const message = prompt(`Digite uma mensagem motivacional para ${studentName}:`);
    
    if (message && message.trim() !== '') {
        alert(`Mensagem enviada para ${studentName}: "${message}"`);
        console.log('Mensagem enviada:', message);
    } else {
        alert('Mensagem cancelada.');
    }
}

function agendarReavaliacao() {
    const studentName = document.getElementById('seletorAlunos').selectedOptions[0].text;
    const date = prompt('Digite a data para reavaliação (DD/MM/AAAA):');
    
    if (date && date.trim() !== '') {
        alert(`Reavaliação agendada para ${studentName} em ${date}`);
        console.log('Reavaliação agendada:', { aluno: studentName, data: date });
    } else {
        alert('Agendamento cancelado.');
    }
}




// Animação de entrada das barras de progresso
window.addEventListener('load', function() {
    // Pequeno delay para animação suave
    setTimeout(() => {
        updateMetrics('sergio');
    }, 500);
});

// Efeito hover aprimorado nos cartões de estudantes
document.querySelectorAll('.card_alunos').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Função para simular notificações
function showNotification(message, type = 'info') {
    // Cria elemento de notificação
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 1000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        font-size: 14px;
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animação de entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove após 3 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Adiciona eventos de teclado para navegação
document.addEventListener('keydown', function(e) {
    // Alt + 1: Selecionar Sergio
    if (e.altKey && e.key === '1') {
        document.getElementById('seletorAlunos').value = 'sergio';
        updateMetrics('sergio');
        showNotification('Sergio L. selecionado');
    }
    
    // Alt + 2: Selecionar Victor
    if (e.altKey && e.key === '2') {
        document.getElementById('seletorAlunos').value = 'victor';
        updateMetrics('victor');
        showNotification('Victor F. selecionada');
    }
});

// Função para exportar dados (exemplo de funcionalidade extra)
function exportStudentData() {
    const currentStudent = document.getElementById('seletorAlunos').value;
    const data = studentsData[currentStudent];
    const studentName = document.getElementById('seletorAlunos').selectedOptions[0].text;
    
    const exportData = {
        aluno: studentName,
        data: new Date().toLocaleDateString('pt-BR'),
        metricas: {
            calorias: data.calories + '%',
            agua: data.water + '%',
            treinos: data.workouts + '%',
            frequencia: data.frequency + '%'
        }
    };
    
    console.log('Dados exportados:', exportData);
    showNotification(`Dados de ${studentName} exportados!`, 'success');
}

// Inicialização
console.log('StepUp Dashboard carregado com sucesso!');
console.log('Atalhos de teclado:');
console.log('Alt + 1: Selecionar Sergio L.');
console.log('Alt + 2: Selecionar Victor F.');