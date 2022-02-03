const express = require("express");
const router = express.Router();

import getPod from "./image_getter";
import { sequelize } from "./database";

/* --------- CRUD Users ------- */
router.get("/users", (req, res) => {
  return sequelize.models.user
    .findAll()
    .then((users) => res.send(users))
    .catch((err) => {
      console.log("There was an error querying users", JSON.stringify(err));
      return res.send(err);
    });
});

router.post("/users", (req, res) => {
  const { firstName, lastName } = req.body;
  return sequelize.models.user
    .create({ firstName, lastName })
    .then((user) => res.send(user))
    .catch((err) => {
      console.log(
        "***There was an error creating a users",
        JSON.stringify(contact)
      );
      return res.status(400).send(err);
    });
});

router.delete("/user/:id", (req, res) => {
  const id = req.params.id;
  return sequelize.models.user
    .findById(id)
    .then((user) => user.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log("***Error deleting users", JSON.stringify(err));
      res.status(400).send(err);
    });
});

router.put("/user/:id", (req, res) => {
  const id = req.params.id;
  return sequelize.models.user.findById(id).then((user) => {
    const { firstName, lastName } = req.body;
    return user
      .update({ firstName, lastName })
      .then(() => res.send(user))
      .catch((err) => {
        console.log("***Error updating user", JSON.stringify(err));
        res.status(400).send(err);
      });
  });
});

/* --------- Read pictures ------- */
router.get("/pictures", async (req, res) => {
  // TODO: Return all pictures, with URL and ID
  const pictures = await sequelize.models.pictures;
  return sequelize.models.pictures
    .findAll()
    .then((pictures) => res.send(pictures))
    .catch((err) => {
      console.log("There was an error querying pictures", JSON.stringify(err));
      return res.send(err);
    });
});

router.get("/picture/:pictureId", (req, res) => {
  // TODO: Return all pictures, with URL and ID
  getPod(req.params.pictureId)
    .then((picture) => {
      res.send(picture);
    })
    .catch(console.log);
});

router.get("/picture/:pictureId", async (req, res) => {
  const picture = await sequelize.models.pictureId;
  return sequelize.models.pictureId
    .findByPk(pictureId)
    .then((pictureId) => res.send(pictureId))
    .catch((err) => {
      console.log("There was an error querying pods", JSON.stringify(err));
      return res.send(err);
    });
});

router.post("/pictures", (req, res) => {
  const { id, stars } = req.body;
  return sequelize.models.picture
    .create({ id, stars })
    .then((picture) => res.send(pod))
    .catch((err) => {
      console.log(
        "***There was an error creating a rating",
        JSON.stringify(contact)
      );
      return res.status(400).send(err);
    });
});

router.delete("/picture/pictureId", (req, res) => {
  const id = req.params.pictureId;
  return sequelize.models.pod
    .findByPk(id)
    .then((id) => id.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log("***Error deleting pod", JSON.stringify(err));
      res.status(400).send(err);
    });
});

router.put("/picture/pictureId", (req, res) => {
  const id = req.params.pictureId;
  return sequelize.models.pictures.findByPk(id).then((id) => {
    // const { id, stars } = req.body;
    return rating
      .update({ id })
      .then(() => res.send(pod))
      .catch((err) => {
        console.log("***Error updating pod", JSON.stringify(err));
        res.status(400).send(err);
      });
  });
});

/* --------- CRUD Ratings ------- */
router.post("/user/:userId/picture/:pictureId/rating", async (req, res) => {
  // TODO: create a rating by the given user for the given picture.
  const { userId, pictureId } = req.params;
  const user = await sequelize.models.user.findById(userId);
  if (!user) {
    console.log("No user with id of", userId);
    return res.send({});
  }
  const pod = await getPod(pictureId);
  if (!pod) {
    console.log("No pod with id of", pictureId);
    return res.send({});
  }

  const stars = req.body.stars;
  if (!stars) {
    console.log("No stars in request body");
    return res.send({});
  }

  const [rating, created] = await sequelize.models.rating.findOrCreate({
    where: { user_id: userId, pod_id: podId },
    defaults: {
      user_id: userId,
      pod_id: podId,
      stars: stars,
    },
  });

  // If we found an outdated record, update it
  if (!created && rating.stars !== stars) {
    await sequelize.models.rating.update(
      {
        stars: stars,
      },
      {
        where: { id: rating.id },
      }
    );
  }
  return res.send(rating);
});

router.get("/user/:userId/picture/:pictureId/rating", async (req, res) => {
  // TODO: read the rating by the given user for the given picture.
  // const { userId, rating } = req.params;
  const user = await sequelize.models.user.findById(userId);
  if (!user) {
    console.log("No user with id of", userId);
    return res.send({});
  }
  const rating = await getPod(rating);
  if (!rating) {
    console.log("No rating with id of", rating);
    return res.send({});
  }
});

router.put("/user/:userId/picture/:pictureId/rating", async (req, res) => {
  // TODO: update the rating by the given user for the given picture.
  const user = await sequelize.models.user.findById(userId);
  if (!user) {
    console.log("No user with id of", userId);
    return res.send({});
  }
  rating = await getPod(req.params.ratingId);
  if (!rating) {
    console.log("No rating with id of", rating);
    return res.send({});
  }
});

router.delete("/user/:userId/picture/:pictureId/rating", async (req, res) => {
  // TODO: delete the rating by the given user for the given picture.
  const id = await sequelize.models.user.findById(ratingId);
  return sequelize.models.rating
    .findById(id)
    .then((rating) => rating.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log("***Error deleting rating", JSON.stringify(err));
      res.status(400).send(err);
    });
});

router.get("/user/:userId/ratings", async (req, res) => {
  // TODO: Get all the user's ratings.
  // Returns the picture name, id and rating for each rating
  const { userId } = req.params;
  let results = await sequelize.models.rating.findAll({
    where: { user_id: userId },
  });
  console.log(results);

  // If the result is empty, return an empty list instead
  if (results && Object.keys(results).length === 0) {
    return res.send([]);
  }
  return res.send(results);
});

// router.get('/api/ratings', (req, res) => {
//   return sequelize.models.rating.findAll()
//     .then((ratings) => res.send(ratings))
//     .catch((err) => {
//       console.log('There was an error querying users', JSON.stringify(err))
//       return res.send(err)
//     });
// });

// router.post('/api/ratings', (req, res) => {
//   const { id, stars } = req.body
//   return sequelize.models.rating.create({ id, stars })
//     .then((rating) => res.send(rating))
//     .catch((err) => {
//       console.log('***There was an error creating a rating', JSON.stringify(contact))
//       return res.status(400).send(err)
//     })
// });

// router.delete('/api/rating/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   return sequelize.models.rating.findById(id)
//     .then((rating) => rating.destroy({ force: true }))
//     .then(() => res.send({ id }))
//     .catch((err) => {
//       console.log('***Error deleting rating', JSON.stringify(err))
//       res.status(400).send(err)
//     })
// });

// router.put('/api/rating/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   return sequelize.models.rating.findById(id)
//   .then((rating) => {
//     const { id, stars } = req.body
//     return rating.update({ id })
//       .then(() => res.send(rating))
//       .catch((err) => {
//         console.log('***Error updating rating', JSON.stringify(err))
//         res.status(400).send(err)
//       })
//   });
// });

module.exports = router;
