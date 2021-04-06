const { Model, DataTypes } =  require('sequelize');
const SocialNetwork = require('./SocialNetwork');

class User extends Model {

    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            description: DataTypes.STRING,
            birth: DataTypes.DATE,
            password: DataTypes.STRING,
            username: DataTypes.STRING,
        }, {
            sequelize: sequelize,
            tableName: 'users',
            paranoid: true,
        })
    }
}
User.associate = (models) => {
    User.hasMany(models.SocialNetwork, {
      foreignKey: {
        name: 'user_id',
      },
      as: 'socialnetworks'
    });
  };

module.exports = User;