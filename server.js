import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

import cors from 'cors'

const PORT = process.env.PORT || 8000

//Middlewares
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

//IMPORT ROUTERS
import productRouter from './routers/productRouter.js'

//USE ROUTERS
app.use('/api/products', productRouter)

app.use('/', (req, res) => {
  res.json('Server is ready')
})

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error)
  }
  console.log('Backend server is running')
})
