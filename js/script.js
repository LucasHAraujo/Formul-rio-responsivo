document.getElementById('genero').addEventListener('change', function() {
    var caixaTexto = document.getElementById('caixaTexto');
    if (this.value === 'outros') {
      caixaTexto.style.display = 'block';
    } else {
      caixaTexto.style.display = 'none';
    }
  });