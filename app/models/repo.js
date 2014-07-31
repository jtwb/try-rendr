var Base = require('./base');

module.exports = Base.extend({
  url: '/repos/:owner/:name',
  api: 'github',
  idAttribute: 'name'
});
module.exports.id = 'Repo';
