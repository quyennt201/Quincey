const express = require('express')
const userController = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post('/register', userController.registerUser)
userRouter.post('/login', userController.loginUser)
userRouter.get('/users', userController.getAll)

module.exports = userRouter