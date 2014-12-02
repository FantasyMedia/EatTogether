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
var manage = require('./controllers/manage');

module.exports = function (app) {

  app.use(function(req, res, next) {
    res.set({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    });

    next();
  });

  app.get('/', site.index);

  // Manage pages
  app.get('/manage', manage.index);

  // Shop
  app.get('/addShop', manage.addShop);

  // Food
  //
};