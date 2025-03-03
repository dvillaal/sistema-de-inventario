const mongoose = require('mongoose')

const workerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    cedula: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    rol: {
        type: String,
        require: true
    },
    turno: {
        type: String,
        require: true
    },
    telefono: {
        type: Number,
        require: true
    },
    estado: {
        type: String,
        require: true
    },
    passwordHash: String,
    
})

workerSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v

        delete returnedObject.passwordHash
    }
})

const Worker = mongoose.model('Worker', workerSchema)

module.exports = Worker