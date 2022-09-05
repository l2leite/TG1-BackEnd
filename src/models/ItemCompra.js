const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class ItemCompra extends Model {
    static init(sequelize){
        super.init({
            quantidade: DataTypes.INTEGER,
            valor_unitario: DataTypes.DOUBLE(10,4),
            observacao: DataTypes.STRING
        },{
            sequelize,
        });

        super.tableName = 'item_compra';
    }

    static associate(models) {
        this.belongsTo(models.Produto, { 
            foreignKey: 'produto_id',
             as: 'produtos' 
        });
        this.belongsTo(models.Compra, { 
            foreignKey: 'compra_id',
             as: 'compras' 
        });
    }
}

module.exports = ItemCompra;