
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Pod extends Model {}
Pod.init({
  id: DataType.STRING,
  podname: DataType.STRING
  rating: DataType.STRING,
}, { sequelize, modelName: 'pod' });

(async () => {
  await sequelize.sync();
  const pod = await Pod.create({
    podname: '',
    rating: '',
    id: ''
  });
  console.log(pod.toJSON());
})();
