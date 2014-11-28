/**
 *
 * site.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-11-28
 * @update 2014-11-28
 */

exports.index = function (req, res, next) {

  res.render('index', { title: '首页' });

};