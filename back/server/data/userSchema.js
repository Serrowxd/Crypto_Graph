const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  username: String,
  summary: String,

  created: {
    type: Date,
    default: Date.now,
  },
});

// pre-save

userSchema.pre('save', function(next) {
  console.log('pre save hook');

  next();
});

module.exports = mongoose.model('User', userSchema);
