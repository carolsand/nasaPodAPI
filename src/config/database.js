const mongoose = require("mongoose");
const process = require('process');

mongoose.connect(
  process.env.DATABASE_URL || 'mongodb://localhost:27017/nasapods',
  {
    useNewUrlParser: true,
    useCreateIndex: true
  });

const db = mongoose.connection;

db.on('connected', function(){
  console.log(`Connectd to MongoDB at ${db.host}:${db.port}`);
});
