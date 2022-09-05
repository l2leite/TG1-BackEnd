const Pessoa = require('../models/Pessoa');

module.exports = {
    async index(req,res) {
        const pessoas = await Pessoa.findAll();
        return res.json(pessoas);
    },
    async store(req, res) {
        const { cpf, name, data_nasc, telefone, sexo, email } = req.body;

        const pessoa = await Pessoa.create({ cpf, name, data_nasc, telefone, sexo, email });

        return res.json(pessoa);
    }

};