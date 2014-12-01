/**
 *
 * user.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-01
 * @update 2014-12-01
 */

var models = require('../models');
var User = models.User;

exports.getUserByQuery = function (name, callback) {

  User.find({ name: name }, callback);

};

exports.getUserById = function (id, callback) {

  User.find({ _id: id }, callback);

};

exports.newAndSave = function (name, displayName, password, tel) {

  var user = new User();

  user.name = name;
  user.displayName = displayName;
  user.password = password;
  user.tel = tel;

  user.save(callback);

};
