// Dependencies
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res) {
  const { url } = req;

  // Route the request based on the url path.
  switch (url) {
    case '/thanks':
      return renderThankYouPage(req, res);
    default:
      return renderWelcomePage(req, res);
  }
}

function renderWelcomePage(req, res) {
  // Read the html from file.
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    // TODO: explain the purpose of the conditional here.
    if (err) {
      // TODO: explain the purpose of 500 (the first argument) passed to
      // writeHead.
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end(
        '<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>'
      );
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}

function renderThankYouPage(req, res) {
  // TODO: What is the requestData variable used for?
  let requestData = '';

  // TODO: Describe what will happen when a chunk of data is received from the
  // incoming request stream.
  req.on('data', (data) => {
    requestData += data;
    console.log('You just posted some data to the server:\n', requestData);
  });

  // TODO: Describe what will happen when the incoming request stream has ended.
  req.on('end', () => {
    let myHTML =
      "<html><head><title>Hello Noder!</title></head><body><h1>Oops, I didn't get any data</h1></body></html>";

    // TODO: What will happen if no data was submitted?
    if (requestData) {
      myHTML = `<html>
        <head><title>Hello Noder!</title></head>
        <body>
          <h1>Thank you for the data:</h1>
          <code>${requestData}</code>
        </body>
        </html>`;
    } else {
      myHTML =
        "<html><head><title>Hello Noder!</title></head><body><h1>Oops, I didn't get any data</h1></body></html>";
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(myHTML);
  });
}

// Starts our server.
server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
