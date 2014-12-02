/**
 *
 * shop.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-12-01
 * @update 2014-12-01
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ShopSchema = new Schema({
  name: { type: String },
  address: { type: String },
  tel: { type: Number }
});

mongoose.model('Shop', ShopSchema);
