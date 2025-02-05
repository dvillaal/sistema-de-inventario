const productsRouter = require('express').Router()
const Product = require('../models/product')

productsRouter.post('/', async (request, response) => {
    const { numeroReferencia, nombre, categoria, cantidad, precio, ubicacion } = request.body

    const product = new Product({
        numeroReferencia,
        nombre,
        categoria,
        cantidad,
        precio,
        ubicacion
    })

    const savedProduct = await product.save()

    response.status(201).json(savedProduct)
})

productsRouter.get('/', async (request, response) => {
    const products = await Product.find({})
    response.json(products)
})

productsRouter.put('/:id', async (request, response) => {
    const body = request.body
    
    const product = {
        numeroReferencia: body.numeroReferencia, 
        nombre: body.nombre, 
        categoria: body.categoria, 
        cantidad: body.cantidad, 
        precio: body.precio, 
        ubicacion: body.ubicacion
    }

    const updatedProduct = await Product.findByIdAndUpdate(request.params.id, product, { new:true })
    response.json(updatedProduct)
})

module.exports = productsRouter