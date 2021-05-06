const http = require('http');

module.exports = function() {
  return http.createServer(function (request, response) {
    response.write('123213');
    response.end();
  })
}