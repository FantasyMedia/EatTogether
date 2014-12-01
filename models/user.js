/**
 *
 * user.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-11-29
 * @update 2014-11-29
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String },
  displayName: { type: String },
  password: { type: String },
  tel: { type: Number }
});

UserSchema.index({
  name: 1,
  unique: true
});

mongoose.model('User', UserSchema);
