const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String },
  age: Number,
  hobbies: [String],
});

module.exports = mongoose.model("User", userSchema);
