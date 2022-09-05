const ItemVenda = require('../models/ItemVenda');

module.exports = {
    async update(req,res) {
        const { id, quantidade, valor_unitario, observacao } = req.body;
        const item = await ItemVenda.findOne({
            where: { id }
        });
        if(!item){
            return res.status(400).json({error: 'Item não encontrado.'});
        };
        await item.update({
            quantidade,
            valor_unitario,
            observacao
        });
        return res.json('Item da Venda alterado.');
    },

    async delete(req,res) {
        const { id } = req.body;
        const item = await ItemVenda.findByPk( id );
        if(!item) {
            return res.status(400).json({error: 'Item não encontrado.'});
        };
        await item.destroy();
        return res.json('Item da venda apagado.');
    },

    async index(req,res) {
        const item = await ItemVenda.findAll();         
        return res.json(item);
    },

    async index_id(req,res) {
        const { id } = req.body;
        const item = await ItemVenda.findByPk(id);         
        if(!item) {
            return res.status(400).json({error: 'Item de venda não encontrado.'})
        };
        return res.json(item);
    },

    async index_par_id(req,res) {
        const { produto_id, venda_id } = req.body;
        const item = await ItemVenda.findAndCountAll({
            where: {
                produto_id,
                venda_id,
            }
        });         
        if(!item) {
            return res.status(400).json({error: 'Item da Venda não encontrado.'})
        };
        return res.json(item);
    },

    async store(req, res) {
        const { produto_id, venda_id, quantidade, valor_unitario, observacao } = req.body;
        const item = await ItemVenda.create({
            produto_id, 
            venda_id,
            quantidade,
            valor_unitario,
            observacao
        });   
        return res.json({
            msg: 'Item da venda registrado',
            item,
        });
    }
};