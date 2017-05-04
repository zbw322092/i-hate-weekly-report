var git = require('simple-git')(__dirname + '/Week-Report-Example-Files-Repo');

function updateAndUploadFile() {
	git
		.then(function() {
			console.log('Starting Pull...')
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
		.push('origin', 'master');
}