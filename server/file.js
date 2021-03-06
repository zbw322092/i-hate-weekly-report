var Excel = require('exceljs');
var fileTitleWithDate = require('../lib/utils/fileTitleWithDate.js');

function createFile(fileDataObj, callback) {
	var fileTitle = fileTitleWithDate(undefined, 'Bowen');
	var options = {
		filename: 'server/Week-Report-Example-Files-Repo/'+ fileTitle +'.xlsx'
	}
	var workbook = new Excel.stream.xlsx.WorkbookWriter(options);
	var worksheet = workbook.addWorksheet('Week Report Sheet');

	worksheet.getCell('A1').value = 'Affairs';
	worksheet.getCell('B1').value = 'Time';
	worksheet.getCell('C1').value = 'Author';
	worksheet.getCell('D1').value = 'Completion';

	var length = fileDataObj.length;
	var colIndexArray = ['A', 'B', 'C', 'D'];
	var keysArray = Object.keys(fileDataObj[0]);

	for (var j = 2; j < length + 2; j++) {
		for (var k = 0; k < colIndexArray.length; k++) {
			var cellPosition = colIndexArray[k] + j;
			worksheet.getCell(cellPosition).value = fileDataObj[j-2][keysArray[k]];
		}
	}

		workbook.commit()
			.then(callback);
}

module.exports = createFile;