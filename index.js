const http = require('http')

const hostname = '192.168.100.26'
const port = 8080

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.end('Hello user')
})

server.listen(port, hostname, () => {
  console.log('Servidor está rodando')
})