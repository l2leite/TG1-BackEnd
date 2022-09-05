const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class Pessoa extends Model {
    static init(sequelize){
        super.init({
            cpf: DataTypes.STRING,
            name: DataTypes.STRING,
            data_nasc: DataTypes.DATEONLY,
            telefone: DataTypes.STRING,
            sexo: DataTypes.STRING,
            email: DataTypes.STRING,
        },{
            sequelize,
        });

        super.tableName = 'pessoa';
    }

    static associate(models) {
        this.hasOne(models.Cliente, { 
            foreignKey: 'pessoa_id', 
            as: 'clientes' 
        })
        this.hasOne(models.Funcionario, { 
            foreignKey: 'pessoa_id', 
            as: 'funcionarios' 
        })
    }
}

module.exports = Pessoa;