let sandwish = {
    bread: "plain italian",
    meat: "pulled pork",
    cheese: "chedar",
    toppings: ["lettuce", "tomato", "Cucumber"]
}

let {bread, meat} = sandwish;


// Code will now work outside of the sandwish scope 
// no need to type sandwish.bread...
console.log(bread, meat);

bread = "Bimbo";
meat = "Beef";

// We can change bread and meat now
console.log(bread, meat);
// the object is not affected though
console.log(sandwish.bread, sandwish.meat);