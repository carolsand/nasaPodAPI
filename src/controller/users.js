const User = require("../models/user");

module.exports = {
  index,
};

function index(req, res) {
  User.find({}, function (err, users) {
    res.render("index", {
      title: "NASA Pod API",
      users,
      user: req.user,
    });
  });
}
