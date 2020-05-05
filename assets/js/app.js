//VARIABLES ////

const listaTweets = document.querySelector('#lista-tweets') 

//EVENTOS////

eventListeners();

function eventListeners () {

    // Enviar Formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);
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
    // añade el boton borrar al tweet
    li.appendChild(botonBorrar);
    // añade el tweet a la lista
    listaTweets.appendChild(li);
}

function borrarTweet (e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        return(e.target.parentElement.remove());
        alert('Tweet Eliminado');
    }
    

}

