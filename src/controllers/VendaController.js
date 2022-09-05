const ItemVenda = require('../models/ItemVenda');
const Evento = require('../models/Evento');
const Funcionario = require('../models/Funcionario');
const Venda = require('../models/Venda');
const Produto = require('../models/Produto');

function somaValoresVenda(itens){
    let soma = 0;
    for(let itemvenda of itens){
        soma = soma + (itemvenda.valor_unitario * itemvenda.quantidade);
    }
    return soma;
}


module.exports = {
    async update(req,res) {

        const { id, itens } = req.body;
        const valor = somaValoresVenda(itens);

        const venda = await Venda.findOne({
            where: { id }
        });
        
        if(!venda){
            return res.status(400).json({error: 'Venda não encontrada.'});
        }

        for(let itemVenda of itens){
            const item = await ItemVenda.findOne({
                where: {
                    venda_id: id,
                    produto_id: itemVenda.produto_id
                }
            });

            if(!item){
                return res.status(400).json({error: 'item não encontrado.'});
            };

            await item.update({
                observacao : 'Item alterado. Quantidade anterior = ' + item.quantidade + '. Valor unitário anterior = ' + item.valor_unitario,
                quantidade : itemVenda.quantidade,
                valor_unitario : itemVenda.valor_unitario, 
            });
        }

        await venda.update({
            valor,
            observacao: 'Dados desta venda foram alterados.'
        });

        return res.json('Venda alterada.');
    },

    async delete(req,res) {
        const { id } = req.body;
        const venda = await Venda.findByPk( id );
        if(!venda) {
            return res.status(400).json({error: 'Venda não encontrada.'});
        };
        await venda.destroy();
        return res.json('Venda apagada.');
    },

    async index(req,res) {
        const venda = await Venda.findAll({
            include:{
                include: {
                    association: 'produtos',
                    attributes: ['nome']
                },
                association: 'itens',
                attributes: ['produto_id', 'quantidade', 'valor_unitario'],
            }
        });         
        return res.json(venda);
    },

    async index_id(req,res) {
        const { id } = req.body;
        const venda = await Venda.findByPk(id, {
            include:{
                include: {
                    association: 'produtos',
                    attributes: ['nome']
                },
                association: 'itens',
                attributes: ['produto_id', 'quantidade', 'valor_unitario'],
            }
        });   

        if(!venda) {
            return res.status(400).json({error: 'Venda não encontrada.'})
        };

        return res.json(venda);
    },

    async index_par_id(req,res) {
        const { funcionario_id, evento_id } = req.body;
        const venda = await Venda.findAndCountAll({
            where: {
                funcionario_id,
                evento_id,
            },
            include:{
                include: {
                    association: 'produtos',
                    attributes: ['nome']
                },
                association: 'itens',
                attributes: ['produto_id', 'quantidade', 'valor_unitario'],
            }
        }); 

        if(!venda) {
            return res.status(400).json({error: 'Venda não encontrada.'})
        };
        
        return res.json(venda);
    },

    async store(req,res) {

        const { funcionario_id, evento_id, observacao, itens } = req.body;
        const valor = somaValoresVenda(itens);

        const venda = await Venda.create({
            funcionario_id,
            evento_id,
            valor,
            observacao
        });

        for(let itemvenda of itens){
            const item = await ItemVenda.create({
                venda_id : venda.id,
                produto_id : itemvenda.produto_id,
                quantidade : itemvenda.quantidade,
                valor_unitario : itemvenda.valor_unitario
            });
        }

        return res.json({
            msg: 'Venda realizada.',
            venda,
        });
    }
};