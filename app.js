  /**
   * You must include the dependency on 'ngMaterial'
   */
  app = angular.module('nsawApp', ['ngMaterial']);
  console.log('app ready');

  /*for the menu button to open the nav bar*/
  app.controller('openSideNav', function($scope, $mdSidenav) {
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
  });

  /*to grab the product category based on the product selected from sidenav*/
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

 /*for search results */
  app.controller('searchController', ['$scope',function($scope) {
      $scope.name = "";
      $scope.hideSearchResult = false;
      $scope.prodSearchNames =[];

      $scope.isSearchFound = function() {
        var searchVal = document.getElementById("searchBar").value;
        //if input value(upper or lowercase) is a substring and not empty
        if(searchVal!=="")
        {
          for(var i=0; i< physics.length; i++)
          {
            if(physics[i].name.indexOf(searchVal)!== -1 ||
            physics[i].name.toLowerCase().indexOf(searchVal)!== -1)
            {
              $scope.prodSearchNames.push(physics[i].name);
              return $scope.hideSearchResult = true;
          }
            else{$scope.hideSearchResult =false;} } }
          else{$scope.hideSearchResult = false;}
      };

      $scope.isSearchNotFound = function()
      {
        var searchVal = document.getElementById("searchBar").value;
        if(searchVal!==""){
          if($scope.prodSearchNames.length != 0){
            for(var i=0; i< $scope.prodSearchNames.length; i++)
            {
              if($scope.prodSearchNames[i].indexOf(searchVal) == -1 ||
              $scope.prodSearchNames[i].toLowerCase().indexOf(searchVal)== -1){
                $scope.prodSearchNames.splice(i,1);
              }
            }
          }
        }
      };
  }]);
