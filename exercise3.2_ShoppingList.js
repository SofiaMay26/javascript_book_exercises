// Array Practice

// 1. Create a Shopping List Array
shoppingList = ["Milk" , "Bread" , "Apples"];
// 3. Update Bread with Bananas and Egg
shoppingList.splice(2,0,"Bananas","Eggs");
console.log(shoppingList);
// 4. Remove the first item from the array 
shoppingList.shift();
console.log(shoppingList);
// 4. Remove the last item from the array
shoppingList.pop();
console.log(shoppingList);
// 5. Sort the list Alphabetically
shoppingList.sort();
console.log(shoppingList);
// 6. Find and Output the Index value of Milk
let findIndex = shoppingList.indexOf("Milk");
console.log('the indexOf the milk:' + findIndex);
// 7. After Bananas, add Carrots and Lettus
shoppingList.splice(1,0, "Carrots", "Lettuce");
console.log(shoppingList);
// 8. Create a new list containing Juice and Pop
juiceList = ["Juice", "Pop"];
console.log(juiceList); 
// 9. Combine both list, adding the newlist twice to the end
//of the first list
let combineList = shoppingList.concat(juiceList);
console.log(combineList);
// 10. Get the last index value of Pop and output it to
// the console
let findIndex2 = juiceList.indexOf("Pop");
console.log('the indexOf pop:' + findIndex2);