import Joi from 'joi'

const shortstr = Joi.string().max(30).alphanum().required()
const plainShortStr = Joi.string().max(20).required()
const id = Joi.string().max(30)
const email = Joi.string()
  .max(50)
  .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'au'] } })
  .required()
const shortStrNull = Joi.string().max(30).allow(null).allow('')
const password = Joi.string().min(7).max(30).required()

export const createUserValidation = (req, res, next) => {
  // se3rver validation
  const schema = Joi.object({
    name: shortstr,
    email: email,
    password: password,
  })

  const value = schema.validate(req.body)

  if (value.error) {
    return res.json({
      status: 'error',
      message: value.error.message,
    })
  }
  next()
}

export const userEmailVerificationValidation = (req, res, next) => {
  const schema = Joi.object({
    email: email,
    pin: Joi.string().min(6).required(),
  })

  const value = schema.validate(req.body)

  if (value.error) {
    return res.json({
      status: 'error',
      message: value.error.message,
    })
  }
  next()
}
