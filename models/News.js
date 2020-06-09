const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  category: String,
  publisher: String,
  amount: Number,
  publishedNews: [{
    
  }]
});

module.exports = mongoose.model("News", newsSchema);
