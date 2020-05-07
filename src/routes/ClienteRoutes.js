const { Router } = require('express')
const ClienteController = require('../controller/ClienteController')
const ClienteValidation = require('../middleware/ClienteValidation')

const routes = Router()

routes.post('/', ClienteValidation, ClienteController.create)
routes.get('/', ClienteController.index)
routes.get('/:id', ClienteController.show)
routes.put('/:id', ClienteController.update)
routes.delete('/:id', ClienteController.delete)

module.exports = routes