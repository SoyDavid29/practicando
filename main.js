const button = document.querySelector(".btn");
const menu = document.querySelector(".menu");

button.addEventListener('click', () =>{
menu.classList.toggle('show');
});

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    return '¿Estás seguro de que deseas salir?';
});

window.addEventListener('scroll', () => {
    console.log('El usuario está desplazándose por la página.');
});
