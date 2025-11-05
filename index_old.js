const express = require('express')
const app = express()
const port = 3000

const testRoutes = require('./routes/myTestRoutes')
const calculatorRoutes = require('./routes/calculatorRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json())  // required for req.body

app.use('/mytest', testRoutes)
app.use('/calculator', calculatorRoutes)
app.use('/users', userRoutes)

app.use('/', express.static('public'))

app.get('/', (req, res)=>{
  res.send('Hello World!')
})

app.listen(port, ()=>{
  console.log(`Example app listening at http://localhost:${port}`)
})