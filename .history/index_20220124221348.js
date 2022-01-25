import express from "express";

const app = express();

/* --- Middleware ----- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.me = users[1];
  next();
});

/* ----------- Imports ------------- */
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";

/* ------- Data Section -----------  */

let users = {
  1: {
    id: "1",
    username: "Robin X",
  },
  2: {
    id: "2",
    username: "Carol S",
  },
};

let messages = {
  1: {
    id: "1",
    text: "Good Day",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};

/* --------- CRUD Routes ------- */
app.get("/users", (req, res) => {
  return res.send(Object.values(users));
});

app.get("/users/:userId", (req, res) => {
  return res.send(users[req.params.userId]);
});

app.get("/messages", (req, res) => {
  return res.send(Object.values(messages));
});

app.get("/users/:messageId", (req, res) => {
  return res.send(messages[req.params.messageId]);
});

app.get("/session", (req, res) => {
  return res.send(users[req.me.id]);
});

app.post("/users", (req, res) => {
  return res.send("POST HTTP method on user resource");
});

app.post("/messages", (req, res) => {
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

app.put("/users/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete("/users/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

app.delete("/messages/:messageId", (req, res) => {
  const { [req.params.messageId]: message, ...otherMessages } = messages;

  messages = otherMessages;

  return res.send(message);
});

app.listen(process.env.PORT, () =>
  console.log(`NASA API app listening on port ${process.env.PORT}!`)
);

/* ---testing --  */
console.log(" NASA API ");
// console.log(process.env.API_KEY);
