const {Router} = require('express')
const router = Router()
const {Message} = require('../controllers/index.controller')

router.route("/").get(Message)

module.exports = router