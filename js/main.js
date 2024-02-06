let screen = document.getElementById("screen");

/* hora y fecha actual */

setInterval(hora, 1000);

function hora() {
        const date = new Date().toLocaleDateString();
        let hora = new Date().getHours();
        let minutos = new Date().getMinutes();
        let segundos = new Date().getSeconds();
        const time = `${hora}:${minutos < 10 ? "0" : ""}${minutos}:${segundos < 10 ? "0" : ""
                }${segundos}`;
        document.getElementById("hora").innerHTML = time;
        document.getElementById("fecha").innerHTML = date;
}

/* botón ON/OFF */

const screenFront = document.getElementById("screenFront");

const power = document.getElementById("power");

power.addEventListener("click", (evento) => {
        console.log(screen.classList);
        console.log(screen.classList.length);

        toggle();
});

let powerOn = false;
function toggle() {
        let screenFront = document.getElementById("screenFront");
        powerOn = !powerOn;
        screenFront.hidden = !screenFront.hidden;
        console.log(powerOn);

        if (screenFront.hidden) {
                console.log("apagado");
                screen.classList = [];
                screen.classList.add("powerOff");
        } else {
                console.log("encendido");
                console.log("encendido");
                screen.classList = [];
                screen.classList.add("channel0");
        }
}

/* Botones Canales */

buttonNumbers();

function buttonNumbers() {
        const numbers = document.getElementsByClassName("numbers");

        let arrayNumbers = Array.from(numbers);

        screen = document.getElementById("screen");

        arrayNumbers.map((item) => {
                item.addEventListener("click", (evento) => {
                        console.log("push number");
                        screen.classList.remove(screen.classList[screen.classList.length - 1]);
                        console.log(screen.classList);
                        console.log(evento.target.innerHTML);
                        screen.classList.add("channel" + evento.target.innerHTML);

                        console.log(screen.classList);
                });
        });
}

let channel;
let contChannel = 0;
channelButtons();
function channelButtons() {
        const channelButton = document.getElementsByClassName("channel");
        console.log(channelButton[0]);
        channelButton[0].addEventListener("click", (evento) => {
                function channel() {
                        console.log(screen.classList[0]),
                                (contChannel = screen.classList[0].substring(
                                        screen.classList[0].length - 1,
                                        screen.classList[0].length
                                )),
                                (screen.classList = []);
                        {
                        }
                }
        });
        // document.getElementById("channelInfo").innerHTML = contChannel;
}
