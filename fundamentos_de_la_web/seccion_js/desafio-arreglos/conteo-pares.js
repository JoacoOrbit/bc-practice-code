function pares (array) {
    let cuantosPares = 0;
    for (let i = 0; i<array.length;i++) {
        if (array[i]%2==0) {
            cuantosPares += 1;
        }
    }
    return cuantosPares;
}

console.log(pares([1, 2, 3, 4, 5, 6, 10, 11, 13, 14, 16, 18]));