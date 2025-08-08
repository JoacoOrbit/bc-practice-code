function pizzaOven (corteza, salsa, queso, extras) {
    let pizza = {};
    pizza.corteza = corteza;
    pizza.salsa = salsa;
    pizza.queso = queso;
    pizza.extras = extras;
    return pizza;
}

let pizzaChicago = pizzaOven("estilo Chicago", "tradicional", "mozzarella", ["pepperoni", "salchicha"] );

let pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"])

console.log(pizzaChicago);
console.log(pizza2);