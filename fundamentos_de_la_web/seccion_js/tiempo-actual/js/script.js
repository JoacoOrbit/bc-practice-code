const cookieBtn = document.querySelector(".cookie-btn");

cookieBtn.addEventListener("click", function () {
    this.closest(".cookie-box").remove();
});

const cities = document.querySelectorAll(".city-list > li");

for (let i = 0; i<cities.length; i++) {
    cities[i].addEventListener("click", function(){
        alert("Cargando reporte del clima de " + cities[i].textContent);
    })
}

const tempSelector = document.querySelector("#temp")

tempSelector.addEventListener("change", changeTemp);

function changeTemp() {
    const temperature = document.querySelectorAll(".min-temp, .max-temp");
    const tempLetter = document.querySelectorAll(".temp-letter");

    // console.log (temperature)
    console.log (this);

    if (this.value == "fahrenheit") {
        for (let i = 0; i<temperature.length; i++){
            let tempToChange = temperature[i].textContent;
            let newTemp = tempToChange * 1.8 + 32;
            temperature[i].textContent = Math.trunc(newTemp);
            // console.log("si entra al for")
        }
        for (let i = 0; i<tempLetter.length; i++){
            tempLetter[i].textContent = "°F";
        }
    } else if (this.value == "celsius") {
        for (let i = 0; i<temperature.length; i++){
            let tempToChange = temperature[i].textContent;
            let newTemp = (tempToChange - 32) / 1.8;
            temperature[i].textContent = Math.trunc(newTemp);
            // console.log("si entra al for")
        }
        for (let i = 0; i<tempLetter.length; i++){
            tempLetter[i].textContent = "°C";
        }
    }
}