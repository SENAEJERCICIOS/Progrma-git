// Agregar evento de clic al botón de comentarios
const botonComentarios = document.getElementById('boton-comentarios');
botonComentarios.addEventListener('click', mostrarFormularioComentarios);

// Función para mostrar el formulario de comentarios
function mostrarFormularioComentarios() {
  const formularioComentarios = document.getElementById('comentarios');
  formularioComentarios.style.display = 'block';
}

// Agregar evento de envío al formulario de comentarios
const formularioComentarios = document.getElementById('formulario-comentarios');
formularioComentarios.addEventListener('submit', agregarComentario);

// Función para agregar un nuevo comentario
function agregarComentario(event) {
  // Prevenir la acción por defecto del formulario
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const comentario = document.getElementById('comentario').value;

  // Validar que los campos no estén vacíos
  if (nombre.trim() === '' || comentario.trim() === '') {
    alert('Por favor, completa todos los campos');
    return;
  }

  // Crear un nuevo elemento de comentario
  const nuevoComentario = document.createElement('div');
  nuevoComentario.classList.add('comentario');
  nuevoComentario.innerHTML = `
    <h4>${nombre}</h4>
    <p>${comentario}</p>
  `;

  // Agregar el nuevo comentario a la sección de comentarios
  const seccionComentarios = document.getElementById('lista-comentarios');
  seccionComentarios.appendChild(nuevoComentario);

  // Resetear el formulario
  formularioComentarios.reset();
}
