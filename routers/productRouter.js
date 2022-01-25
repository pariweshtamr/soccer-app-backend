import express from 'express'
const Router = express.Router()

import { products } from '../data.js'

Router.get('/', (req, res) => {
  res.json(products)
  console.log(products)
})

export default Router
