const Produto = require('../models/Produto');

module.exports = {
    async index(req, res) {
        const produto = await Produto.findAll();
        if(produto.length==0){
            return res.json('Não há produto cadastrado.');
        }
        return res.json(produto);
    },

    async store(req, res) {
        const { nome } = req.body;
        const produto = await Produto.create({
            nome
        });
        return res.json(produto);
    },

    async update(req, res) {
        const { id, nome, nome_comercial, similares, fabricante, tipo } = req.body;
        const produto = await Produto.findByPk(id);
        if(!produto) {
            return res.status(400).json({error: 'Produto não encontrado.'});
        }
        await produto.update({
            nome,
            nome_comercial,
            similares,
            fabricante,
            tipo
        });
        return res.json(produto);
    }
};