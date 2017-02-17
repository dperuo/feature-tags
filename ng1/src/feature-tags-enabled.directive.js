(function() {

    angular
      .module('feature.tags')
      .directive('featureTagEnabled', featureTagEnabled);

    featureTagEnabled.$inject = [];

    function featureTagEnabled() {
      return {
        restrict: 'A',
        scope: {
          featureTagEnabled: '@'
        },
        link: link
      }

      function link(scope, elem) {
        var vm = scope;
        var hasTag = (vm.featureTagEnabled && vm.featureTagEnabled === 'true');
        elem[0].style.setProperty('display', (hasTag) ? '' : 'none', 'important');
      }
    }

})();
