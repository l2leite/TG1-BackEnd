const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class ItemVenda extends Model {
    static init(sequelize){
        super.init({
            quantidade: DataTypes.INTEGER,
            valor_unitario: DataTypes.DOUBLE(10,4),
            observacao: DataTypes.STRING
        },{
            sequelize,
        });

        super.tableName = 'item_venda';
    }

    static associate(models) {
        this.belongsTo(models.Produto, { 
            foreignKey: 'produto_id',
             as: 'produtos' 
        });
        this.belongsTo(models.Venda, { 
            foreignKey: 'venda_id',
             as: 'vendas' 
        });
    }
}

module.exports = ItemVenda;