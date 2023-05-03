const http = require('http');
const fs = require('fs');

const hostname = '192.168.100.26';
const port = 8080;

/*Create new file */
fs.writeFile('copyIndex.txt', 'Guest user test', (err, data) => {
  if (err) throw err;
  console.log('The file was created correctly');
})

const server = http.createServer((req, res) => {
  if (req.url == '/hello-user') {
    fs.readFile('index.html', (err, data) => {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(data);

      /*Create new file and insert content after existing one (appendFile)*/
      fs.appendFile('copyIndex.txt', `\n\n${data}`, (err, data) => {
        if (err) throw err;
        console.log('Change made with dexterity');
      })

      return res.end()
    })
  } else {
    return res.end()
  }
})

server.listen(port, hostname, () => {
  console.log('Servidor está rodando')
});