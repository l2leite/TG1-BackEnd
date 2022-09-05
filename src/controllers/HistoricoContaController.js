const HistoricoConta = require('../models/HistoricoConta');
const Cliente = require('../models/Cliente');


module.exports = {
    async update(req,res) {
        const { id, operacao, operacao_id, valor, saldo_inicial, saldo_final } = req.body;
        const historicoConta = await HistoricoConta.findOne({
            where: { id }
        });
        if(!historicoConta){
            return res.status(400).json({error: 'Histórico de Operação não encontrado.'});
        };
        await historicoConta.update({
            operacao, 
            operacao_id, 
            valor, 
            saldo_inicial, 
            saldo_final
        });
        return res.json('Histórico de Operação alterado.');
    },

    async delete(req,res) {
        const { id } = req.body;
        const historicoConta = await HistoricoConta.findByPk( id );
        if(!historicoConta) {
            return res.status(400).json({error: 'Histórico de Operação não encontrado.'});
        };
        await historicoConta.destroy();
        return res.json('Histórico de Operação apagado.');
    },

    async index(req,res) {
        const historicoConta = await historicoConta.findAll();         
        return res.json(venda);
    },

    async index_id(req,res) {
        const { id } = req.body;
        const historicoConta = await HistoricoConta.findByPk(id);         
        if(!historicoConta) {
            return res.status(400).json({error: 'Histórico de Operação não encontrado.'})
        };
        return res.json(historicoConta);
    },

    async index_par_id(req,res) {
        const { cliente_id } = req.body;
        const historicoConta = await HistoricoConta.findAndCountAll({
            where: {
                cliente_id
            }
        });         
        if(!historicoConta) {
            return res.status(400).json({error: 'Histórico de Operação não encontrado.'})
        };
        return res.json(historicoConta);
    },

    async store(req, res) {
        const { cliente_id, operacao, operacao_id, valor, saldo_inicial, saldo_final } = req.body;
        const historicoConta = await HistoricoConta.create({
            cliente_id, 
            operacao, 
            operacao_id, 
            valor, 
            saldo_inicial, 
            saldo_final
        });   
        return res.json({
            msg: 'Operação adicionado na histórico.',
            historicoConta,
        });
    }
};