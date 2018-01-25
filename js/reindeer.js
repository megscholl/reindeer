
//Your task is to loop through all the reindeer in the array, and add the name of the reindeer to the single HTML <div> element provided. The name of the reindeer should be prepended with the corresponding color from the other array.




var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var colorSize = colors.length;
var reindeerCount = reindeer.length;

var colorReindeer = "";

for (var i = 0; i < reindeerCount; i++) {

      colorReindeer += colors[i] + " " + reindeer[i] + "<br>";

}

var hohohoElement = document.getElementById("reindeer");

document.getElementById("reindeer").innerHTML = colorReindeer;


// for (var j = 0; j < reindeerCount; j++) {    }

