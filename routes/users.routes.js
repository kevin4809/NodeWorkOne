const express = require('express');
//models

//controllers
const { getAllUsers, createUsers, getUserById, deleteUser, updateUser } = require('../controllers/users.controller')

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers)
usersRouter.post('/', createUsers)
usersRouter.get('/:id', getUserById)
usersRouter.patch('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)


module.exports = { usersRouter };