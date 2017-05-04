var Excel = require('exceljs');

function createFile(fileDataObj) {
	var options = {
		filename: 'server/Week-Report-Example-Files-Repo/week-report.xlsx'
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
	
	return workbook.commit();
		// .then(function() {
  //     res.writeHead(200, {'Content-Type': 'text/plain'});
  //     res.end('commit file SUCCESSED');
		// })
		// .catch(function() {
  //     res.writeHead(404, {'Content-Type': 'text/plain'});
  //     res.end('commit file FAILED');
		// });
}

module.exports = createFile;