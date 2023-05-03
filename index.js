const { log } = require('console');
const fs = require('fs')

/**@info Function to delete the selected file */
const deleteFile = () => fs.unlink('hello-user.txt', (err) => {
  log('File deleted')
})

deleteFile()

/**@info Function to rename the selected file*/
const renameFile = () => fs.rename('hello-user.txt', 'hello-word.txt', (err) => {
  log('Renamed file')
})

renameFile()