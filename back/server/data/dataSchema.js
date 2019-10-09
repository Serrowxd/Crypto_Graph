const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  username: String,
  summary: String,

  created: {
    type: Date,
    default: Date.now,
  },
});

// pre-save

dataSchema.pre('save', function(next) {
  console.log('pre save hook');

  next();
});

module.exports = mongoose.model('User', dataSchema);
