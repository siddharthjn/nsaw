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

  app.controller('StoreController', function(){

    this.tab =1;
    this.setTab = function(newValue)
    {
      this.tab = newValue;
      if(this.tab == 1)
      {
        this.products = physics;
      }
      else if(this.tab == 2)
      {
        this.products = chemistry;
      }
      else if(this.tab == 3)
      {
        this.products = bio;
      }
    };

  });
