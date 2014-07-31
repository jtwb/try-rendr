var Wishlist = require('../models/wishlist')
  , Base = require('./base');

module.exports = Base.extend({
  model: Wishlist,
  url: '/wishlists-sample.json',
  jsonKey: 'wishlists'
});
module.exports.id = 'Wishlists';
