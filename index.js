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