const { Model, DataTypes, SequelizeScopeError } = require('sequelize');
const Fornecedor = require('./Fornecedor');

class Compra extends Model {
    static init(sequelize){
        super.init({
            nota_fiscal: DataTypes.INTEGER,
            valor_total: DataTypes.DOUBLE(10,4),
            observacao: DataTypes.STRING,
        },{
            sequelize,
        });

        super.tableName = 'compra';
    }

    static associate(models) {
        this.belongsTo(models.Funcionario, { 
            foreignKey: 'funcionario_id',
             as: 'funcionarios' 
        });
        this.belongsTo(models.Fornecedor, { 
            foreignKey: 'fornecedor_id',
             as: 'fornecedores' 
        });
    }
}

module.exports = Compra;