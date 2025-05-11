function setUserType(type, btn) {
    document.querySelectorAll('.user-type-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (type === 'athlete') {
        document.getElementById('athleteFields').style.display = 'block';
        document.getElementById('professionalFields').style.display = 'none';
    } else {
        document.getElementById('athleteFields').style.display = 'none';
        document.getElementById('professionalFields').style.display = 'block';
    }
}

