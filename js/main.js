// Variables
let tareas = [];

// Funciones
function agregarTarea() {
  let inputTarea = document.getElementById('inputTarea');
  let tarea = inputTarea.value.trim();
  
  if (tarea !== '') {
    tareas.push({ tarea: tarea, completada: false });
    inputTarea.value = '';
    actualizarListaTareas();
  } else {
    alert('Por favor, ingresa una tarea válida.');
  }
}

function eliminarTarea(index) {
  tareas.splice(index, 1);
  actualizarListaTareas();
}

function toggleCompletada(index) {
  tareas[index].completada = !tareas[index].completada;
  actualizarListaTareas();
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
