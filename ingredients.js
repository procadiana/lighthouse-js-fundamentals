var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var repeat=0;
while (repeat<ingredients.length) {
    console.log(ingredients[repeat]);
    repeat++
}
// Write a for loop that prints out the contents of ingredients:
for (var repeat=0; repeat<ingredients.length; repeat++) {
    console.log(ingredients[repeat]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i=ingredients.length; i>=0; i--) {
    console.log(ingredients[i]);

}
