'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('socialnetworks', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      socialnetwork: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      },
      updated_at: {
        field: 'updated_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('socialnetworks');
  }
};
