const mongoose = require("mongoose");
const { schema } = mongoose;

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    //required: true,
  },
  email: {
    type: String,
    //required: true,
    //unique: true,
  },
  password: {
    type: String,
    //default: "General",
  },
  date: {
    type: Date,
    // default: Date.now(),
  },
});

module.exports = mongoose.model("user", UserSchema);
