module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tasks', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      task_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('tasks');
  },
};
