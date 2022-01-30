import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { users } from '../data.js'
import User from '../models/User/User.schema.js'
const userRouter = express.Router()

userRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({}) //remove all users from db
    const createdUsers = await User.insertMany(users)
    res.send({ createdUsers })
  }),
)

export default userRouter
