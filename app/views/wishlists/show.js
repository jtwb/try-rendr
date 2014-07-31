var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'wishlist-detail',
  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    console.log(data);
    return data;
  }
});
module.exports.id = 'wishlists/show';
