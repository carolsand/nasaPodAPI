import { sequelize } from "../database";

const { Model, DataTypes } = require('sequelize');

class Rating extends Model {}
Rating.init({
  id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
  },
  user_id: DataTypes.STRING,
  pod_id: DataTypes.STRING,
    stars: DataTypes.INTEGER,
}, { sequelize, modelName: 'rating' });

(async () => {
  await sequelize.sync();
    const rating = await Rating.create({
        user_id: 'asdf',
        pod_id: '2022-01-29',
        stars: 3,
    });
    console.log(rating.toJSON());
})();
