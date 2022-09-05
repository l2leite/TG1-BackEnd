const Evento = require('../models/Evento');

module.exports = {
    async index(req,res) {
        const evento = await Evento.findAll();
        return res.json(evento);
    },

    async index_evento(req,res){
        const { nome } = req.body;
        const evento = await Evento.findAndCountAll({
            where: { nome,
            }
        });
        if(!evento) {
            return res.status(400).json({error: 'Nenhum evento foi realizado com este nome.'});
        }
        return res.json({
            'Número de eventos realizados com estes nome: ': evento.count
        })
    },


    async store(req, res) {
        const { nome, responsavel, data } = req.body;
        const evento = await Evento.create({ nome, responsavel, data });
        return res.json(evento);
    },

    async update(req, res) {
        const { id, publico, pagantes, faturamento, observacao } = req.body;
        const evento = await Evento.findOne({
            where: {
                id
            }
        });
        if(!evento){
            return res.status(400).json({error: 'Evento não encontrado.'});
        }
        await evento.update({
            publico,
            pagantes,
            faturamento,
            observacao
        });
        return res.json(evento);
    }

};