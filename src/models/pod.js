
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

// let users = {
//   1: {
//     id: "1",
//     username: "Robin X",
//   },
//   2: {
//     id: "2",
//     username: "Carol S",
//   },
// };

// let messages = {
//   1: {
//     id: "1",
//     text: "Good Day",
//     userId: "1",
//   },
//   2: {
//     id: "2",
//     text: "By World",
//     userId: "2",
//   },
// };