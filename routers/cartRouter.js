import express from 'express'
const Router = express.Router()

import { products } from '../data.js'

Router.get('/:id', (req, res) => {
  const cart = products.find((x) => x._id === req.params.id)

  if (cart) {
    res.send(cart)
  } else {
    res.status(404).send({ message: 'Product not found' })
  }
})

export default Router
