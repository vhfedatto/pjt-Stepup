// header.test.js
describe('Testes para o Menu Hamburguer', () => {
  let hamburger, menuLateral, overlay;

  beforeEach(() => {
    // Configuração mais robusta do DOM
    document.body.innerHTML = `
      <button class="hamburger">☰</button>
      <div id="menu-lateral" style="position: fixed; left: -250px; width: -250px;"></div>
      <div id="overlay" style="display: none; position: fixed;"></div>
    `;

    // Carrega as funções originais
    require('./header.js');

    // Obtém referências
    hamburger = document.querySelector('.hamburger');
    menuLateral = document.getElementById('menu-lateral');
    overlay = document.getElementById('overlay');
  });

  test('Abrir menu deve definir left como 0px', () => {
    // Simula clique no hamburguer
    hamburger.click();
    
    // Verificação mais tolerante
    const leftValue = menuLateral.style.left;
    expect(leftValue === '0px' || leftValue === '0').toBeTruthy();
    expect(overlay.style.display).toBe('block');
  });

  test('Fechar menu deve definir left como -250px', () => {
    // Prepara estado: menu aberto
    menuLateral.style.left = '0px';
    overlay.style.display = 'block';
    
    // Simula clique no overlay
    overlay.click();
    
    // Verificação mais flexível
    const leftValue = menuLateral.style.left;
    expect(leftValue === '-250px' || leftValue === '-250').toBeTruthy();
    expect(overlay.style.display).toBe('none');
  });

  test('Menu deve iniciar fechado', () => {
    const leftValue = menuLateral.style.left;
    expect(leftValue === '-250px' || leftValue === '-250').toBeTruthy();
    expect(overlay.style.display).toBe('none');
  });
});