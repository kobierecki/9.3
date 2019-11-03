var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var textArray = text.split(" ");
var dinosaur = "triceraptos";
var dinosaur = dinosaur.toUpperCase();
console.log(textArray[0]);
var text = text.replace((textArray[0]), dinosaur);
var text = text.slice(0, text.length / 2);

console.log(text);
