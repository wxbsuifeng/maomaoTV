const server = require('./http')()
const { PORT } = require('./public/config')

server.listen(PORT)
console.log('listening port 3000...')