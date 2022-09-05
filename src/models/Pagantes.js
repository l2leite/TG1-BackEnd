const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class Pagantes extends Model {
    static init(sequelize){
        super.init({
            valor: DataTypes.DOUBLE(8,2),
            observacao: DataTypes.STRING
        },{
            sequelize,
        });
        super.tableName = 'pagantes';
    }

    static associate(models) {
        this.belongsTo(models.Venda, { 
            foreignKey: 'venda_id',
             as: 'vendas' 
        });
        this.belongsTo(models.Cliente, { 
            foreignKey: 'cliente_id',
             as: 'clientes' 
        });
    }
}

module.exports = Pagantes;