function pizzaOven(crust, sauce, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    
    return pizza;
}

/* 
Basic manual pizzas

var notPizza = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
var goodPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var saintLouisPizza = pizzaOven("thin crust", "marinara", ["provel"], ["pepperoni", "sausage"]);
var specialtyPizza = pizzaOven("whole wheat", "white sauce", ["burrata", "parmesan"], ["basil", "prosciutto"]);

console.log("I'm not sure who calls this a pizza but those wackos over in Chicago.\n", notPizza);
console.log("Now this is a good, simple veggie pizza.\n", goodPizza);
console.log("Those folk over in Saint Louis have this thin, interesting pizza!\n", saintLouisPizza);
console.log("And for when we want to make it kinda classy.\n", specialtyPizza);
*/

function makeMeAPizza() {
    var randomPizza = {};
    var crust = pickCrust();
    var sauce = pickSauce();
    var cheese = pickCheese();

    var max = 3, min = 1;
    // random is 0 to 1. floor rounds down/concatenates. this picks an index
    var numToppings = Math.floor(Math.random() * (max - min + 1) ) + min; // min to max inclusive

    var toppings = pickToppings(numToppings);

    return pizzaOven(crust, sauce, cheese, toppings);
}

function pickCrust() {
    var crustOptions = ["Neapolitan", "New York", "Saint Louis", "Thick Crust", "Grandma", "Whole wheat"];
    return crustOptions[ Math.floor(Math.random() * crustOptions.length) ];
}

function pickSauce() {
    var sauceOptions = ["marinara", "buffalo sauce", "pesto", "white garlic sauce", "ranch sauce", "hummus"];
    return sauceOptions[ Math.floor(Math.random() * sauceOptions.length) ];
}

function pickCheese() {
    var cheeseOptions = ["mozzarella", "provolone", "4 cheese", "gouda", "goat cheese", "gruyere", "ricotta"];
    return cheeseOptions[ Math.floor(Math.random() * cheeseOptions.length) ];
}

function pickToppings(numToppings) {
    var toppingChoices = [];
    var toppingOptions = ["pepperoni", "mushrooms", "onions", "olives", "green peppers", "sausage", "buffalo chicken", "spinach", "pulled pork", "parmesan"];
    for (var x of Array(numToppings).keys()) {
        toppingChoices.push( toppingOptions[ Math.floor(Math.random() * toppingOptions.length) ] );
    }
    return toppingChoices;
}

console.log(makeMeAPizza());