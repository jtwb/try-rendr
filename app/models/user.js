var Base = require('./base');

module.exports = Base.extend({
  url: '/users/:login',
  api: 'github',
  idAttribute: 'login'
});
module.exports.id = 'User';
