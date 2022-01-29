import express from "express";

const app = express();
const bodyParser = require('body-parser');
const db require('./models');

/* ----------- Imports ------------- */
import "dotenv/config";
import { v4 as uuidv4 } from "uuid";
import models from "./models";
import router from "./routes";
import getPod from "./image_getter";

/* --- Middleware ----- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

app.use((req, res, next) => {
  req.context = {
    models,
    // me: models.users[1],  // TODO: Look up the user
  };
  next();
});

const port = process.env.PORT || 8080;

console.log(`port is ${port}`);

app.listen(port, () =>
  console.log(`NASA Pod API app listening on port ${port}!`)
);

app.use('/', router);


app.get('/testGetPod/:id?', (req, res) => {
    getPod(req.params.id).then(imageData => {
        res.send(imageData);
    });
});
