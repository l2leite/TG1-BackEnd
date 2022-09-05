const { Model, DataTypes, SequelizeScopeError, Sequelize } = require('sequelize');

class Produto extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            nome_comercial: DataTypes.STRING,
            similares: DataTypes.STRING,
            fabricante: DataTypes.STRING,
            tipo: DataTypes.STRING,
            embalagem: DataTypes.STRING
        },{
            sequelize
        });

        super.tableName = 'produto';
    }
}

module.exports = Produto;