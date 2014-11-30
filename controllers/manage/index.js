/**
 *
 * index.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-11-29
 * @update 2014-11-29
 */

exports.index = function (req, res, next) {

  res.render('manage/index', { title: '管理后台' });

};