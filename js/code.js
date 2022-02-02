let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");

setInterval(() => {
    let date = new Date;
    let grados = 0;

    /**HORAS*/
    let hora = date.getHours();
    if (hora >= 12) hora -= 12

    grados = (180 + (hora * 30));
    horas.style.transform = `translateX(-50%) rotate(${grados}deg)`;

    /**MINUTOS*/
    let minuto = date.getMinutes();
    grados = (180 + (minuto * 6));
    minutos.style.transform = `translateX(-50%) rotate(${grados}deg)`;

    /**SEGUNDOS*/
    let segundo = date.getSeconds();
    grados = (180 + (segundo * 6));
    segundos.style.transform = `translateX(-50%) rotate(${grados}deg)`;
},1000);