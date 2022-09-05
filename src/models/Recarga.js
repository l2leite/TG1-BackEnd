const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class Recarga extends Model {
    static init(sequelize){
        super.init({
            forma_pagamento: DataTypes.STRING,
            valor: DataTypes.DOUBLE(8,2),
            autorizacao: DataTypes.STRING
        },{
            sequelize,
        });
        super.tableName = 'recarga';
    }

    static associate(models) {
        this.belongsTo(models.Funcionario, { 
            foreignKey: 'funcionario_id',
             as: 'funcionarios' 
        });
        this.belongsTo(models.Cliente, { 
            foreignKey: 'cliente_id',
             as: 'clientes' 
        });
    }
}

module.exports = Recarga;