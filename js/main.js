// Valores iniciales
let power = false; /* la TV empieza apagada*/
const onOff = document.getElementById("power"); /* seleccionamos el boton de power*/
const screen = document.getElementById("screen"); /* seleccionamos la pantalla*/
const info = document.getElementsByClassName("hidden")[0];

// Función para mostrar la hora y la fecha
function hora() {
        const date = new Date().toLocaleString(); /*obtener fecha y hora actual */
        document.getElementById("fecha").innerHTML = date; /*inserta la fecha y hora en el html*/
}

setInterval(hora, 1000); /*Actualizar la hora y la fecha cada segundo*/

/* Evento de clic en el botón de encendido/apagado */
onOff.addEventListener('click', () => {
        // Verificar si la pantalla tiene clases antes de eliminarlas
        if (screen.classList.length > 0) {
                screen.classList.remove(screen.classList[screen.classList.length - 1]); /* eliminar la última clase del elemento con id="screen", para empezar limpio */
        }

        power = !power; 

        console.log(power); /*ver el estado de power */
        if (power) {
                screen.classList.add("channel0"); /* cambiar la clase bassicScreen, por una nueva, channel0 - encender*/
                info.classList.replace("hidden" , "visible");

        } else {
                screen.classList.add("basicScreen"); /*elimina clase screenOn, cambia por bassicScreen - apagar*/
                info.classList.replace("visible" , "hidden");

        }
});

// Botones de canales
const buttons = document.getElementsByClassName("button"); /* selecciona todos los elementos con la clase "button"*/
let arrayButtons = Array.from(buttons); /* crea un array con los elementos de clase buttons*/

arrayButtons.forEach(item => {
        item.addEventListener("click", (e) => {
                if (power) { /* Verifica si la TV está encendida*/
                        screen.classList.remove(screen.classList[screen.classList.length - 1]); /* elimina la última clase del elemento con id="screen" */
                        screen.classList.add("channel" + e.target.innerHTML); /* añade la clase correspondiente al canal*/
                }
        });
});

