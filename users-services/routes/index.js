const router = require('express').Router()
const apiRoutes = require('./users')

const { apiuri } = require('../config')

const api = `/${apiuri}`

router.use(api, apiRoutes)
router.use(api, (req, res) => res.status(404).json('No API route found'))

module.exports = router
