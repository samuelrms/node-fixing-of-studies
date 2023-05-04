const { log } = require('console');
const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your name? \n', (name) => {
  log(`\nHis name is: \n${name}\n`);

  rl.question('How old are you?\n', (old) => {
    log(`\n Your age is: \n${old}\n`)

    rl.question("What's your height?\n", (height) => {
      log(`\nYour height is: \n${height}\n`)

      log(`\n Your name is ${name}, you are ${old} years old and your height is ${height}\n`)
    })
  })

})

rl.on('close', () => {
  log('\nGoodbye!');
  process.exit(0)
})