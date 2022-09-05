const { Model, DataTypes, SequelizeScopeError, Sequelize } = require('sequelize');

class Funcao extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            departamento: DataTypes.STRING,
            permissoes: DataTypes.STRING
        },{
            sequelize
        });

        super.tableName = 'funcao';
    }

    static associate(models) {
        this.hasOne(models.Funcionario, { 
            foreignKey: 'funcao_id', 
            as: 'funcionarios' 
        });
    }
}

module.exports = Funcao;