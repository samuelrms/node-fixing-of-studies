const http = require('http');
const fs = require('fs');

const hostname = '192.168.100.26';
const port = 8080;

const server = http.createServer((req, res) => {

  if (req.url == '/hello-user') {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(data);
      return res.end()
    })
  } else {
    return res.end()
  }
})

server.listen(port, hostname, () => {
  console.log('Servidor está rodando')
});