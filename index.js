if (typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('./files/test.xlsx');

// console.log(workbook);
// console.log(workbook.Strings);

var first_sheet_name = workbook.SheetNames[0]; // the first sheet in this opened file
var address_of_cell = 'B1';

// get worksheet
var worksheet = workbook.Sheets[first_sheet_name];

// find the desired cell
var desired_cell = worksheet[address_of_cell];

// get the value
var desired_value = (desired_cell ? desired_cell.v : undefined);

console.log(desired_value);

XLSX.writeFile(workbook, './files/out.xlsx');

console.log(desired_cell);
console.log(desired_cell.v); // cell value
console.log(desired_cell.t); // cell type
console.log(desired_cell.w);

console.log(worksheet['!ref']);
console.log(worksheet['!cols']);
console.log(worksheet['!merges']);

console.log(workbook.Props);

var json = XLSX.utils.sheet_to_json(worksheet);
console.log(json);