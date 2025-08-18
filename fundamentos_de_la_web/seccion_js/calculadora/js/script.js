const calcButtons = document.querySelectorAll("button");

let input = document.querySelector("#display");
let resultado;

calcButtons.forEach(boton => {

    boton.addEventListener("click", function () { 
    if (boton.textContent == "C") {
        input.value = "";
        resultado = undefined;
    } else if (boton.textContent == "=") {
        resultado = eval(input.value);
        input.value = resultado;
    } else {
        if (boton.textContent == "÷") {
            input.value += "/";
            operation = "div";
        } else {
            input.value += boton.textContent;
        }
    }
    })
});