var httpRequest;
function makeRequest(url) {
	httpRequest = new XMLHttpRequest();

	if (!httpRequest) {
		console.log('Giving up :( Cannot create an XMLHTTP instance');
		return false;
	}

	httpRequest.onreadystatechange = alertContents;
	httpRequest.open('GET', url);
	httpRequest.send();
}

function alertContents() {
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
		if (httpRequest.status === 200) {
			console.log(httpRequest.responseText);
		} else {
			console.log('There was a problem with the request.');
		}
	}
}

document.getElementById('ajaxButton').onclick = 
	makeRequest('http://localhost:1337');