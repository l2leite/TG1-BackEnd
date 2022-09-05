const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class HistoricoConta extends Model {
    static init(sequelize){
        super.init({
            operacao: DataTypes.STRING,
            operacao_id: DataTypes.INTEGER,
            valor: DataTypes.DOUBLE(7,2),
            saldo_inicial: DataTypes.DOUBLE(7,2),
            saldo_final: DataTypes.DOUBLE(7,2)
        },{
            sequelize,
        });

        super.tableName = 'historico_conta';
    }

    static associate(models) {
        this.belongsTo(models.Cliente, { 
            foreignKey: 'cliente_id',
             as: 'clientes' 
        });
    }
}

module.exports = HistoricoConta;