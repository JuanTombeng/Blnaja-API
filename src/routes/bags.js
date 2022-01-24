const express = require('express')
const bagsController = require('../controllers/bags')
const route = express.Router()

route.get('/:id', bagsController.getItems)
route.post('/add-item/', bagsController.addItem)

module.exports = route