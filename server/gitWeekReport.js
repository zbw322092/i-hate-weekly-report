var git = require('simple-git')(__dirname + '/Week-Report-Example-Files-Repo');

function updateAndUploadFile(errHandler, callback) {
	git
		.then(function() {
			console.log('Starting Pull...');
		})
		.pull(function(err, update) {
			if (err) {
				return errHandler(err);
			}
		})
		.then(function() {
			console.log('Pull Done');
		})
		.add('./*')
		.commit('Week Report')
		.then(function() {
			console.log('Starting Push...');
		})
		.push('origin', 'master', function(err, result) {
			if (err) {
				return errHandler(err);
			}
			callback(result);
		});
}

module.exports = updateAndUploadFile;