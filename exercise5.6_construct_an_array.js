//  1: Create an empty array
let numbers = [];

//  2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 1; i <= 10; i++) {
  numbers.push(i); // adds i to the end of the array
}
//  3: Log the whole array into the console
console.log("Full array:", numbers);
//  4: Use a for loop to iterate through the array and output each value
console.log("Iterating through the array:");
for (let i = 0; i < numbers.length; i++) {
  console.log("Index of Array", i, "=", numbers[i]);
}
//  5: Use a for loop again to output the values only (just the numbers)
console.log("Values only:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}