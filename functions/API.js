const express = require('express')
const serverless = require('serverless-http')
const router = require('./Routes/API.js')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const db = `mongodb+srv://admin:admin@orders.v5cb5ox.mongodb.net/?retryWrites=true&w=majority&appName=Orders`
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose
  .connect(db)
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('Error', err)
  })

app.listen(3000, () => {
  console.log('Conectado en el puerto 3000')
})
app.use('/.netlify/functions/API', router)
module.exports.handler = serverless(app)
