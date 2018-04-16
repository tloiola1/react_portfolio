const db = require("../models");

// Defining methods for the userController
module.exports = {
  find: function(req, res) {
    console.log("Admin Controller Get");
    db.Admin
      .find()
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Admin Controller Post");
    console.log(req.body);
    db.Admin
      .create(req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("Admin Controller Update");
    console.log(req.body);
    db.Admin
      .findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("Admin Controller Remove");
    console.log(req.body);
    db.Admin
      .findById({ _id: req.body.id })
      .then(_data => _data.remove())
      .then(_datal => res.json(_data))
      .catch(err => res.status(422).json(err));
  }
};
