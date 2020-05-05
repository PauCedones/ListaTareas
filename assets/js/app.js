//VARIABLES ////

const listaTweets = document.querySelector('#lista-tweets') 

//EVENTOS////

eventListeners();

function eventListeners () {

    // Enviar Formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    // Borrar Tweets
    listaTweets.addEventListener('click', borrarTweet);

    // Contenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}


//FUNCIONES ////

//añadir tweet del formulario
function agregarTweet (e) {
    e.preventDefault();

    //leer el valor de textTarea
    const tweet = document.querySelector('#tweet').value;

    visualizarTweet(tweet);

    //Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}
//Ver los tweets 
function visualizarTweet (tweet){
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

// Borra el tweet del DOM
function borrarTweet (e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.textContent);
    }
}

// Mostrar datos de local storage en la lista
function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet){
        visualizarTweet(tweet);
    });
}



// Agrega Tweets a local storage
function agregarTweetLocalStorage (tweet){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    //añadir el nuevo tweet
    tweets.push(tweet);
    //convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets) );
 }

 // comprobar que haya elementos en local storage, retorna en un arreglo
function obtenerTweetsLocalStorage () {
     let tweets;
     //revisamos los valores de local storage
     if(localStorage.getItem('tweets') === null) {
        tweets = [];
     } else {
        tweets = JSON.parse(localStorage.getItem('tweets') );
     }
     return tweets;
 }

 //Eliminar tweet de local storage
function borrarTweetLocalStorage (tweet) {
    let tweets, tweetBorrar;
    // Elimina la X del tweet
    tweetBorrar = tweet.substring(0, tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet){
            tweets.splice(index, 1);
        }
    }) ;
    localStorage.setItem('tweets', JSON.stringify(tweets));
 }




