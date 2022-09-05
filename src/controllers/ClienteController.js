const Cliente = require('../models/Cliente');
const Pessoa = require('../models/Pessoa');

module.exports = {
    async index(req,res) {
        const { pessoa_id } = req.params;
        const pessoas = await Pessoa.findByPk(pessoa_id, {
            include: { association: 'clientes' }
        });         
        return res.json(pessoas);
    },

    async index_cpf(req,res) {
        const { cpf } = req.body;
        const pessoa = await Pessoa.findOne({
            where: { cpf },
            include: { 
                association: 'clientes',
                attributes: ['status', 'saldo'],
            }
        });   
        if(!pessoa) {
            return res.status(400).json({error: 'Pessoa não encontrada.'});
        };      
        return res.json(pessoa);
    },

    async store(req, res) {
        const { pessoa_id } = req.params;
        const { status, saldo } = req.body;
        const pessoa = await Pessoa.findByPk(pessoa_id);
        if(!pessoa) {
            return res.status(400).json({error: 'Pessoa não encontrada.'});
        };
        const cliente = await Cliente.create({
            status,
            saldo,
            pessoa_id,
        })
        return res.json(cliente);
    }

};