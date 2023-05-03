const fs = require('fs');

/*Create new file */
fs.writeFile('user.txt', 'Guest user test', (err, data) => {
  if (err) throw err;
  console.log('The file was created correctly');
})

/*Create new file and insert content after existing one (appendFile)*/
fs.appendFile('user.txt', '\nAdditional content', (err, data) => {
  if (err) throw err;
  console.log('Change made with dexterity');
})