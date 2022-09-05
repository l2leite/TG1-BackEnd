const CartaoCliente = require('../models/CartaoCliente');
const Cartao = require('../models/Cartao');
const Cliente = require('../models/Cliente');
const Pessoa = require('../models/Pessoa');


module.exports = {
    async update(req,res) {
        const { cartao_id, cliente_id, status } = req.body;
        const cartaocliente = await CartaoCliente.findOne({
            where: { cartao_id, cliente_id }
        });
        if(!cartaocliente){
            return res.status(400).json({error: 'Vinculo cartão e cliente não encontrado.'});
        };

        await cartaocliente.update({
            status
        });

        return res.json('Vinculo cartão & cliente desfeito.');
    },

    async delete(req,res) {
        const { cartao_id, cliente_id } = req.body;
        const cartaocliente = await CartaoCliente.findOne({
            where: { cartao_id, cliente_id }
        });
        if(!cartaocliente){
            return res.status(400).json({error: 'Vinculo cartão e cliente não encontrado.'});
        };

        await cartaocliente.destroy();

        return res.json('Vinculo cartão & cliente apagado.');
    },

    async index(req,res) {
        const cartaocliente = await CartaoCliente.findAll();         
        return res.json(cartaocliente);
    },

    async store(req, res) {
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

        const teste1 = await CartaoCliente.findOne({
            where: { 
                cartao_id,
                status: 'Ativo'
            } 
        });
        if(teste1){
            return res.status(400).json({error: 'Cartao já vinculado a um cliente.'});
        };
        
        const teste2 = await CartaoCliente.findOne({
            where: { 
                cliente_id: pessoa.clientes.id,
                status: 'Ativo'
            }
        });
        if(teste2){
            return res.status(400).json({error: 'Cliente já vinculado a um cartão.'});
        };

        const cliente = await Cliente.findByPk(pessoa.clientes.id);

        const cartaocliente = await CartaoCliente.create({
            cartao_id,
            cliente_id: cliente.id,
            status: 'Ativo'
        });

        return res.json({
            msg: 'Vinculo cartão & cliente',
            cartaocliente,
        });
    }

};