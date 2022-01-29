var express = require('express');
var router = express.Router();


/* --------- CRUD Users ------- */
router.post("/users", (req, res) => {
  return res.send("POST HTTP method on user resource");
});

router.get("/users", (req, res) => {
  return res.send(Object.values(users));
});

router.get("/user/:userId", (req, res) => {
  return res.send(users[req.params.userId]);
});

router.put("/user/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

router.delete("/user/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});


/* --------- Read pictures ------- */
router.get("/pictures", (req, res) => {
  // TODO: Return all pictures, with URL and ID
});

router.get("/picture/:pictureId", (req, res) => {
  // TODO: Return all pictures, with URL and ID
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

/* ---------- Other routes -----------*/

router.get("/session", (req, res) => {
  return res.send(users[req.me.id]);
});

module.exports = router;
