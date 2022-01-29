var express = require('express');
var router = express.Router();


/* --------- CRUD Users ------- */
router.post("/users", (req, res) => {
  return res.send("POST HTTP method on user resource");
});

router.get("/users", (req, res) => {
  return res.send(Object.values(users));
});

router.get("/users/:userId", (req, res) => {
  return res.send(users[req.params.userId]);
});

router.put("/users/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

router.delete("/users/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});


/* --------- CRUD Messages ------- */
router.post("/messages", (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: req.me.id,
  };

  const date = Date.parse(req.body.date);
  const count = Number(req.body.count);

  messages[id] = message;
  return res.send(message);
});

router.get("/users/:messageId", (req, res) => {
  return res.send(messages[req.params.messageId]);
});

router.get("/messages", (req, res) => {
  return res.send(Object.values(messages));
});

router.delete("/messages/:messageId", (req, res) => {
  const { [req.params.messageId]: message, ...otherMessages } = messages;

  messages = otherMessages;

  return res.send(message);
});

/* ---------- Other routes -----------*/

router.get("/session", (req, res) => {
  return res.send(users[req.me.id]);
});

module.exports = router;
