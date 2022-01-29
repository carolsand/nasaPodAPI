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
  let count = 0;
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  var pod = new Pod(req.body);
  pod.user = req.user._id;
  const stars = +count;
  console.log(req.body, stars);
  pod.save(function (err) {
    if (err) return res.redirect("/pods/new");
    // res.redirect('/movies');
    res.redirect(`/pods/${pod._id}`);
  });
}

function update(req, res) {
  if (req.user) {
    Pod.findByIdAndUpdate(req.params.id, req.body, function (err) {
      if (err);
      res.redirect(`/pods/show`);
    });
  } else {
    res.redirect(`/pods/${req.params.id}`);
  }
}

function show(req, res) {
  Pod.findById(req.params.id, function (err, pod) {
    console.log(pod);
    res.render("pods/new", {
      title: `NASA Pods`,
      pod,
      user: req.user,
    });
  });
}

function index(req, res) {
  console.log("hello");
  Pod.find({ user: req.user._id }, function (err, pods) {
    Item.find({}, function (err, item) {
      console.log(pods);
      res.render("pods/index", {
        title: "NASA Pods",
        pods,
        user: req.user,
      });
    });
  });
}

function deletePod(req, res) {
  Pod.deleteOne({ _id: req.params.id }, function (err) {
    res.redirect("show");
  });
}

function showAll(req, res) {
  Pod.find({ user: req.user._id }, function (err, pods) {
    //    Item.find({pod: req.params.id}, function(err, item) {
    console.log(pods);
    res.render("pods/show", {
      title: `NASA Pods}`,
      pods,
      user: req.user,
    });
  });
  //   });
}
