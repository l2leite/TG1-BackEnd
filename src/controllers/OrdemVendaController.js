const CartaoCliente = require('../models/CartaoCliente');
const Evento = require('../models/Evento');
const Funcionario = require('../models/Funcionario');
const OrdemVenda = require('../models/OrdemVenda');
const Produto = require('../models/Produto');


module.exports = {
    async update(req,res) {
        const { id, quantidade, valor, observacao } = req.body;
        const ordemvenda = await OrdemVenda.findOne({
            where: { id }
        });
        if(!ordemvenda){
            return res.status(400).json({error: 'Ordem de Venda não encontrada.'});
        };
        await ordemvenda.update({
            quantidade,
            valor,
            observacao
        });
        return res.json('Ordem de Venda alterada.');
    },

    async delete(req,res) {
        const { id } = req.body;
        const ordemvenda = await OrdemVenda.findByPk( id );
        if(!ordemvenda) {
            return res.status(400).json({error: 'Ordem de Venda não encontrada.'});
        };
        await ordemvenda.destroy();
        return res.json('Ordem de Venda apagada.');
    },

    async index(req,res) {
        const ordemvenda = await OrdemVenda.findAll();         
        return res.json(ordemvenda);
    },

    async index_id(req,res) {
        const { id } = req.body;
        const ordemvenda = await OrdemVenda.findByPk(id);         
        if(!ordemvenda) {
            return res.status(400).json({error: 'Ordem de Venda não encontrada.'})
        };
        return res.json(ordemvenda);
    },

    async index_par_id(req,res) {
        const { funcionario_id, evento_id, produto_id } = req.body;
        const ordemvenda = await OrdemVenda.findAndCountAll({
            where: {
                funcionario_id,
                produto_id,
                evento_id,
            }
        });         
        if(!ordemvenda) {
            return res.status(400).json({error: 'Ordem de Venda não encontrada.'})
        };
        return res.json(ordemvenda);
    },

    async store(req, res) {
        const { funcionario_id, evento_id, produto_id, quantidade, valor, observacao } = req.body;
        const ordemvenda = await OrdemVenda.create({
            funcionario_id, 
            produto_id,
            evento_id,
            quantidade,
            valor,
            observacao
        });   
        return res.json({
            msg: 'Ordem de Venda realizada. Numero do id =' + ordemvenda.id,
            ordemvenda,
        });
    }
};