const Funcao = require('../models/Funcao');

module.exports = {
    async index(req, res) {
        const funcao = await Funcao.findAll();
        if(funcao.length==0){
            return res.json('Não há produto cadastrado.');
        }
        return res.json(funcao);
    },

    async store(req, res) {
        const { nome, descricao, departamento, permissoes } = req.body;
        const funcao = await Funcao.create({
            nome,
            descricao,
            departamento,
            permissoes
        });
        return res.json(funcao);
    },

    async update(req, res) {
        const { id, nome, descricao, departamento, permissoes } = req.body;
        const funcao = await Funcao.findByPk(id);
        if(!funcao) {
            return res.status(400).json({error: 'Função não encontrada.'});
        }
        await funcao.update({
            nome,
            descricao,
            departamento,
            permissoes
        });
        return res.json(funcao);
    }
};