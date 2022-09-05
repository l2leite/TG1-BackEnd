const Recarga = require('../models/Recarga');

module.exports = {
    async update(req,res) {
        const { id, forma_pagamento, valor, autorizacao } = req.body;
        const recarga = await Recarga.findOne({
            where: { id }
        });
        if(!recarga){
            return res.status(400).json({error: 'Recarga não encontrado.'});
        };
        await recarga.update({
            forma_pagamento, 
            valor, 
            autorizacao
        });
        return res.json('Recarga alterada.');
    },

    async delete(req,res) {
        const { id } = req.body;
        const recarga = await Recarga.findByPk( id );
        if(!recarga) {
            return res.status(400).json({error: 'Recarga não encontrado.'});
        };
        await recarga.destroy();
        return res.json('Recarga apagada.');
    },

    async index(req,res) {
        const recarga = await Recarga.findAll();         
        return res.json(recarga);
    },

    async index_id(req,res) {
        const { id } = req.body;
        const recarga = await Recarga.findByPk(id);         
        if(!recarga) {
            return res.status(400).json({error: 'Recarga não encontrada.'})
        };
        return res.json(recarga);
    },

    async index_par_id(req,res) {
        const { funcionario_id, cliente_id } = req.body;
        const recarga = await Recarga.findAndCountAll({
            where: {
                funcionario_id,
                cliente_id,
            }
        });         
        if(!recarga) {
            return res.status(400).json({error: 'Recarga não encontrada.'})
        };
        return res.json(recarga);
    },

    async store(req, res) {
        const { funcionario_id, cliente_id, forma_pagamento, valor, autorizacao } = req.body;
        const recarga = await Recarga.create({
            cliente_id, 
            funcionario_id,
            forma_pagamento, 
            valor, 
            autorizacao
        });   
        return res.json({
            msg: 'Recarga registrada.',
            recarga,
        });
    }
};