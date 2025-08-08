function menorPromedio (array) {
    let sum = 0;
    for (let i = 0; i<array.length; i++) {
        sum += array[i];
    }

    average = sum / array.length;

    belowAvg = [];
    belowAvgTotal = 0;

    for (let i = 0; i<array.length; i++) {
        if (array[i] < average) {
            belowAvg.push(array[i]);
            belowAvgTotal += 1;
        }
    }
    console.log('hay ', belowAvgTotal, ' numeros bajo el promedio');
    return belowAvg;
}

console.log(menorPromedio([1, 20, 3, 4, 15, 6, 27]));