const Cartao = require('../models/Cartao');
const Pessoa = require('../models/Pessoa');
const Cliente = require('../models/Cliente');

module.exports = {
    async index(req,res) {
        const cartoes = await Cartao.findAll();
        return res.json(cartoes);
    },

    async store(req, res) {
        const { chave, senha } = req.body;

        const cartao = await Cartao.create({ chave, senha });

        return res.json(cartao);
    },

    async store2(req, res) {
        const { cpf, cartao_id } = req.body;
        let pessoa = await Pessoa.findOne({
            where: { cpf }
        });   
        if(!pessoa) {
            return res.status(400).json({error: 'Pessoa não encontrada.'});
        }; 
        pessoa = await Pessoa.findOne({
            where: { cpf },
            include: { 
                association: 'clientes',
                attributes: ['id', 'status', 'saldo'],
            }
        }); 
        if(!pessoa) {
            return res.status(400).json({error: 'Cliente não encontrada.'});
        };
        const cartao = await Cartao.findByPk(cartao_id);
        if(!cartao) {
            return res.status(400).json({error: 'Cartao não encontrado.'});
        };

        const cliente = await Cliente.findByPk(pessoa.clientes.id);

        console.log(1111111111111);

        await cliente.addHook(cartao);

        return res.json(cartaocliente);
    }

};