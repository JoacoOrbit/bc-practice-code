function fibonacci (num) {
    let fibonacci = [0, 1];
    for (let i = 2; i < num; i++) {
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
    }
    return fibonacci;
}

console.log(fibonacci(30));

// me falló: 
// hice el array inicial solo con [1]
// el for contaba desde 0
// y la suma era [i] + [i-1]