var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'wishlists',
  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.models.forEach(function(model) {
      var count = model.count_all_active_items;
      model.count_inflected_label =
        count > 1 ? 'items' : 'item';
    });
    return data;
  }
});
module.exports.id = 'wishlists/index';
