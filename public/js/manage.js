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
    // Change active menu on click
    $('.sidebar li').on('click', function (e) {
      e.stopPropagation();
      $(this).addClass('active').siblings().removeClass('active');
    });

    // Add shop
    $('#doAddShop').on('click', function (e) {
      e.stopPropagation();
      // TODO: Add validation
      $.ajax({
        url: '/addShop',
        dataType: 'json',
        data: {
          name: $('#shopName').val(),
          tel: $('#shopTel').val(),
          address: $('#shopAddress').val()
        },
        success: function (res) {
          if (res.success === true) {
            alert('添加成功!');
          }
        }
      });

      return false;
    });

    // Add food
    $('#doAddFood').on('click', function (e) {
      e.stopPropagation();
      
    });

  }

});

var manage = new Manage();

$(document).ready(function () {
  manage.init();
});
