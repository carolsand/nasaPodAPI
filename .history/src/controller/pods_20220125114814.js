const { get } = require("express/lib/response");
const pod = require("../models/pod");

module.exports = {
  create,
  read: showOne,
  showAll,
  show,
  update,
  delete: deletePod,
};

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  var room = new Room(req.body);
  room.user = req.user._id;
  console.log(req.body);
  room.save(function (err) {
    if (err) return res.redirect("/pods/new");
    // res.redirect('/movies');
    res.redirect(`/pods/${room._id}`);
  });
}

function update(req, res) {
  if (req.user) {
    Room.findByIdAndUpdate(req.params.id, req.body, function (err) {
      if (err);
      res.redirect(`/rooms/show`);
    });
  } else {
    res.redirect(`/rooms/${req.params.id}`);
  }
}

function show(req, res) {
  Room.findById(req.params.id, function (err, room) {
    console.log(room);
    res.render("rooms/new", {
      title: `InventoryU`,
      room,
      user: req.user,
    });
  });
}

function index(req, res) {
  console.log("hello");
  Room.find({ user: req.user._id }, function (err, pods) {
    Item.find({}, function (err, item) {
      console.log(pods);
      res.render("pods/index", {
        title: "NASA Pods",
        rooms,
        item,
        user: req.user,
      });
    });
  });
}

function deletePod(req, res) {
  Room.deleteOne({ _id: req.params.id }, function (err) {
    res.redirect("show");
  });
}

function showAll(req, res) {
  Room.find({ user: req.user._id }, function (err, pods) {
    //    Item.find({room: req.params.id}, function(err, item) {
    console.log(pods);
    res.render("pods/show", {
      title: `NASA Pods}`,
      rooms,
      user: req.user,
    });
  });
  //   });
}
