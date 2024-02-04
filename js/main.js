//canal-botones
const buttons = document.getElementsByClassName("button")

let arrayButtons = Array.from(buttons)

let screen = document.getElementById("screen")

arrayButtons.map(
    item => {
        item.addEventListener("click", (evento) => {
            screen.classList.remove(screen.classList[screen.classList.length - 1])
            if(evento.target.id === "power"){
                screen.classList.add("basicScreen")
            } else {
                screen.classList.add("canal" + evento.target.id.slice(-1))
            }
            
        })
    }
)

//boton power

