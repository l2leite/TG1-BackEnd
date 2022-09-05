const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class Fornecedor extends Model {
    static init(sequelize){
        super.init({
            cnpj: DataTypes.STRING,
            razao_social: DataTypes.STRING,
            nome_fantasia: DataTypes.STRING,
            ie: DataTypes.STRING,
            im: DataTypes.STRING,
            data_abertura: DataTypes.DATEONLY,
            contato: DataTypes.STRING,
            telefone: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize,
        });
        super.tableName = 'fornecedor';
    }
}

module.exports = Fornecedor;