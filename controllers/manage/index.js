/**
 *
 * index.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-11-29
 * @update 2014-11-29
 */

var async = require('async');

var Shop = require('../../service').Shop;
var Food = require('../../service').Food;

exports.index = function (req, res, next) {

  var shopList = [];
  var foodList = [];

  async.parallel([
    function (callback) {
      Shop.getAllShop(function (err, shops) {
        shopList = shops;
        callback(null, shopList);
      });
    },
    function (callback) {
      Food.getAllFood(function (err, foods) {
        foodList = foods;
        callback(null, foodList);
      });
    }
  ], function (err, results) {
    console.log(results);
    res.render('manage/index', {
      title: '管理后台',
      shops: results[0],
      foods: results[1]
    });
  });

};

exports.addShop = function (req, res, next) {

  var name = req.query.name;
  var address = req.query.address;
  var tel = req.query.tel;

  Shop.newAndSave(name, address, tel, function () {
    res.send({
      'success': true
    });
  });

};

exports.addFood = function (req, res, next) {

};
