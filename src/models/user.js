const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  id: DataTypes.STRING,
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
