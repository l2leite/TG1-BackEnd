const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class Funcionario extends Model {
    static init(sequelize){
        super.init({
            login: DataTypes.STRING,
            senha: DataTypes.STRING,
            salario: DataTypes.DOUBLE(10,2),
            data_inicio: DataTypes.DATEONLY,
        },{
            sequelize,
        });

        super.tableName = 'Funcionario';
    }

    static associate(models) {
        this.belongsTo(models.Pessoa, { 
            foreignKey: 'pessoa_id',
             as: 'pessoas' 
        });
        this.belongsTo(models.Funcao, { 
            foreignKey: 'funcao_id',
             as: 'funcoes' 
        });
    }
}

module.exports = Funcionario;