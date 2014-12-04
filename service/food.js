/**
 *
 * food.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-02
 * @update 2014-12-04
 */

var models = require('../models');
var Food = models.Food;

exports.getAllFood = function (callback) {

  Food.find(function (err, foods) {
    if (err) return callback(err);

    if (foods.length === 0) return callback(null, []);

    callback(null, foods);
  });

};

exports.newAndSave = function (name, price, shop_id, callback) {

  var food = new Food();

  food.name = name;
  food.price = price;
  food.shopId = shop_id;

  food.save(callback);

};
