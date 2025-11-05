const express = require('express')
const calculatorRouter = express.Router()
const calculatorController = require('../controllers/calculatorController')

// http://localhost:3000/calculator/add?num1=123&num2=456
calculatorRouter.get('/add', (req, res)=> {
  calculatorController.addNumbers(req, res)
})

const movies = [
  {
    title: "",
    imageURL: "",
    description: ""
  }
]

const reviews = [
  {

  }
]

const posts = [
  {
    
  }
]

module.exports = calculatorRouter;