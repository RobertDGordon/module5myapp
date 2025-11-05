const Calculator = require('../libraries/calculatorLibrary')
let myCalc = new Calculator()

const addNumbers = (req, res) => {
  let number1 = parseInt(req.query.num1)
  let number2 = parseInt(req.query.num2)
  console.log('calculatorController/addNumbers:',  number1, number2)
  let sum = myCalc.add(number1, number2)
  console.log('Sum: ', sum)

  res.status(200).json({ result: sum })
}

module.exports = {
  addNumbers
}