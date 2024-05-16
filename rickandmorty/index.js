import App from "./App.js"
    //evento que levanta la app
    document.addEventListener('DOMContentLoaded', App);
    //evento que escucha cambios en la ruta
    window.addEventListener('hashchange', App);
