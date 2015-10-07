var mongoose = require('mongoose');

var GirlSchema = new mongoose.Schema({
  name: String,
  canonical: String,
  country: String,
  wiki: String
});

module.exports = mongoose.model('Girl', GirlSchema);
