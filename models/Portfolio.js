const mongoose = require("mongoose");
// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const PortfolioSchema = new Schema({

      _id:        { type: Schema.ObjectId, auto: true },
      name:       { type: String },
      header:     { type: String },
      caption:    { type: String },
      techs:      { type: String },
      link:       { type: String },
      img:        { type: String },
      github:     { type: String }
});

// This creates our model from the above schema, using mongoose's model method
const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

// Export the Property model
module.exports = Portfolio;
