const bcrypt = require('bcrypt')
const workersRouter = require('express').Router()
const Worker = require('../models/worker')

workersRouter.post('/', async (request, response) => {
    console.log('req:', request.body)
    console.log('password:', request.body.password)
    console.log('type of:', typeof request.body.password)

    const { username, cedula, nombre, rol, turno, telefono, estado, password } = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)

    const user = new Worker({
        username,
        cedula,
        nombre,
        rol,
        turno,
        telefono,
        estado,
        passwordHash
    })

    const savedUser = await user.save()

    response.status(201).json(savedUser)
})

workersRouter.get('/', async (request, response) => {
    const workers = await Worker.find({})
    response.json(workers)
})

workersRouter.put('/:id', async (request, response) => {
    const updatedWorker = await Worker.findByIdAndUpdate(request.params.id, { $set: request.body }, { new: true })

    response.json(updatedWorker)
})

workersRouter.delete('/:id', async (request, response) => {
    await Worker.findByIdAndDelete(request.params.id)
    response.status(204).end()
})

module.exports = workersRouter