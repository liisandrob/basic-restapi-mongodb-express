const app  = require('./app');


// FOR HTTP PROTOCOL
const http = require('http');
const server = http.createServer(app);


// FOR HTTPS PROTOCOL
//const https  = require('https');
//const fs     = require('fs');
// const options = {
//   key: fs.readFileSync('path/to/key'),
//   cert: fs.readFileSync('path/to/cert')
// };
//const server = https.createServer(options, app)

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.clear();
  console.info(`Server is listening on port ${port}`);
});