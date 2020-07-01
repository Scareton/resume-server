let mongoose = require('mongoose');

let LinkSchema = new mongoose.Schema({
  type: {
    $type: String,
    required: true  
  },
  href: {
    $type: String,
    required: true
  },
  icon: {
    $type: String,
  },
  title: {
    $type: String,
    required: true
  },
  subtitle: {
    $type: String,
  },
  append: {
    $type: String,
  }
}, {typeKey: "$type"});

let Link = mongoose.model('Link', LinkSchema);

module.exports = Link;