var ReactView = require('../react');
var Repo = require('../../components/Repo');

module.exports = ReactView.extend({
  className: 'repos_show_view',

  getTemplateData: function() {
    var data = BaseView.prototype.getTemplateData.call(this);
    data.build = this.options.build.toJSON();
    return data;
  }
});
module.exports.id = 'repos/show';
