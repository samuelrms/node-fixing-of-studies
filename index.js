const fs = require('fs')

fs.readFile('hello-user.txt', (err, data) => {
  console.log(data.toString());
})