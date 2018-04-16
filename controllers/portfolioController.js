const db = require("../models");

// Defining methods for the userController
module.exports = {
  find: function(req, res) {
    console.log("Portfolio Controller Get");
    db.Portfolio
      .find()
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Portfolio Controller Post");
    console.log(req.body);
    db.Portfolio
      .create(req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("Portfolio Controller Update");
    console.log(req.body);
    db.Portfolio
      .findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("Portfolio Controller Remove");
    console.log(req.body);
    db.Portfolio
      .findById({ _id: req.body.id })
      .then(_data => _data.remove())
      .then(_datal => res.json(_data))
      .catch(err => res.status(422).json(err));
  }

};
