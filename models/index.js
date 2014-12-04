/**
 *
 * index
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-11-28
 * @update 2014-12-04
 */

var mongoose = require('mongoose');
var config = require('../config');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.connect(config.db, function (err) {
  if (err) {
    console.error('connect to %s error', config.db, err.message);
    process.exit(1);
  }
});

autoIncrement.initialize(connection);

require('./user');
require('./shop');
require('./food');

exports.User = mongoose.model('User');
exports.Shop = mongoose.model('Shop');
exports.Food = mongoose.model('Food');
