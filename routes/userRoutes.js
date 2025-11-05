const express = require('express')
const userRouter = express.Router()

const users = [
  {id: 1, name: 'Anthony Albanese', country: 'AU'},
  {id: 2, name: 'Joe Biden', country: 'US'},
  {id: 3, name: 'Chris Hipkins', country: 'NZ'},
  {id: 4, name: 'Lee Hsien Loong', country: 'SG'}
]

//http://localhost:3000/users/headers
userRouter.get('/headers', (req, res)=>{
  console.log(req.headers)

  res.json(req.headers)
})


//http://localhost:3000/users/:id - dynamic param
userRouter.get('/:id', (req, res) => {
  console.log(req.params)
  console.log(parseInt(req.params.id))

  let userId = parseInt(req.params.id)
  let user = users.find(user => user.id === userId)
  console.log('User find: ', user)
  // expression ? (true) : (false)
  user ? (
    res.status(200).json({result: user})
  ) : (
    res.status(404).json({result: `User ${userId} not found`})
  )
})

//http://localhost:3000/users/ - POST request
userRouter.post('/', (req, res)=>{
  let newUser = req.body
  console.log('newUser:', newUser)

  // ! means negate, check if newUser.name exists and then negate
  // || means or
  if (!newUser.name || !newUser.location) {
    res.status(400).json({error: 'User must contain name and location'})
    return
  } else if (!newUser.id) {
    newUser.id = users.length + 1
  }

  users.push(newUser)
  res.status(200).json(newUser)
})


module.exports = userRouter;