function mudaModo(){
    mudaClasses();
    mudaTexto();
}

function mudaClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    content.classList.toggle(darkModeClass);
    rodape.classList.toggle(darkModeClass);
}

function mudaTexto() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if (content.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';
}

const darkModeClass = 'dark-mode';
const button = document.getElementsByClassName('btn')[0];
const h1 = document.getElementsByClassName('texto')[0]; 
const content = document.getElementsByClassName('content')[0];
const rodape =  document.getElementsByClassName('rodape')[0];

button.addEventListener('click', mudaModo);