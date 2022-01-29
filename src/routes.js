const express = require('express');
const router = express.Router();

import getPod from "./image_getter";
import { sequelize } from "./database";

/* --------- CRUD Users ------- */
// router.post("/users", (req, res) => {
//   return res.send("POST HTTP method on user resource");
// });

// router.get("/users", (req, res) => {
//   return res.send(Object.values(users));
// });

// router.get("/user/:userId", (req, res) => {
//   return res.send(users[req.params.userId]);
// });

// router.put("/user/:userId", (req, res) => {
//   return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
// });

// router.delete("/user/:userId", (req, res) => {
//   return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
// });

router.get('/users', (req, res) => {
  return sequelize.models.user.findAll()
    .then((users) => res.send(users))
    .catch((err) => {
      console.log('There was an error querying users', JSON.stringify(err))
      return res.send(err)
    });
});

router.post('/users', (req, res) => {
  const { firstName, lastName } = req.body
  return sequelize.models.user.create({ firstName, lastName })
    .then((user) => res.send(user))
    .catch((err) => {
      console.log('***There was an error creating a users', JSON.stringify(contact))
      return res.status(400).send(err)
    })
});

router.delete('/user/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return sequelize.models.user.findById(id)
    .then((user) => user.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting users', JSON.stringify(err))
      res.status(400).send(err)
    })
});

router.put('/user/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return sequelize.models.user.findById(id)
  .then((user) => {
    const { firstName, lastName } = req.body
    return user.update({ firstName, lastName })
      .then(() => res.send(user))
      .catch((err) => {
        console.log('***Error updating user', JSON.stringify(err))
        res.status(400).send(err)
      })
  })
});


/* --------- Read pictures ------- */
router.get("/pictures", (req, res) => {
  // TODO: Return all pictures, with URL and ID
});

router.get("/picture/:pictureId", (req, res) => {
  // TODO: Return all pictures, with URL and ID
    getPod(req.params.pictureId).then((pod) => {
        res.send(pod)
    }).catch(console.log);
});

router.get('/pods', (req, res) => {
  return sequelize.models.pod.findAll()
    .then((pods) => res.send(pods))
    .catch((err) => {
      console.log('There was an error querying pods', JSON.stringify(err))
      return res.send(err)
    });
});

router.post('/pods', (req, res) => {
  const { id, stars } = req.body
  return sequelize.models.pod.create({ id, stars })
    .then((pod) => res.send(pod))
    .catch((err) => {
      console.log('***There was an error creating a rating', JSON.stringify(contact))
      return res.status(400).send(err)
    })
});

router.delete('/pod/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return sequelize.models.pod.findById(id)
    .then((pod) => pod.destroy({ force: true }))
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log('***Error deleting pod', JSON.stringify(err))
      res.status(400).send(err)
    })
});

router.put('/pod/:id', (req, res) => {
  const id = parseInt(req.params.id)
  return sequelize.models.pod.findById(id)
  .then((pod) => {
    const { id, stars } = req.body
    return rating.update({ id })
      .then(() => res.send(pod))
      .catch((err) => {
        console.log('***Error updating pod', JSON.stringify(err))
        res.status(400).send(err)
      })
    });
  });

/* --------- CRUD Ratings ------- */
router.post("/user/:userId/picture/:pictureId/rating", (req, res) => {
  const id = uuidv4();
  // TODO: create a rating by the given user for the given picture.
});

router.get("/user/:userId/picture/:pictureId/rating", (req, res) => {
  // TODO: read the rating by the given user for the given picture.
});

router.put("/user/:userId/picture/:pictureId/rating", (req, res) => {
  // TODO: update the rating by the given user for the given picture.
});

router.delete("/user/:userId/picture/:pictureId/rating", (req, res) => {
  // TODO: delete the rating by the given user for the given picture.
});

router.get("/user/:userId/ratings", (req, res) => {
  // TODO: Get all the user's ratings.
  // Returns the picture name, id and rating for each rating
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
