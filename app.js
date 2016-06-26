  /**
   * You must include the dependency on 'ngMaterial'
   */
  app = angular.module('nsawApp', ['ngMaterial']);
  console.log('app ready');

  app.controller('openSideNav', function($scope, $mdSidenav) {
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
  });
