const mongoose = require("mongoose");

mongoose.connect(
  'mongodb://localhost:27017/nasapods',
  {
    useNewUrlParser: true,
    useCreateIndex: true
  });

const db = mongoose.connection;

db.on('connected', function(){
  console.log(`Connectd to MongoDB at ${db.host}:${db.port}`);
});