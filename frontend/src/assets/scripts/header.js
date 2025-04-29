const hamburger = document.querySelector('.hamburger');
const menuLateral = document.getElementById('menu-lateral');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
    menuLateral.style.left = '0';
    overlay.style.display = 'block';
    overlay.style.remove.display = 'none';
});
      
overlay.addEventListener('click', () => {
    menuLateral.style.left = '-250px';
    overlay.style.display = 'none';
});