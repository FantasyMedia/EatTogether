/**
 *
 * routes.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-11-28
 * @update 2014-11-28
 */

var site = require('./controllers/site');

module.exports = function (app) {

  app.get('/', site.index);

};