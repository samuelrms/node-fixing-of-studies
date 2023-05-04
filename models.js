class ExempleClass {
  constructor() {
    this.name = 'Samuel Ramos'
    console.log('\nExampleClass running');
    this.test()
  }

  test() {
    console.log('test creation');
    console.log(`First user name ${this.name}`)
  }
}

module.exports = ExempleClass