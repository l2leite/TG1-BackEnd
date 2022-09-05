const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class Cartao extends Model {
    static init(sequelize){
        super.init({
            chave: DataTypes.STRING,
            senha: DataTypes.STRING,
        },{
            sequelize,
        });

        super.tableName = 'cartao';
    }
    /*static associate(models) {
        this.belongsToMany(models.Cliente, {
            foreignKey: 'cartao_id',
            through: 'cartao_cliente',
            as: 'cartoes'
        })
    }*/
}

module.exports = Cartao;