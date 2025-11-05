const express = require('express')
const router = express.Router()

router.get('/test', (req, res)=>{
  res.send('This a test, this only a test')
})

router.get('/test2', (req, res)=>{
  res.send('Second test')
})

module.exports = router;