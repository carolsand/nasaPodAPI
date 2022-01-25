import express from "express";

const app = express();

app.listen(3000, () => console.log("Example app listening on port 3000!"));

import "dotenv/config";

app.get("/", (req, res) => {
  return res.send("Recieved a GET HTTP method");
});

app.post("/", (req, res) => {
  return res.send("Recieved a POST HTTP method");
});

app.put("/", (req, res) => {
  return res.send("Recieved a PUT HTTP method");
});

app.delete("/", (req, res) => {
  return res.send("Recieved a DELETE HTTP method");
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

/* ---testing --  */
console.log(" NASA API ");
console.log(process.env.API_KEY);
