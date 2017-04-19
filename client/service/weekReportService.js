function weekReportService(data) {
	var config = {
		 method: 'POST',
		 url: '/submit/formdata',
		 headers: {
		   'Content-Type': 'application/json'
		 },
		 data: data
	};
}

module.exports = weekReportService;