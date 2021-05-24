const http = require('http');
const requestResolve = require('../public/requestResolve')

module.exports = function() {
  return http.createServer(function (request, response) {
    requestResolve(request, response);
  })
}