const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class Evento extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            responsavel: DataTypes.STRING,
            data: DataTypes.DATEONLY,
            publico: DataTypes.INTEGER,
            pagantes: DataTypes.INTEGER,
            faturamento: DataTypes.DOUBLE(10,2),
            observacao: DataTypes.STRING
        },{
            sequelize,
        });

        super.tableName = 'evento';
    }
/*
    static associate(models) {
        this.hasOne(models.Cliente, { 
            foreignKey: 'pessoa_id', 
            as: 'clientes' 
        })
    }*/
}

module.exports = Evento;