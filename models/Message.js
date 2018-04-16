const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const MessageSchema = new Schema({

  _id:      { type: Schema.ObjectId, auto: true },
  name:     { type: String, require: true },
  email:    { type: String, require: true },
  phone:    { type: String, require: true },
  message:  { type: String, require: true },
  date:     { type: Date, default: Date.now }
});

// This creates our model from the above schema, using mongoose's model method
const Message = mongoose.model("Message", MessageSchema);

// Export the Property model
module.exports = Message;
