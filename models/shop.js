/**
 *
 * shop.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-01
 * @update 2014-12-04
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var ShopSchema = new Schema({
  shopId: { type: Number },
  name: { type: String },
  address: { type: String },
  tel: { type: Number }
});

ShopSchema.plugin(autoIncrement.plugin, {
  model: 'Shop',
  field: 'shopId',
  startAt: 1
});

mongoose.model('Shop', ShopSchema);
