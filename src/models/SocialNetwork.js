const { Model, DataTypes } =  require('sequelize');
const User = require('./User');

class SocialNetwork extends Model {

    static init(sequelize){
        super.init({
            username: DataTypes.STRING,
            socialnetwork: DataTypes.STRING,
        }, {
            sequelize: sequelize,
            tableName: 'socialnetworks',
            paranoid: true,
        })
    }

    static associate(models){
        this.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    }
}

module.exports = SocialNetwork;