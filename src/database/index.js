import Sequelize from 'sequelize';

// Config
import databaseConfig from '../config/database';

// Models
import User from '../app/models/User';
import Todo from '../app/models/Todo';

const models = [User, Todo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
    models.map((model) => model.associate && model.associate(this.connection.models));
  }
}
export default new Database();
