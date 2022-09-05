const ItemCompra = require('../models/ItemCompra');

module.exports = {
    async update(req,res) {
        const { id, quantidade, valor_unitario, observacao } = req.body;
        const item = await ItemCompra.findOne({
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
        return res.json('Item da Compra alterado.');
    },

    async delete(req,res) {
        const { id } = req.body;
        const item = await ItemCompra.findByPk( id );
        if(!item) {
            return res.status(400).json({error: 'Item não encontrado.'});
        };
        await item.destroy();
        return res.json('Item da Compra apagado.');
    },

    async index(req,res) {
        const item = await ItemCompra.findAll();         
        return res.json(item);
    },

    async index_id(req,res) {
        const { id } = req.body;
        const item = await ItemCompra.findByPk(id);         
        if(!item) {
            return res.status(400).json({error: 'Item de Compra não encontrado.'})
        };
        return res.json(item);
    },

    async index_par_id(req,res) {
        const { produto_id, compra_id } = req.body;
        const item = await ItemCompra.findAndCountAll({
            where: {
                produto_id,
                compra_id,
            }
        });         
        if(!item) {
            return res.status(400).json({error: 'Item da Compra não encontrado.'})
        };
        return res.json(item);
    },

    async store(req, res) {
        const { produto_id, compra_id, quantidade, valor_unitario, observacao } = req.body;
        const item = await ItemCompra.create({
            produto_id, 
            compra_id,
            quantidade,
            valor_unitario,
            observacao
        });   
        return res.json({
            msg: 'Item da Compra registrado',
            item,
        });
    }
};