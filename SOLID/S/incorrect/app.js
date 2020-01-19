const express = require('express');
const server = express();
const https = require('https');

server.get('/users', function(req, res) {   
    https.get('https://httpstat.us/404', (resp) => {
		  let data = 'sample';
		  resp.on('data', (chunk) => {
		    data += chunk;
		  });
		  resp.on('end', () => {
			  if (resp.statusCode === 200) {
				  res.json(data);
			  } else if (resp.statusCode === 404) {
				  res.json('resoource not found 404');
			  } else if (resp.statusCode === 500) {
			    	res.json('Internal server error');
			  }
		  });
		}).on("error", (err) => {
		  console.log("Error: " + err.message);
		});
});

server.listen(3001);
 