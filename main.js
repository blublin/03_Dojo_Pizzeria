function pizzaOven(crust, sauce, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crust;
    pizza.sauceType = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    
    return pizza;
}

function makeMeAPizza() {
    var crustOptions = ["Neapolitan", "New York", "Saint Louis", "Thick Crust", "Grandma", "Whole wheat"];
    var sauceOptions = ["Marinara", "Buffalo sauce", "Pesto", "white garlic sauce", "ranch sauce", "hummus"];
    var 
}

var notPizza = pizzaOven("deep dish", "traditional", ["mozzarella"],["pepperoni", "sausage"]);
var goodPizza = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var saintLouisPizza = pizzaOven("thin crust", "marinara", ["provel"], ["pepperoni", "sausage"]);
var specialtyPizza = pizzaOven("whole wheat", "white sauce", ["burrata", "parmesan"], ["basil", "prosciutto"]);

console.log("I'm not sure who calls this a pizza but those wackos over in Chicago.\n", notPizza);
console.log("Now this is a good, simple veggie pizza.\n", goodPizza);
console.log("Those folk over in Saint Louis have this thin, interesting pizza!\n", saintLouisPizza);
console.log("And for when we want to make it kinda classy.\n", specialtyPizza);