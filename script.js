const kunstwerken = document.querySelectorAll('.kunstwerk');

kunstwerken.forEach(kunstwerk => {
  kunstwerk.addEventListener('click', () => {
    // Verwijder 'active' van alle andere
    kunstwerken.forEach(k => k.classList.remove('active'));
    // Voeg toe aan aangeklikte
    kunstwerk.classList.add('active');
  });
});
