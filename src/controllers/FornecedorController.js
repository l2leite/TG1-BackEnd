const Fornecedor = require('../models/Fornecedor');

module.exports = {
    async update_id(req,res) {
        const { id, cnpj, razao_social, nome_fantasia, ie, im, data_abertura, contato, telefone, email } = req.body;
        const fornecedor = await Fornecedor.findOne({
            where: { id }
        });

        if(!fornecedor){
            return res.status(400).json({error: 'Fornecedor não encontrado.'});
        };

        const teste = await Fornecedor.findAndCountAll({
            where: { cnpj }
        });

        if(teste.count >= 1){
            return res.status(400).json({error: 'Novo CNPJ informado já está cadastrados em outro registro', teste});
        };

        await fornecedor.update({
            cnpj, 
            razao_social, 
            nome_fantasia, 
            ie, 
            im, 
            data_abertura, 
            contato, 
            telefone, 
            email
        });
        return res.json('Cadastro de Fornecedor alterado.');
    },

    async update_cnpj(req,res) {
        const { cnpj, razao_social, nome_fantasia, ie, im, data_abertura, contato, telefone, email } = req.body;
        
        const fornecedor = await Fornecedor.findOne({
            where: { cnpj }
        });
        
        if(!fornecedor){
            return res.status(400).json({error: 'Fornecedor não encontrado.'});
        };

        await fornecedor.update({
            cnpj, 
            razao_social, 
            nome_fantasia, 
            ie, 
            im, 
            data_abertura, 
            contato, 
            telefone, 
            email
        });
        
        return res.json('Fornecedor alterado.');
    },

    async delete(req,res) {
        const { id } = req.body;
        const fornecedor = await Fornecedor.findByPk( id );
        if(!fornecedor) {
            return res.status(400).json({error: 'Fornecedor não encontrado.'});
        };
        await fornecedor.destroy();
        return res.json('Cadastro de Fornecedor apagado.');
    },

    async index(req,res) {
        const fornecedor = await Fornecedor.findAll();         
        return res.json(fornecedor);
    },

    async index_id(req,res) {
        const { id } = req.body;
        const fornecedor = await Fornecedor.findByPk(id);         
        if(!fornecedor) {
            return res.status(400).json({error: 'Fornecedor não encontrado.'})
        };
        return res.json(fornecedor);
    },

    async index_par_cnpj(req,res) {
        const { cnpj } = req.body;
        const fornecedor = await Fornecedor.findAndCountAll({
            where: {
                cnpj
            }
        });         
        if(fornecedor.count == 0) {
            return res.status(400).json({error: 'Fornecedor não encontrado.'})
        };
        return res.json(fornecedor);
    },

    async store(req, res) {
        const { cnpj, razao_social, nome_fantasia, ie, im, data_abertura, contato, telefone, email } = req.body;
        
        const verificacao = await Fornecedor.findAndCountAll({
            where: {
                cnpj
            }
        });       

        if(verificacao.count == 0) {        
            const fornecedor = await Fornecedor.create({
                cnpj, 
                razao_social, 
                nome_fantasia, 
                ie, 
                im, 
                data_abertura, 
                contato, 
                telefone, 
                email
            });   

            return res.json({
                msg: 'Fornecedor registrado',
                fornecedor,
            });
        }

        return res.status(400).json({error: 'Fornecedor já cadastrado.'});
    }
};