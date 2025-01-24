const button = document.querySelector(".btn");
const menu = document.querySelector(".menu");

button.addEventListener('click', () =>{
menu.classList.toggle('show');
});


window.addEventListener('scroll', () => {
    console.log('El usuario está desplazándose por la página.');
});
