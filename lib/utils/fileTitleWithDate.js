var dateFormat = require('dateformat');

function fileTitle(basefileName, authorName, separator) {
	var now = new Date();
	var formatedDate = dateFormat(now, 'yyyymmdd');
	basefileName = basefileName ? basefileName : 'WeekReport';
	authorName = authorName ? authorName : '';
	separator = separator ? separator : '';

	return authorName + separator + basefileName + separator + formatedDate;
}

// Example:
// fileTitle(undefined, 'Bowen');
// result: BowenWeekReport20170504

// fileTitle(undefined, 'Bowen', '-');
// result: Bowen-WeekReport-20170504

module.exports = fileTitle;