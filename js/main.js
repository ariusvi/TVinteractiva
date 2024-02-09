//valores iniciales
let power = false; /* la TV empieza apagada*/
let onOff = document.getElementById("power"); /*seleccionamos el boton de power*/
let screen = document.getElementById("screen"); /*seleccionamos la pantalla*/


// let screen = document.getElementById("screen");

// /* hora y fecha actual */


setInterval(hora, 1000);

function hora(){

        const date = new Date().toLocaleString(); /*obtener fecha y hora actual */
        document.getElementById("fecha").innerHTML = date; /*inserta la fecha y hora en el html*/
}

/* botón ON/OFF */

onOff.addEventListener('click', () => {

        screen.classList.remove(screen.classList[screen.classList.length - 1]) /* eliminar las clases de id="screen", para empezar limpio*/
        power = !power; /* niega el estado de power con ! */

        console.log(power); /*ver el estado de power */
        if (power) {
                screen.classList.remove("basicScreen")
                screen.classList.add("channel0") /* cambiar la clase bassicScreen, por una nueva, channel0 - encender*/

        } else {
                screen.classList.remove("channel0")
                screen.classList.add("basicScreen") /*elimina clase screenOn, cambia por bassicScreen - apagar*/
        }
});


// Botones de canales
const buttons = document.getElementsByClassName("button"); /* Selecciona todos los elementos con la clase "button"*/
let arrayButtons = Array.from(buttons); /* Crear un array con los elementos de clase buttons*/

arrayButtons.forEach(item => {  /* itera sobre cada elemento y agrega un event listener.*/
        item.addEventListener("click", (e) => {
                if (power) {    /* Verifica si la TV está encendida*/
                        screen.classList.remove(screen.classList[screen.classList.length - 1]); // Elimina la última clase del elemento con id="screen"
                        screen.classList.add("channel" + e.target.innerHTML); // Añade la clase correspondiente al canal
                }
        });
});




// /* botón ON/OFF */

// const screenFront = document.getElementById("screenFront");

// const power = document.getElementById("power");

// power.addEventListener("click", (evento) => {
//         console.log(screen.classList);
//         console.log(screen.classList.length);

//         toggle();
// });

// let powerOn = false;
// function toggle() {
//         let screenFront = document.getElementById("screenFront");
//         powerOn = !powerOn;
//         screenFront.hidden = !screenFront.hidden;
//         console.log(powerOn);

//         if (screenFront.hidden) {
//                 console.log("apagado");
//                 screen.classList = [];
//                 screen.classList.add("powerOff");
//         } else {
//                 console.log("encendido");
//                 console.log("encendido");
//                 screen.classList = [];
//                 screen.classList.add("channel0");
//         }
// }

// /* Botones Canales */

// buttonNumbers();

// function buttonNumbers() {
//         const numbers = document.getElementsByClassName("numbers");

//         let arrayNumbers = Array.from(numbers);

//         screen = document.getElementById("screen");

//         arrayNumbers.map((item) => {
//                 item.addEventListener("click", (evento) => {
//                         console.log("push number");
//                         screen.classList.remove(screen.classList[screen.classList.length - 1]);
//                         console.log(screen.classList);
//                         console.log(evento.target.innerHTML);
//                         screen.classList.add("channel" + evento.target.innerHTML);

//                         console.log(screen.classList);
//                 });
//         });
// }


// document.getElementById("channelInfo").innerHTML = contChannel;

// let channel;
// let contChannel = 0;
// channelButtons();
// function channelButtons() {
//         const channelButton = document.getElementsByClassName("channel");
//         console.log(channelButton[0]);
//         // revisar esto, evento no lee nada, la función channel no lee nada
//         channelButton[0].addEventListener("click", (evento) => {  
//                 function channel() {
//                         console.log(screen.classList[0]),
//                                 (contChannel = screen.classList[0].substring(
//                                         screen.classList[0].length - 1,
//                                         screen.classList[0].length
//                                 )),
//                                 (screen.classList = []);
//                         {
//                         }
//                 }
//         });
//         // document.getElementById("channelInfo").innerHTML = contChannel;
// }

setInterval(hora, 1000);

function hora(){

        const date = new Date().toLocaleString(); /*obtener fecha actual */
        // const hora = date.getHours();
        // const minutos = date.getMinutes();
        // const segundos = date.getSeconds();

        // const time = `${hora}:${minutos < 10 ? "0" : ""}${minutos}:${segundos < 10 ? "0" : ""}${segundos}`; /*formato hora*/

        // document.getElementById("hora").innerHTML = time;
        // document.getElementById("fecha").innerHTML = date;

        //console.log(date)

        // document.getElementById("hora").innerHTML = time; /*inserta la hora en el html*/
        document.getElementById("fecha").innerHTML = date; /*inserta la fecha en el html*/
}