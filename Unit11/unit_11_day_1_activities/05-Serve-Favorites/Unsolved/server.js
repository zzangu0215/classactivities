// Require dependencies
const http = require('http');

// TODO: import fs and path modules
const fs = require('fs');
const path = require('path');

// Set our port to 8080
const PORT = 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  // Capture the url the request is made to
  const { url } = req;

  switch (url) {

    case '/movies': {
      fs.readFile(path.join(__dirname, 'movies.html'), (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      break;
    }
    case '/food': {
      fs.readFile(path.join(__dirname, 'food.html'), (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      break;
    }
    case '/frameworks': {
      fs.readFile(path.join(__dirname, 'frameworks.html'), (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
      break;
    }
    default: {
      fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) throw err;
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      });
    }
   
    
  }

}

// TODO: listen for requests
server.listen(PORT, () => {
  console.log(`Server is listening on PORT: http://localhost:${PORT}`);
})
