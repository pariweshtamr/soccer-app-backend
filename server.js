import data from './data.js'
import express from 'express'
const app = express()

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Server is ready')
})

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.listen(PORT, (error) => {
  if (error) {
    return console.log(error)
  }
  console.log('Backend server is running')
})
