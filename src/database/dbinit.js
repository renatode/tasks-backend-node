import Squelize from 'sequelize';
import databaseConfig from '../config/database';

import Task from '../app/models/Task';

const models = [Task];

class Database {
  constructor() {
    this.init();
  }

  init() {
    console.log("sdfds");

    this.connection = new Squelize(databaseConfig);

    this.connection
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
