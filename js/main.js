let tareas = [];

function guardarTareasEnStorage() {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

function cargarTareasDesdeStorage() {
  const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
  if (tareasGuardadas) {
    tareas = tareasGuardadas;
    actualizarListaTareas();
  }
}

function actualizarListaTareas() {
  let listaTareas = document.getElementById('listaTareas');
  listaTareas.innerHTML = '';

  tareas.forEach((tarea, index) => {
    let li = document.createElement('li');
    li.textContent = tarea.tarea;
    if (tarea.completada) {
      li.classList.add('completed');
    }
    li.addEventListener('click', () => toggleCompletada(index));
    
    let botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', (event) => {
      event.stopPropagation();
      eliminarTarea(index);
    });

    li.appendChild(botonEliminar);
    listaTareas.appendChild(li);
  });
}

function agregarTarea() {
  let nuevaTarea = document.getElementById('inputTarea').value.trim();
  if (nuevaTarea !== '') {
    tareas.push({ tarea: nuevaTarea, completada: false });
    guardarTareasEnStorage();
    actualizarListaTareas();
    mostrarMensaje('Tarea agregada correctamente', 'success');
    document.getElementById('inputTarea').value = '';
  } else {
    mostrarMensaje('Por favor, ingrese una tarea válida', 'error');
  }
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  guardarTareasEnStorage();
  actualizarListaTareas();
}

function toggleCompletada(index) {
  tareas[index].completada = !tareas[index].completada;
  guardarTareasEnStorage();
  actualizarListaTareas();
}

function mostrarMensaje(mensaje, tipo) {
  let divMensaje = document.createElement('div');
  divMensaje.className = `mensaje ${tipo}`;
  divMensaje.textContent = mensaje;
  document.body.insertBefore(divMensaje, document.querySelector('.container'));

  setTimeout(() => {
    divMensaje.remove();
  }, 3000);
}
