let formularioImagenes = document.querySelector(".formularioImagenes");

formularioImagenes.addEventListener("submit", async function (event) {
    event.preventDefault();
    let numeroDeImagenes = document.querySelector("#numeroDeImagenes");

    let url = "https://dog.ceo/api/breeds/image/random/" + numeroDeImagenes.value;
    let config = {
        method: "GET"
    };

    let respuesta = await fetch(url, config);
    let datosJSON = await respuesta.json();
    console.log(datosJSON);

    let contenedorDeImagenes = document.querySelector(".imagenes")
    contenedorDeImagenes.innerHTML = ""
    for(let i = 0; i < datosJSON.message.length; i++){
        contenedorDeImagenes.innerHTML += `<img src="${datosJSON.message[i]}" alt="perrito">`;
    }
})