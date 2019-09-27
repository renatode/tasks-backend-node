import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
    super.init(
      {
        task_name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Task;
