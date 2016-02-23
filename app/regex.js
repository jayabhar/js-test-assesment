exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter : function(str) {
    return (/([A-Za-z])\1/).test(str);
  },

  endsWithVowel : function(str) {
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {
      var match = (/\d{3}/).exec(str);
    return match ? match[0] : false;
  },
  isUSD : function(str) {

  }
};
