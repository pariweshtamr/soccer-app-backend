import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import User from '../models/User/User.schema.js'
import { generateToken } from '../utils.js'
import { hashPassword } from '../helpers/bcrypt.helper.js'
import { createUser, verifyEmail } from '../models/User/User.model.js'
import {
  createUniqueEmailConfirmation,
  deleteInfo,
  findUserEmailAndVerify,
} from '../models/Pin/Pin.model.js'
import {
  sendEmailVerificationConfirmation,
  sendEmailVerificationLink,
} from '../helpers/email.helper.js'
import {
  createUserValidation,
  userEmailVerificationValidation,
} from '../middlewares/formValidation.middleware.js'
const userRouter = express.Router()

userRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    // await User.remove({}) //remove all users from db
    const createdUsers = await User.insertMany(users)
    res.send({ createdUsers })
  }),
)

// User Sign in
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        })
        return
      }
    }
    res.status(401).send({ message: 'Invalid user email or password' })
  }),
)

userRouter.post(
  '/register',
  createUserValidation,
  expressAsyncHandler(async (req, res) => {
    try {
      const hashPass = hashPassword(req.body.password)

      if (hashPass) {
        req.body.password = hashPass

        const { _id, name, email } = await createUser(req.body)
        console.log(name, email, req.body)

        if (_id) {
          const { pin } = await createUniqueEmailConfirmation(email)

          if (pin) {
            //email confirmation link to user email
            const forSendingEmail = {
              name,
              email,
              pin,
            }
            sendEmailVerificationLink(forSendingEmail)
          }

          return res.json({
            status: 'success',
            message:
              'New user has been created successfully! We have sent you an email confirmation to your email address. Please follow the instruction provided in the email to activate your account',
          })
        }
      }
      res.json({
        status: 'error',
        message: 'Unable to create new user',
      })
    } catch (error) {
      let msg = 'Error, unable to create new user'
      console.log(error.message)
      if (error.message.includes('E11000 duplicate key error collection')) {
        msg =
          'This email has already been used. Please use another email address to create an account.'
      }
      res.json({
        status: 'error',
        message: msg,
      })
    }
  }),
)

//email verification
userRouter.patch(
  '/email-verification',
  userEmailVerificationValidation,
  expressAsyncHandler(async (req, res) => {
    try {
      const result = await findUserEmailAndVerify(req.body)

      if (result?._id) {
        //information is valid now we can update the user
        const data = await verifyEmail(result.email)
        if (data?._id) {
          // delete the pin info
          deleteInfo(req.body)

          // send email confirmation to user
          sendEmailVerificationConfirmation({
            name: data.name,
            email: data.email,
          })

          return res.json({
            status: 'success',
            message: 'Your email has been verified. You may now log in.',
          })
        }
      }
      res.json({
        status: 'error',
        message:
          'Unable to verify your email. The link is either invalid or expired.',
      })
    } catch (error) {
      console.log(error)
      res.json({
        status: 'error',
        message: 'Error, Unable to verify the email. Please try again later.',
      })
    }
  }),
)

export default userRouter
