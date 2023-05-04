const { log } = require('console');
const customModel = require('./modelsExemple')
const ExempleClass = require('./models')

const exempleClass = new ExempleClass()

log(customModel.name)
log(customModel.age, '\n')
log(customModel.obj, '\n')

log(customModel.arr, '\n')
log(customModel.soma(1, 1), '\n')
customModel.customModels()

exempleClass.test()
log(`\n${exempleClass.name}`)