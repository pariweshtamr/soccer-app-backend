import User from './User.schema.js'

//Register new user

export const createUser = (newUser) => {
  try {
    const user = new User(newUser).save()

    // const createdUser = user.save()
    // res.send({
    //   _id: createdUser._id,
    //   name: createdUser.name,
    //   email: createdUser.email,
    //   isAdmin: createdUser.isAdmin,
    //   token: generateToken(createdUser),
    // })
    return user
  } catch (error) {
    throw new Error(error)
  }
}

export const verifyEmail = (email) => {
  try {
    return User.findOneAndUpdate(
      { email },
      { isEmailConfirmed: true, status: 'active' },
      { new: true },
    )
  } catch (error) {
    throw new Error(error)
  }
}
