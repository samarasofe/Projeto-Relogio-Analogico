const PONTEIROHORA = document.querySelector("#hour");
const PONTEIROMINUTO = document.querySelector("#minute");
const PONTEIROSEGUNDO = document.querySelector("#second");

var data = new Date();
console.log(data);

let hr = data.getHours();
let min = data.getMinutes();
let seg = data.getSeconds();

console.log("Hora: " + hr + " Minuto: " + min + " Segundo: " + seg);

let posicaoHr = (hr * 360 / 12) + (min * (360 / 60) / 12);
let posicaoMin = (min * 360 / 60) + (seg * (360 / 60) / 60);
let posicaoSeg = seg * 360 / 60;


function executarRelogio() {

    posicaoHr = posicaoHr + (3/360);
    posicaoMin = posicaoMin + (6 / 60);  // O ponteiro dos Minutos move 1segundo em 60 segundos algo como ((1/60)*6)
    posicaoSeg = posicaoSeg + 6; // (360°/60s = 6) O número seis é a quantidade de grau necessária para exibir um minuto adicional

    PONTEIROHORA.style.transform = "rotate(" + posicaoHr + "deg)";
    PONTEIROMINUTO.style.transform = "rotate(" + posicaoMin + "deg)"
    PONTEIROSEGUNDO.style.transform = "rotate(" + posicaoSeg + "deg)"
}

var intervalo = setInterval(executarRelogio, 1000);