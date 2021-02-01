require('dotenv').config();
const {COLLECTION} = process.env;
const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  url_code: {
    type: String,
    required: true
  },
  long_url: {
    type: String,
    required: true
  },
  short_url: {
    type: String,
    required: true
  },
  date: { type: String, default: Date.now },
  click: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model(COLLECTION, urlSchema);
