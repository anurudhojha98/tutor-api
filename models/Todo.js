var mongoose = require("mongoose");
var todoSchema = mongoose.Schema({
  item_name: String,
  description: String
});

module.exports = mongoose.model("Todo", todoSchema);
