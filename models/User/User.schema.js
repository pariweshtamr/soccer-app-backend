import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      index: 1,
    },
    isEmailConfirmed: {
      type: Boolean,
      required: true,
      default: false,
    },
    password: {
      type: String,
      required: true,
      min: 7,
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const User = mongoose.model('User', userSchema)
export default User
