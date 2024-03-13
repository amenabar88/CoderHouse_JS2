// Array para almacenar las tareas
let tareas = [];

// Función para agregar una tarea
function agregarTarea() {
  let nuevaTarea = prompt("Ingrese una nueva tarea:");
  if (nuevaTarea) {
    tareas.push({ tarea: nuevaTarea, completada: false });
    console.log("Tarea agregada correctamente.");
  } else {
    alert("Por favor, ingrese una tarea válida.");
  }
}

// Función para mostrar todas las tareas
function mostrarTareas() {
  if (tareas.length === 0) {
    alert("No hay tareas para mostrar.");
  } else {
    console.log("Tareas:");
    tareas.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea.tarea} - ${tarea.completada ? "Completada" : "Pendiente"}`);
    });
  }
}

// Función para eliminar una tarea
function eliminarTarea() {
  let indice = parseInt(prompt("Ingrese el número de la tarea que desea eliminar:")) - 1;
  if (!isNaN(indice) && indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
    console.log("Tarea eliminada correctamente.");
  } else {
    alert("Ingrese un número de tarea válido.");
  }
}

// Función para marcar una tarea como completada
function marcarCompletada() {
  let indice = parseInt(prompt("Ingrese el número de la tarea que desea marcar como completada:")) - 1;
  if (!isNaN(indice) && indice >= 0 && indice < tareas.length) {
    tareas[indice].completada = true;
    console.log("Tarea marcada como completada correctamente.");
  } else {
    alert("Ingrese un número de tarea válido.");
  }
}

// Función para mostrar solo las tareas completadas
function mostrarTareasCompletadas() {
  let tareasCompletadas = tareas.filter(tarea => tarea.completada);
  if (tareasCompletadas.length === 0) {
    alert("No hay tareas completadas para mostrar.");
  } else {
    console.log("Tareas Completadas:");
    tareasCompletadas.forEach((tarea, index) => {
      console.log(`${index + 1}. ${tarea.tarea}`);
    });
  }
}
