const Products = require('../models/Product')
const { StatusCodes } = require('http-status-codes')

const createProducts = async (req, res) => {
  //   res.send('create products')
  console.log(req.body)
  const product = await Products.create(req.body)
  res.status(StatusCodes.CREATED).json({ product })
}

const getAllProducts = async (req, res) => {
  const products = await Products.find({})
  res.status(StatusCodes.OK).json({ products })
  // res.send('list of products')
}

module.exports = {
  createProducts,
  getAllProducts,
}
