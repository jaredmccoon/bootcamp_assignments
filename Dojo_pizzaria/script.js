function pizzaOven(crust, sauce, cheese, toppings) {
    var pizza = {};
    pizza.style = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}


var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["peperroni, sausage"]);
var pizza2 = pizzaOven("hand tossed","marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var pizza3 = pizzaOven("thin crust", "white sauce", ["mozzarella", "cheddar"], ["jalapenos", "olives", "mushrooms"])
var pizza4 = pizzaOven("deep dish", "marinara", ["feta"], ["jalapenos", "peperroni", "mushrooms"])
console.log(pizza1)
console.log(pizza2)
console.log(pizza3)
console.log(pizza4)

