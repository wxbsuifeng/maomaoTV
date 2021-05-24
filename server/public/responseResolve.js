module.exports = function (response, result) {
  response.writeHead(result.code || 200, {
    'Content-Type': result.type || 'application/json'
  })

  response.end(JSON.stringify(result.res) || "{}")
}