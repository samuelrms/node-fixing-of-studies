const { log } = require('console');
const fs = require('fs')

fs.readFile('hello-user.txt', (err, data) => {
  let str = data.toString();

  /**@info Turns my text file into an array without the separator */
  let newStr = str.split('/')

  log(newStr)
})