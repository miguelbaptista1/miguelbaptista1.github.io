function pinta(cor) {
    document.querySelector("#pinta").style.color = cor;

}

const input = document.querySelector("#inputCor");
const botao = document.querySelector("#botaoSubmeter")

botao.addEventListener("click", () => {
    const cor = input.value.trim().toLowerCase();
    document.body.style.backgroundColor = cor;
    input.value = "";
});

const heading = document.querySelector("#conta");
const button = document.querySelector("#botaoContar");

if(!localStorage.getItem('contador')) {
    localStorage.setItem('contador', 0);
}

heading.textContent = localStorage.getItem('contador')

function contar() {
    let contador = Number(localStorage.getItem('contador'));
    contador++;
    heading.textContent = contador;
    localStorage.setItem('contador', contador);

}

button.onclick= contar;

const letraAntes = document.querySelector('#antes');
const letraDepois = document.querySelector('#depois');
        
const caixaDepois = document.querySelector('#depois');
const originalMsg = letraDepois.textContent;


function onEnter() {
    caixaDepois.style.display = 'inline';
    letraDepois.textContent = 'Obrigado por teres passado!!';
    letraAntes.style.opacity = '0';

}
        
function onLeave() {
    caixaDepois.style.display = 'none';
    letraDepois.textContent = originalMsg;
    letraAntes.style.opacity = '1';
}
letraAntes.addEventListener('mouseenter', onEnter);
letraAntes.addEventListener('mouseleave', onLeave);