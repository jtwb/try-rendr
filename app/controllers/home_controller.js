module.exports = {
  index: function(params, callback) {
    this.app.set('title', 'My Wishlists');
    callback();
  }
};
