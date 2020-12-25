const express = require('express')
const router = express.Router()
const { test, getUsers, addUser } = require('../controllers')

router
  .route('/test')
  .post(test)

router
  .route('/:id?')
  .get(getUsers)

router
  .route('/')
  .post(addUser)

module.exports = router