const myTable = [];
const myTable2 = [];
const rows = 5;
const rows2 = 10;
const rowscols = 3;
const cols = 5; 
const cols2 = 0;
let counter = 0;

for (let y = 0; y < rows; y++) {
  let tempTable = [];
  for (let x = 0; x < cols; x++) {
    counter++;
    tempTable.push(counter);
  }
  myTable.push(tempTable);
}

console.table(myTable);



for (let y = 0; y <= rows2; y++) {
  let tempTable2 = [];
  for (let x = 10; x >= cols2; x--) {
    tempTable2.push(x);
  }
 
  myTable2.push(tempTable2);
   
  }


console.table(myTable2);
