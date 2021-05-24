const access = require('../api/access');
const logger = require('../public/logger');
const responseResolve = require('./responseResolve')

const acessApi = ['login', 'logout'];

module.exports = function (request, response) {
  if(!request.url.match(/^\/api\/.*/)) {
    response.write('api error');
    return;
  }

  let url = request.url.replace(/\/api\//, ''), result = {};

  //access api
  if(access[url]) {
    result = access[url]('user111');
    logger(url + '\t\t' + JSON.stringify(result));
  }
  
  responseResolve(response, result);
}