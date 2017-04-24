var Excel = require('exceljs');

var options = {
	filename: './files/week-report.xlsx'
}
var workbook = new Excel.stream.xlsx.WorkbookWriter(options);
var worksheet = workbook.addWorksheet('Week Report Sheet');

function createFile(fileDataObj) {
	worksheet.getCell('A1').value = 'Affairs';
	worksheet.getCell('B1').value = 'Time';
	worksheet.getCell('C1').value = 'Author';
	worksheet.getCell('D1').value = 'Completion';

	var length = fileDataObj.length;
	var colIndexArray = ['A', 'B', 'C', 'D'];

	for (var j = 2; j < length + 2; j++) {
		for (var k = 0; k < colIndexArray.length; k++) {
			var cellPosition = colIndexArray[k] + j;
			worksheet.getCell(cellPosition).value = fileDataObj[j-2][k];
		}
	}
	return workbook.commit();
		// .then(function() {
		// 	console.log('commit file SUCCESSED');
		// })
		// .catch(function() {
		// 	console.log('commit file FAILED');
		// });
}

module.exports = createFile;