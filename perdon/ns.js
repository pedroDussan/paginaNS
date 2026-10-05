const btnNo=document.getElementById('no');
const btnSi=document.getElementById('si');
const card=document.getElementById('card');
const pregunta=document.getElementById('pregunta');
const btnContainer=document.getElementById('btn-container');


function magia() {

    const padding=20;//seguridad

    const X = window.innerWidth - btnNo.offsetWidth - padding;
    const Y = window.innerHeight - btnNo.offsetHeight - padding;


    const randomX = Math.max(padding, Math.floor(Math.random() * X));
    const randomY = Math.max(padding, Math.floor(Math.random() * Y));


    btnNo.style.position = 'fixed';

    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
}



btnNo.addEventListener('mouseover', magia);
btnNo.addEventListener('click', magia);//maus cliks p causa


//cel
btnNo.addEventListener('touchstart', (e) => {

    e.preventDefault();

    magia();
});


btnSi.addEventListener('click', () => {

    pregunta.textContent = "nos vemos en clases siii? :3";
    btnContainer.style.display = 'none';
});