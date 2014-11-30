/**
 *
 * manage.js
 *
 * @description
 * @author Fantasy <fantasyshao@icloud.com>
 * @create 2014-11-30
 * @update 2014-11-30
 */

var Manage = function () {};

$.extend(Manage.prototype, {

  init: function () {

    this.bindEvents();

  },

  bindEvents: function () {
    $('.sidebar li').on('click', function (e) {
      e.stopPropagation();
      $(this).addClass('active').siblings().removeClass('active');
    });
  }

});

var manage = new Manage();

$(document).ready(function () {
  manage.init();
});
