const express = require('express');
const server = express();
const https = require('https');


const error = require('./ErrorHandler');

server.get('/users', function(req, res) {   
    https.get('https://httpstat.us/404', (resp) => {
		  let data = 'sample';
		  resp.on('data', (chunk) => {
		    data += chunk;
		  });
		  resp.on('end', () => {
			  if (resp.statusCode === 200) {
				  res.json(data);
			  } else {
				 var message =  error.getErrorMessage(resp.statusCode);
				 res.json(message);
			  }
		  });
		}).on("error", (err) => {
		  console.log("Error: " + err.message);
		});
});

server.listen(3001);
 