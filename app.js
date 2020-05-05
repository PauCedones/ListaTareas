//VARIABLES ////

const listaTareas = document.querySelector('#lista-tareas') 

//EVENTOS////

eventListeners();

function eventListeners () {

    // Enviar Formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTarea);

    // Borrar tareas
    listaTareas.addEventListener('click', borrarTarea);

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}


//FUNCIONES ////

//añadir tarea del formulario
function agregarTarea (e) {
    e.preventDefault();

    //leer el valor de textTarea
    const tarea = document.querySelector('#tarea').value;

    visualizarTarea(tarea);

    //Añadir a Local Storage
    agregarTareaLocalStorage(tarea);

    //reset del textarea 
    formulario.reset()
}
//Ver los tareas 
function visualizarTarea (tarea){
    // Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tarea';
    botonBorrar.innerText = 'X';
    
    //crear elemento y añadir el contenido a la lista
    const li = document.createElement('li');
    li.classList = 'lista-tarea';
    li.innerText = tarea;
    // añade el boton borrar al tarea
    li.appendChild(botonBorrar);
    // añade el tarea a la lista
    listaTareas.appendChild(li);
}

// Borra el tarea del DOM
function borrarTarea (e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tarea'){
        e.target.parentElement.remove();
        borrarTareaLocalStorage(e.target.parentElement.textContent);
    }
}

// Mostrar datos de local storage en la lista
function localStorageListo(){
    let tareas;

    tareas = obtenerTareasLocalStorage();

    tareas.forEach(function(tarea){
        visualizarTarea(tarea);
    });
}



// Agrega tareas a local storage
function agregarTareaLocalStorage (tarea){
    let tareas;
    tareas = obtenerTareasLocalStorage();
    //añadir el nuevo tarea
    tareas.push(tarea);
    //convertir de string a arreglo para local storage
    localStorage.setItem('tareas', JSON.stringify(tareas) );
 }

 // comprobar que haya elementos en local storage, retorna en un arreglo
function obtenerTareasLocalStorage () {
     let tareas;
     //revisamos los valores de local storage
     if(localStorage.getItem('tareas') === null) {
        tareas = [];
     } else {
        tareas = JSON.parse(localStorage.getItem('tareas') );
     }
     return tareas;
 }

 //Eliminar tarea de local storage
function borrarTareaLocalStorage (tarea) {
    let tareas, tareaBorrar;
    // Elimina la X del tarea
    tareaBorrar = tarea.substring(0, tarea.length - 1);

    tareas = obtenerTareasLocalStorage();

    tareas.forEach(function(tarea, index){
        if(tareaBorrar === tarea){
            tareas.splice(index, 1);
        }
    }) ;
    localStorage.setItem('tareas', JSON.stringify(tareas));
 }




