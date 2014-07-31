var Polyglot = require('node-polyglot');
var lang = require('../i18n/all.js');
var env = require('../config/environment.js');

var polyglotBundle = new Polyglot({
  locale: env.locale,
  phrases: lang[env.language]
});

/**
 * We inject the Handlebars instance, because this module doesn't know where
 * the actual Handlebars instance will come from.
 */
module.exports = function(Handlebars) {
  return {
    copyright: function(year) {
      return new Handlebars.SafeString("&copy;" + year);
    },
    t: polyglotBundle.t.bind(polyglotBundle)
  };
};
