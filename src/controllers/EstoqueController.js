const Estoque = require('../models/Estoque');
const Produto = require('../models/Produto');

module.exports = {
    async index(req,res) {
        const { produto_id } = req.params;
        const produtos = await Produto.findByPk(produto_id);
        if(!produtos){
            return res.status(400).json({error:'Produto não cadastrado'});
        };
        const estoque = await Estoque.findAll({
            where: {
                produto_id: produtos.id
            },
            include: {
                association: 'produtos',
                attributes: ['nome']
            },
            attributes:['unidade', 'saldo']
        });
        if(!estoque || estoque.length==0) {
            return res.status(400).json({error:'Produto sem estoque.'});
        }         
        return res.json(estoque);
    },
 
    async store(req, res) {
        const { produto_id, identificacao, unidade, saldo, valor_unitario } = req.body;
        const produto = await Produto.findByPk(produto_id);
        if(!produto) {
            return res.status(400).json({error:'Produto não cadastrado'});
        }
        const estoque = await Estoque.create({
            produto_id,
            identificacao,
            unidade,
            saldo,
            valor_unitario
        });
        return res.status(200).json({'Operação finalizada,':'estoque cadastrado com sucesso'});
    }

};