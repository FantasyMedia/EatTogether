/**
 *
 * food.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-01
 * @update 2014-12-04
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FoodSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  shopId: { type: Number }
});

mongoose.model('Food', FoodSchema);
