import { sequelize } from "../database";

const { Model, DataTypes } = require('sequelize');

class Pod extends Model {}
Pod.init({
  id: {
      type: DataTypes.STRING,
      primaryKey: true,
  },
  podname: DataTypes.STRING,
  url: DataTypes.STRING,
  media_type: DataTypes.STRING,
  explanation: DataTypes.STRING,
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
