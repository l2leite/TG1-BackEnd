const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class Venda extends Model {
    static init(sequelize){
        super.init({
            observacao: DataTypes.STRING,
            valor: DataTypes.DOUBLE(10,4),
        },{
            sequelize,
        });

        super.tableName = 'venda';
    }

    static associate(models) {
        this.belongsTo(models.Funcionario, { 
            foreignKey: 'funcionario_id',
             as: 'funcionarios' 
        });
        this.belongsTo(models.Evento, { 
            foreignKey: 'evento_id',
             as: 'eventos' 
        });
        this.hasMany(models.ItemVenda, {
            foreignKey: 'venda_id',
            as: 'itens'
        });
    }
}

module.exports = Venda;