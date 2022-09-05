const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class OrdemVenda extends Model {
    static init(sequelize){
        super.init({
            quantidade: DataTypes.INTEGER,
            observacao: DataTypes.STRING,
            valor: DataTypes.DOUBLE(10,4),
        },{
            sequelize,
        });

        super.tableName = 'ordem_venda';
    }

    static associate(models) {
        this.belongsTo(models.Produto, { 
            foreignKey: 'produto_id',
             as: 'produtos' 
        });
        this.belongsTo(models.Funcionario, { 
            foreignKey: 'funcionario_id',
             as: 'funcionarios' 
        });
        this.belongsTo(models.Evento, { 
            foreignKey: 'evento_id',
             as: 'eventos' 
        });
    }
}

module.exports = OrdemVenda;