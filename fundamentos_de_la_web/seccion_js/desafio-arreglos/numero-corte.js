// function numeroCorte(array, num) {
//     let newArray = [];
//     for (let i = 0; i<num; i++) {
//         newArray.push(array[i]);
//     }
//     return newArray;
// }
// COMENTADO PORQUE MALENTENDÍ LA CONSIGNA

function numeroCorte(array, num) {
    let newArray = [];
    for (let i = 0; i<array.length; i++) {
        if (array[i] < num) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log(numeroCorte([1, 2, 8, 4, 5, 7, 6], 4));