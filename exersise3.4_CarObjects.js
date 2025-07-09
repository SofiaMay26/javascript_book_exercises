// Create a new car object for a car.
let myCar = [{ model:"Toyota" ,
              color: "white" ,
              type: "crossover" ,
              year: 2022
}];

console.log(myCar);
// Assign a new value to the color property in myCar.
myCar[0].color = "red";
console.log(myCar);
// Assign a new value to the For Sale property to indicate is 
// car is available. 
myCar[0].forSale = true;
console.log(myCar);
// Delete the last Element
delete myCar[0].forSale;
console.log(myCar);
