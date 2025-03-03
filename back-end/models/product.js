const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    numeroReferencia: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true,
        min: [0, "La cantidad debe ser mayor que 0"]
    },
    precio: {
        type: Number,
        required: true,
        min: [0.01, "El precio debe ser mayor que 0"]
    },
    ubicacion: {
        type: String,
        required: true
    },    
})

productSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v

    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product