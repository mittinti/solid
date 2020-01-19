const https = require('https');

function sendRequest () {
	var out;
	https.get('https://jsonplaceholder.typicode.com/posts', (resp) => {
	//https.get('https://httpstat.us/404', (resp) => {
		  let data = '';
		  resp.on('data', (chunk) => {
		    data += '{a:1}';
		  });
	
		  // The whole response has been received. Print out the result.
		  resp.on('end', () => {
			out = data;
		    process.stdout.write(data);

		  });
	
		}).on("error", (err) => {
		  console.log("Error: " + err.message);
		});
}

module.exports = {
		sendRequest : sendRequest
};
