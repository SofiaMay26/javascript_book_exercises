const theList = ['Laurence' , 'Svekis' , true , 35 , null , undefined];
//  Remove the first item and last item.
    theList.pop();
    theList.shift();
// Add "First" to the statrt of the array
theList.unshift("First");
// Add "Last" to the end of array
theList.splice(6 , 0 , "Last");
// Assign the "Hello World" to the third index
theList.splice(3 , 0 , "Hello World");
// Output it on the console
    console.log(theList);