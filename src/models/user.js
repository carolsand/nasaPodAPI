import { sequelize } from "../database";

const { Model, DataTypes } = require('sequelize');

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
  },
  email: DataTypes.STRING
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const user = await User.create({
    username: '',
    birthday: new Date()
  });
  console.log(user.toJSON());
})();
