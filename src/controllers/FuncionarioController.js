const Funcionario = require('../models/Funcionario');
const Pessoa = require('../models/Pessoa');
const Funcao = require('../models/Funcao');

module.exports = {
    async index(req,res) {
        const { pessoa_id } = req.body;
        const pessoas = await Pessoa.findByPk(pessoa_id, {
            include: { 
                association: 'funcionarios',
                attributes: ['salario', 'data_inicio'],
                include: {
                    association: 'funcoes'
                }
            },
            attributes: [ 'cpf', 'name' ],
        });         
        return res.json(pessoas);
    },

    async index_cpf(req,res) {
        const { cpf } = req.body;
        const pessoa = await Pessoa.findOne({
            where: { cpf }
        });   
        if(!pessoa) {
            return res.status(400).json({error: 'Pessoa não encontrada.'});
        };   
        const funcionario = await Funcionario.findOne({
            where: { pessoa_id: pessoa.id },
            include: { association: 'pessoas' },
        })   
        if(!funcionario) {
            return res.status(400).json({error:'Esta pessoa não é um funcionario.'})
        }
        return res.json(funcionario);
    },

    async store(req, res) {
        const { pessoa_id, funcao_id, login, senha, salario, data_inicio } = req.body;
        const pessoa = await Pessoa.findByPk(pessoa_id);
        if(!pessoa) {
            return res.status(400).json({error: 'Pessoa não encontrada.'});
        };
        const funcao = await Funcao.findByPk(funcao_id);
        if(!funcao) {
            return res.status(400).json({error: 'Função não encontrada.'});
        };
        console.log({ pessoa_id });
        console.log(111111);
        const funcionario = await Funcionario.create({
            login, 
            senha, 
            salario, 
            data_inicio,
            pessoa_id,
            funcao_id,
        })
        return res.json(funcionario);
    }
};