const path = require('path')

const { StatusCodes } = require('http-status-codes')

const uploadProductImage = async (req, res) => {
  let productImage = req.files.imageComputer
  const imagePath = path.join(
    __dirname,
    `../public/uploads/${productImage.name}`
  )
  console.log(productImage)

  await productImage.mv(imagePath)
  res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } })
}

module.exports = {
  uploadProductImage,
}
