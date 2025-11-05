const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const port = 3000

app.use('/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
)

const calculatorRoutes = require('./routes/calculatorRoutes')

app.use('/calculator', calculatorRoutes)

module.exports = app;