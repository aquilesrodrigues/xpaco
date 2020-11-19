'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('Publicacoes', {
    publicacao_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'user_id' },
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    tags: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    check: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('Publicacoes')
};