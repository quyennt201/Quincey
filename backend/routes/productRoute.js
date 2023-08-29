const express = require('express')
const productController = require('../controllers/productController')

const productRouter = express.Router()

productRouter.get('', productController.getAll)
productRouter.get('/:id', productController.getById)
productRouter.post('/search', productController.getByName)
productRouter.post('', productController.post)
productRouter.put('/:id', productController.put)
productRouter.delete('/:id', productController.delete)

module.exports = productRouter 