const db = require("../models");

// Defining methods for the userController
module.exports = {
  find: function(req, res) {
    console.log("Message Controller Get");
    db.Message
      .find()
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("Message Controller Post");
    console.log(req.body);
    db.Message
      .create(req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("Message Controller Update");
    console.log(req.body);
    db.Message
      .findOneAndUpdate({ _id: req.body.id }, req.body)
      .then(_data => res.json(_data))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("Message Controller Remove");
    console.log(req.body);
    db.Message
      .findById({ _id: req.body.id })
      .then(_data => _data.remove())
      .then(_datal => res.json(_data))
      .catch(err => res.status(422).json(err));
  }

};
