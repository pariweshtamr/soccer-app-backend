import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
const app = express()

import cors from 'cors'

const PORT = process.env.PORT || 8000

// Connect MongoDB
import mongoClient from './config/db.js'
mongoClient()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//IMPORT ROUTERS
import productRouter from './routers/productRouter.js'
import cartRouter from './routers/cartRouter.js'
import userRouter from './routers/userRouter.js'

// USE ROUTERS
app.use('/api/v1/user', userRouter)
app.use('/api/v1/product', productRouter)
app.use('/api/v1/cart', cartRouter)

app.use('/', (req, res) => {
  res.json('Server is ready')
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error)
  }
  console.log('Backend server is running')
})
