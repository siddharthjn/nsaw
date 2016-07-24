  /**
   * You must include the dependency on 'ngMaterial'
   */
  app = angular.module('nsawApp', ['ngMaterial']);
  console.log('app ready');

  /*Controller for the menu button to open the nav bar*/
  app.controller('openSideNav', function($scope, $mdSidenav) {
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
  });

  /*app.controller('closeNav', function($scope, $mdSidenav){
    $scope.closeOnClick = function(){
      $mdSidenav('left').close();
    }
  })*/

  app.controller('StoreController', function($scope, $mdMedia, $mdSidenav){

    this.tab =1;
    this.setTab = function(newValue)
    {
      if ($mdMedia('xs') || $mdMedia('sm'))
      {
        $mdSidenav('left').close();
      }
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
