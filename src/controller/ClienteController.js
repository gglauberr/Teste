const ClienteModel = require('../model/ClienteModel')

module.exports = new class ClienteController{

    async create(req, res){
        const cliente = new ClienteModel(req.body)
        await cliente
            .save()
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async index(req, res){
        await ClienteModel
            .find()
            .sort('_id')
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async show(req, res){
        await ClienteModel
            .findById(req.params.id)
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async update(req, res){
        await ClienteModel
            .updateOne({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

    async delete(req, res){
        await ClienteModel
            .deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response)
            })
            .catch(error => {
                return res.status(500).json(error)
            })
    }

}