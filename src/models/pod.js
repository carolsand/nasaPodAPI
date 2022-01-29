import { sequelize } from "../database";

const { Model, DataTypes } = require('sequelize');

class Pod extends Model {}
Pod.init({
  id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
  },
  podname: DataTypes.STRING,
  rating: DataTypes.STRING,
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
