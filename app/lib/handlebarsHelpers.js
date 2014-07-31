var lang = require('../i18n/all.js')

/**
 * We inject the Handlebars instance, because this module doesn't know where
 * the actual Handlebars instance will come from.
 */
module.exports = function(Handlebars) {
  return {
    copyright: function(year) {
      return new Handlebars.SafeString("&copy;" + year);
    },
    localize: function(term) {
      var language = 'en';
      var bundle = lang[language];
      return term in bundle ? bundle[term] : term;
    }
  };
};
