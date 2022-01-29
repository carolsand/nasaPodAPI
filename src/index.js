import express from "express";

const app = express();

/* ----------- Imports ------------- */
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";
import models from "./models";
import router from "./routes";

/* --- Middleware ----- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.context = {
    models,
    me: models.users[1],
  };
  next();
});

const port = process.env.PORT || 8080;

console.log(`port is ${port}`);

app.listen(port, () =>
  console.log(`NASA Pod API app listening on port ${port}!`)
);

app.use('/', router);

/* ------- Data Section -----------  */

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

