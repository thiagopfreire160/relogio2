const mes = document.getElementById('meses');
const days = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const milis = document.getElementById('mili');


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let ms = dateToday.getMonth();
    let dia = dateToday.getDay();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let mili = dateToday.getMilliseconds();

    if (ms < 10) ms ='0' + (ms + 1) ;
    if (dia < 10) dia = '0' + dia;
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;
    if (mili < 10) mili = '0' + mili;
    

    
    mes.textContent = ms;
    days.textContent = dia;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
    milis.textContent = mili;
    
}); 

function myFunction() {

    var element = document.body;
    element.classList.toggle("dark-mode");
  
 }
 

 
 /* CSS */
