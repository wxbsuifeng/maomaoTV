const server = require('./http')()
const { PORT } = require('./public/config')

server.listen(PORT)