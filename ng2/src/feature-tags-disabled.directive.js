(() => {

    angular
      .module('feature.tags')
      .directive('featureTagDisabled', featureTagDisabled);

    featureTagDisabled.$inject = [];

    function featureTagDisabled() {
      return {
        restrict: 'A',
        scope: {
          featureTagDisabled: '@'
        },
        link: link
      }

      function link(scope, elem) {
        const vm = scope;
        const hasTag = (vm.featureTagDisabled && vm.featureTagDisabled === 'true');
        elem[0].style.setProperty('display', (hasTag) ? '' : 'none', 'important');
      }
    }

})();
