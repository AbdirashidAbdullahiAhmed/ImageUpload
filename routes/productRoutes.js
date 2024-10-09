const express = require('express')

const router = express.Router()

const {
  createProducts,
  getAllProducts,
} = require('../controllers/productController')

const { uploadProductImage } = require('../controllers/uploadsController')

router.route('/').post(createProducts).get(getAllProducts)
router.route('/uploads').post(uploadProductImage)

module.exports = router
