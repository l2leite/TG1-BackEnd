const { Model, DataTypes, SequelizeScopeError } = require('sequelize');

class Cliente extends Model {
    static init(sequelize){
        super.init({
            status: DataTypes.STRING,
            saldo: DataTypes.DOUBLE(7,2),
        },{
            sequelize,
        });

        super.tableName = 'cliente';
    }

    static associate(models) {
        this.belongsTo(models.Pessoa, { 
            foreignKey: 'pessoa_id',
             as: 'pessoas' 
            });
    }
}

module.exports = Cliente;