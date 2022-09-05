const Pagantes = require('../models/Pagantes');

module.exports = {
    async update(req,res) {
        const { id, venda_id, cliente_id, valor, observacao } = req.body;
        const pagantes = await Pagantes.findOne({
            where: { id }
        });
        if(!pagantes){
            return res.status(400).json({error: 'Pagantes não encontrado.'});
        };
        await pagantes.update({
            venda_id, 
            cliente_id, 
            valor, 
            observacao
        });
        return res.json('Pagantes alterado.');
    },

    async delete(req,res) {
        const { id } = req.body;
        const pagantes = await Pagantes.findByPk( id );
        if(!pagantes) {
            return res.status(400).json({error: 'Pagantes não encontrado.'});
        };
        await pagantes.destroy();
        return res.json('Pagantes apagado.');
    },

    async index(req,res) {
        const pagantes = await Pagantes.findAll();         
        return res.json(pagantes);
    },

    async index_id(req,res) {
        const { id } = req.body;
        const pagantes = await Pagantes.findByPk(id);         
        if(!pagantes) {
            return res.status(400).json({error: 'Pagantes não encontrado.'})
        };
        return res.json(pagantes);
    },

    async index_par_id(req,res) {
        const { venda_id, cliente_id } = req.body;
        const pagantes = await Pagantes.findAndCountAll({
            where: {
                venda_id,
                cliente_id,
            }
        });         
        if(!pagantes) {
            return res.status(400).json({error: 'Pagantes não encontrado.'})
        };
        return res.json(pagantes);
    },

    async store(req, res) {
        const { venda_id, cliente_id, valor, observacao } = req.body;
        const pagantes = await Pagantes.create({
            venda_id, 
            cliente_id, 
            valor, 
            observacao
        });   
        return res.json({
            msg: 'Pagantes registrado',
            pagantes,
        });
    }
};