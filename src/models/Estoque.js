const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class Estoque extends Model {
    static init(sequelize){
        super.init({
            identificacao: DataTypes.STRING,
            unidade: DataTypes.STRING,
            saldo: DataTypes.DOUBLE(10,4),
            valor_unitario: DataTypes.DOUBLE(8,2)
        },{
            sequelize,
        });

        super.tableName = 'Estoque';
    }

    static associate(models) {
        this.belongsTo(models.Produto, { 
            foreignKey: 'produto_id',
             as: 'produtos' 
            });
    }
}

module.exports = Estoque;