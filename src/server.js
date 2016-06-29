const http = require('http');
const getUrlData = require('./url/get-url-data');

const PORT = 4000;

// function getUrlPath(url) {
//   const result = /^([^?]+)\??(.*)$/.exec(url);
//   if (result === null) throw new Error(`Invalid url: ${url}`);
//   return result.slice(1);
// }
//
// function tokenizeUrl(url) {
//   // Split into path and querystring
//   const [path, querystring] = getUrlPath(url);
//   console.log(path, querystring);
// }

function handleWordSearch(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(request.url);
}

function handler(request, response) {
  const urlData = getUrlData(request.url);
  console.log(urlData);

  if (/^\/word-search(\/)?\??/.test(request.url)) {
    handleWordSearch(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('File not found');
  }
  // if (request.url) {
  //   case '/word-search':
  //     return handleWordSearch(request, response);
  //   default:
  //     response.writeHead(404, { 'Content-Type': 'text/html' });
  //     response.end('File not found');
  // }
}

http.createServer(handler).listen(PORT);

console.log(`Server listening on port ${PORT}`);
