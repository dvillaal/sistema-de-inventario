const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    numeroReferencia: {
        type: String,
        required: true,
        unique: true
    },
    nombre: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    cantidad: {
        type: Number,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    ubicacion: {
        type: String,
        require: true
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