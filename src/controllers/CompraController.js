const Compra = require('../models/Compra');

module.exports = {
    async update(req,res) {
        const { id, nota_fiscal, valor, observacao } = req.body;
        const compra = await Compra.findOne({
            where: { id }
        });
        if(!compra){
            return res.status(400).json({error: 'Compra não encontrada.'});
        };
        await compra.update({
            nota_fiscal,
            valor,
            observacao
        });
        return res.json('Compra alterada.');
    },

    async delete(req,res) {
        const { id } = req.body;
        const compra = await Compra.findByPk( id );
        if(!compra) {
            return res.status(400).json({error: 'Compra não encontrada.'});
        };
        await compra.destroy();
        return res.json('Compra apagada.');
    },

    async index(req,res) {
        const compra = await Compra.findAll();         
        return res.json(compra);
    },

    async index_id(req,res) {
        const { id } = req.body;
        const compra = await Compra.findByPk(id);         
        if(!compra) {
            return res.status(400).json({error: 'Compra não encontrada.'})
        };
        return res.json(compra);
    },

    async index_par_id(req,res) {
        const { funcionario_id, fornecedor_id } = req.body;
        const compra = await Compra.findAndCountAll({
            where: {
                funcionario_id,
                fornecedor_id,
            }
        });         
        if(!compra) {
            return res.status(400).json({error: 'Compra não encontrada.'})
        };
        return res.json(compra);
    },

    async store(req, res) {
        const { funcionario_id, fornecedor_id, nota_fiscal, valor, observacao } = req.body;
        const compra = await Compra.create({
            funcionario_id, 
            fornecedor_id,
            nota_fiscal,
            valor,
            observacao
        });   
        return res.json({
            msg: 'Compra realizada',
            compra,
        });
    }
};