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

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
  user: {
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },

  asDescript: {
    type: String,
    default: function () {
      return Number() >= 0 || Number() <= 999999999 || /[[a-zA-Z].*/;
    },
  },
  date: {
    type: Date,
    Date: function () {
      return new Date(new Date()).setFullYear(new Date().getFullYear() + 1);
    },
  },
});

module.exports = mongoose.model("Items", itemsSchema);
