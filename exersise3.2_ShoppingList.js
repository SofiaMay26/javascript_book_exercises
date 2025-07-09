// Array Practice

//1. Create a Shopping List Array
shoppingList = ["Milk" , "Bread" , "Apples"];
console.log(shoppingList)
// 3. Update Bread with Bananas and Egg
shoppingList.splice(2,0,"Bananas","Eggs");
// 4. Rempve the last item from the array
shoppingList.pop();
// 5. Sort the list Alphabetically
shoppingList.sort();
// 6. Find and Output the Index value of Milk
let findIndex = shoppingList.indexOf("Milk");
console.log(findIndex);
// 7. After Bananas, add Carrots and Lettus
shoppingList.splice(1,0, "Carrots", "Lettuce");
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
console.log(findIndex2);