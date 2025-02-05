const bcrypt = require('bcrypt')
const workersRouter = require('express').Router()
const Worker = require('../models/worker')

workersRouter.post('/', async (request, response) => {
    const { username, cedula, nombre, rol, turno, telefono, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new Worker({
        username,
        cedula,
        nombre,
        rol,
        turno,
        telefono,
        passwordHash
    })

    const savedUser = await user.save()

    response.status(201).json(savedUser)
})

workersRouter.get('/', async (request, response) => {
    const workers = await Worker.find({})
    response.json(workers)
})

module.exports = workersRouter