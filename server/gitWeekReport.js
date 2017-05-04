var EventEmitter = require('events');
var git = require('simple-git')(__dirname + '/Week-Report-Example-Files-Repo');

function updateAndUploadFile() {
	git
		.then(function() {
			console.log('Starting Pull...');
		})
		.pull(function(err, update) {
			if (err) {
				return 'PULL_FAILED';
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
				return 'PUSH_FAILED';
			}
		})
		.then(function() {
			console.log('Push Done');
		});
}

module.exports = updateAndUploadFile;