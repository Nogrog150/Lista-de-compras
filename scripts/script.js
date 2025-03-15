// Verifica o tamanho da tela
if (window.innerWidth <= 1024) {
  // Remove a classe do elemento
  document.querySelector('.input_button').classList.remove('input_button');
} else {
    document.querySelector('.input_button').classList.add('input_button');
}

// Adiciona um listener para o evento resize
window.addEventListener('resize', function() {
  if (window.innerWidth <= 1024) {
    document.querySelector('.input_button').classList.remove('input_button');
  } else {
    document.querySelector('.input_button').classList.add('input_button');
  }
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


