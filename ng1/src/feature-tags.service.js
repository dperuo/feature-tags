(() => {

  angular
    .module('feature.tags')
    .factory('FeatureTagsService', FeatureTagsService)

  FeatureTagsService.$inject = ['feature_tags'];

  function FeatureTagsService(feature_tags) {
    const tags = Object.assign({ }, feature_tags);

    function isObject(value) {
      return value !== null && typeof value === 'object';
    }

    function isString(value) {
      return value !== null && typeof value === 'string';
    }

    return function(item, whenTrue, whenFalse) {
      switch (arguments.length) {
        case 0:
          return tags;
        case 1:
          if (isString(item)) {
            return tags[item];
          } else if (isObject(item)) {
            tags[item.key] = item.state;
            return item;
          } else {
            throw new TypeError('The first argument of FeatureTagsService() must be a string or an object.');
          }
        break;
        default:
          return (tags[item]) ? whenTrue : whenFalse;
      }
    }
  }

})();
