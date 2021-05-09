const access = require('../api/access');
const logger = require('../public/logger');

const acessApi = ['login', 'logout'];

module.exports = function (request, response) {
  if(!request.url.match(/^\/api\/.*/)) {
    response.write('api error');
    return;
  }

  let url = request.url.replace(/\/api\//, ''), result;
  logger(url);

  //access api
  if(acessApi.includes(url)) {
    result = access[url]('user111');
  }
  
  response.write(result);
}