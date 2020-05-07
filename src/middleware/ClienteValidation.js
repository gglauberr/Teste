const ClienteModel = require('../model/ClienteModel')

const ClienteValidation = async (req, res, next) => {
    const { nome, telefone, email } = req.body

    if (!nome)
        return res.status(400).json({ error: 'O nome é obrigatório' })
    else if (!telefone)
        return res.status(400).json({ error: 'O telefone é obrigatório' })
    else if (!email)
        return res.status(400).json({ error: 'O email é obrigatório' })
    else {
        let exists

        if (!req.params.id) {
            exists = await ClienteModel
                .findOne({
                    'nome': { '$eq': nome },
                    'telefone': { '$eq': telefone },
                    'email': { '$eq': email }
                })
        }

        if (exists)
            return res.status(400).json({ error: 'Esse cliente já está cadastrado' })
        
        next()
    }
}

module.exports = ClienteValidation