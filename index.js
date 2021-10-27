var array = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];
var newArray = array.sort((a, b) => 0.5 - Math.random());

console.log(newArray);
var x = newArray[0];
var y = newArray[1];
var z = newArray[2];

$(".pokemon1").attr("src", "images/" + x + ".png");
$("#result1 p").text("You got a " + x + "!");

$(".pokemon2").attr("src", "images/" + y + ".png");
$("#result2 p").text("You got a " + y + "!");

$(".pokemon3").attr("src", "images/" + z + ".png");
$("#result3 p").text("You got a " + z + "!");
