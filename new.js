document.getElementById('search-form').addEventListener('submit', function(event) {
	event.preventDefault(); // Evita que el formulario se envíe

	var searchTerm = document.getElementById('search-input').value.toLowerCase();

	// Redirige a la página correspondiente según el término de búsqueda
	if (searchTerm === 'accesorios') {
	  window.location.href = 'accesorios.html';
	} else if (searchTerm === 'remeras') {
	  window.location.href = 'remeras.html';
	} else if (searchTerm === 'buzos') {
	  window.location.href = 'buzos.html';
	} else if (searchTerm === 'pantalones') {
	  window.location.href = 'pantalones.html';
	} else {
	  // Si el término de búsqueda no coincide con ninguna opción, puedes mostrar un mensaje de error o realizar otra acción
	  alert('No se encontraron resultados para la búsqueda');
	}
  });
