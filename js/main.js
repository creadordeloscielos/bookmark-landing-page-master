let btn = document.getElementById("btn");
let menu = document.getElementById("menu");
contador = 0;

btn.addEventListener("click", function () {

    if (contador == 0) {
        menu.className = ("mostrar");
        contador = 1;

    } else {
        menu.classList.remove = ("mostrar");
        alert("Quitando");
        contador = 0;
    }

})