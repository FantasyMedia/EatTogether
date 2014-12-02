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

  // Get shop and food list
  //async.parallel([
  //
  //], function () {
  //
  //});

  res.render('manage/index', { title: '管理后台' });

};

exports.addShop = function (req, res, next) {

  console.log(req.query);

  var name = req.query.name;
  var address = req.query.address;
  var tel = req.query.tel;

  Shop.newAndSave(name, address, tel, function () {
    res.send({
      'success': true
    });
  });

};