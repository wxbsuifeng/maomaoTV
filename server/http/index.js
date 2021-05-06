const http = require('http');
const Logger = require('../public/logger')

module.exports = function() {
  return http.createServer(function (request, response) {
    Logger('request')

    response.write('123213');
    response.end();
  })
}