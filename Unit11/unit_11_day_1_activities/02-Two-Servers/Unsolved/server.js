// TODO: import http module
const http = require('http');

// TODO: define two separate variables for port numbers
const PORT1 = 7000;
const PORT2 = 7500;

// TODO: define two separate functions for handling requests
const handleRequestPORT1 = (request, response) => {
  response.end(`It Works!! Path Hit for PORT1: ${request.url}`);
}

const handleRequestPORT2 = (request, response) => {
  response.end(`It Works!! Path Hit for PORT2: ${request.url}`);
}

// TODO: create two server objects
const server1 = http.createServer(handleRequestPORT1);
const server2 = http.createServer(handleRequestPORT2);

// TODO: start listening for requests on each server
server1.listen(PORT1, () => {
  console.log(`Server listening on: http://localhost:${PORT1}`);
});

server2.listen(PORT2, () => {
  console.log(`Server listening on: http://localhost:${PORT2}`);
})
