(function() {

  angular
    .module('feature.tags')
    .factory('FeatureTagsService', FeatureTagsService)

  FeatureTagsService.$inject = ['feature_tags'];

  function FeatureTagsService(feature_tags) {
    var tags = Object.assign({ }, feature_tags);

    return function(key, whenTrue, whenFalse) {
      if (arguments.length === 1) {
        return tags[key];
      } else {
        return (tags[key]) ? whenTrue : whenFalse;
      }
    }
  }

})();
