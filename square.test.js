const { square, squareRoot } = require('./square')

test('square 5 to return 25', ()=>{
  expect(square(5)).toBe(25)
})

test('square root of 25 return 5', ()=>{
  expect(squareRoot(25)).toBe(5)
})