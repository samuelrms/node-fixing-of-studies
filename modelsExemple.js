const customModels = () => {
  console.log('Hello user');
}

const soma = (a, b) => `${a} + ${b} = ${a + b}`

const name = 'Samuel'
const age = 23

const obj = {
  name: 'Samuel',
  idade: 23,
  altura: 1.8
}

const arr = [
  {
    name: 'Samuel',
    idade: 23,
    altura: 1.8
  },
  {
    name: 'Lorena',
    idade: 31,
    altura: 1.68
  }
]

exports.age = age;
exports.name = name;
exports.obj = obj;
exports.arr = arr;
exports.soma = soma
exports.customModels = customModels;