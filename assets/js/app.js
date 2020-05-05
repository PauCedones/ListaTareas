//VARIABLES ////

const listaTweets = document.querySelector('#lista-tweets') 

//EVENTOS////

eventListeners();

function eventListeners () {

    // Enviar Formularia
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);
}








//FUNCIONES ////

//añadir tweet del formulario
function agregarTweet (e) {
    e.preventDefault();
    //console.log('Formulario Enviado');
    //leer el valor de textTarea
    const tweet = document.querySelector('#tweet').value;

    // Crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    
    //crear elemento y añadir el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);

    
    
    console.log(tweet);
}

