function estoyAburrido (array) {
    for(let i = 0; i < array.length; i++){
        if(array[i]=="ver TV") {
            console.log("¡Entretenido!");
        } else {
            console.log("¡Aburrido!");
        }
    }
}

estoyAburrido(["cantar", "correr", "salir", "ver TV"]);