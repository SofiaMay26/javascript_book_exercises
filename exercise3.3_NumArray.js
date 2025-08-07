// Create an Array containing three value 1,2 and 3.
numArray = [ 1, 2, 3];
console.log(numArray.length);
// Nest the original array into a new array three times
numArrayOfArray = [ numArray, numArray, numArray ];
console.log(numArrayOfArray);
// Output the value 2 from one of the array into the console.
let outputValue2 = numArray.indexOf(2);
console.log(outputValue2);
// find the index of number 
numIndex = numArray.indexOf(2);
console.log(numIndex);
// display the array reverse
numArray.reverse()
console.log(numArray);
