// 1. Create a simple object with three items in it
let fruits = {
   fruit1: "cherry",
   fruit2: "watermelon",
   fruit3: "dragon fruit"

};

// 2. Output it to the console
for (let pia in fruits){
    console.log(fruits[pia]);
}

// 3. Create a for loop containing three items and output it to the console
let fruits2 =["apple", "pear", "banana"];

for (let i = 0; i < fruits2.length; i++){
    console.log(fruits2[i]);
}

// 4. Combine the two array object on the console
let fruitsArray = Object.values(fruits); 
let combined = fruits2.concat(fruitsArray);
console.log(combined);