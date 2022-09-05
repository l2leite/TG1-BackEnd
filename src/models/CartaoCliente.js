const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class CartaoCliente extends Model {
    static init(sequelize){
        super.init({
            status: DataTypes.STRING,
        },{
            sequelize,
        });

        super.tableName = 'cartao_cliente';
    }

    static associate(models) {
        this.belongsTo(models.Cliente, { 
            foreignKey: 'cliente_id',
             as: 'clientes' 
            });
        this.belongsTo(models.Cartao, {
            foreignKey: 'cartao_id',
            as: 'cartoes'
        });
    }
}

module.exports = CartaoCliente;