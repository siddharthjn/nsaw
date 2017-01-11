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
    this.showAboutUs = false;
    this.setTab = function(newValue)
    {
      if ($mdMedia('xs') || $mdMedia('sm'))
      {
        $mdSidenav('left').close();
      }
      this.tab = newValue;
      if(this.tab == 1)
      {
        this.showAboutUs = false;
        this.products = physics;
        $scope.physCol = {"background-color" : "rgb(95, 218, 204)"};
        $scope.chemCol = {"background-color" : "white"};
        $scope.bioCol = {"background-color" : "white"};
        $scope.plasCol = {"background-color" : "white"};
        $scope.abtUs = {"background-color" : "white"};
        $scope.contUs = {"background-color" : "white"};
        $scope.careers = {"background-color" : "white"};
      }
      else if(this.tab == 2)
      {
        this.showAboutUs = false;
        this.products = chemistry;
        $scope.physCol = {"background-color" : "white"};
        $scope.chemCol = {"background-color" : "rgb(95, 218, 204)"};
        $scope.bioCol = {"background-color" : "white"};
        $scope.plasCol = {"background-color" : "white"};
        $scope.abtUs = {"background-color" : "white"};
        $scope.contUs = {"background-color" : "white"};
        $scope.careers = {"background-color" : "white"};
      }
      else if(this.tab == 3)
      {
        this.showAboutUs = false;
        this.products = bio;
        $scope.physCol = {"background-color" : "white"};
        $scope.chemCol = {"background-color" : "white"};
        $scope.bioCol = {"background-color" : "rgb(95, 218, 204)"};
        $scope.plasCol = {"background-color" : "white"};
        $scope.abtUs = {"background-color" : "white"};
        $scope.contUs = {"background-color" : "white"};
        $scope.careers = {"background-color" : "white"};
      }
      else if(this.tab == 4)
      {
        this.showAboutUs = false;
        this.products = plasticWare;
        $scope.physCol = {"background-color" : "white"};
        $scope.chemCol = {"background-color" : "white"};
        $scope.bioCol = {"background-color" : "white"};
        $scope.plasCol = {"background-color" : "rgb(95, 218, 204)"};
        $scope.abtUs = {"background-color" : "white"};
        $scope.contUs = {"background-color" : "white"};
        $scope.careers = {"background-color" : "white"};
      }
      else if(this.tab == 5){
        this.showAboutUs = true;
        this.products = null;
        $scope.physCol = {"background-color" : "white"};
        $scope.chemCol = {"background-color" : "white"};
        $scope.bioCol = {"background-color" : "white"};
        $scope.plasCol = {"background-color" : "white"};
        $scope.abtUs = {"background-color" : "rgb(95, 218, 204)"};
        $scope.contUs = {"background-color" : "white"};
        $scope.careers = {"background-color" : "white"};
      }
      else if(this.tab == 6){
        this.products = null;
        this.showAboutUs = false;
        $scope.physCol = { "background-color" : "white"};
        $scope.chemCol = {"background-color" : "white"};
        $scope.bioCol = {"background-color" : "white"};
        $scope.plasCol = {"background-color" : "white"};
        $scope.abtUs = {"background-color" : "white"};
        $scope.contUs = {"background-color" : "rgb(95, 218, 204)"};
        $scope.careers = {"background-color" : "white"};
      }
      else if(this.tab == 7){
        this.showAboutUs = false;
        this.products = null;
        $scope.physCol = {"background-color" : "white"};
        $scope.chemCol = {"background-color" : "white"};
        $scope.bioCol = {"background-color" : "white"};
        $scope.plasCol = {"background-color" : "white"};
        $scope.abtUs = {"background-color" : "white"};
        $scope.contUs = {"background-color" : "white"};
        $scope.careers = {"background-color" : "rgb(95, 218, 204)"};
      }
    };

  });

  /*to grab tab category */
  app.controller('cardController', function($scope, $mdToast){
    this.tabVal = 1;
    this.showDesc =true;
    this.showPrice = false;
    this.showSpec = false;
    $scope.infoCol = {
      "background-color" : "rgb(95, 218, 204)"
    };

    this.setTabVal = function(newTabValue){
      this.tabVal = newTabValue;
      if(this.tabVal ==1)
      {
        this.showDesc =true;
        this.showPrice = false;
        this.showSpec = false;
        $scope.infoCol = {
          "background-color" : "rgb(95, 218, 204)"
        };
        $scope.priceCol = {
          "background-color" : "white"
        };
        $scope.specsCol = {
          "background-color" : "white"
        };
      }
      else if(this.tabVal ==2){
        this.showDesc =false;
        this.showPrice = true;
        this.showSpec = false;
        $scope.infoCol = {
          "background-color" : "white"
        };
        $scope.priceCol = {
          "background-color" : "rgb(95, 218, 204)"
        };
        $scope.specsCol = {
          "background-color" : "white"
        };
      }
      else{
        this.showDesc =false;
        this.showPrice = false;
        this.showSpec = true;
        $scope.infoCol = {
          "background-color" : "white"
        };
        $scope.priceCol = {
          "background-color" : "white"
        };
        $scope.specsCol = {
          "background-color" : "rgb(95, 218, 204)"
        };
      }
    };

    $scope.selectedUserIndex = undefined;
    $scope.selectUserIndex = function (index) {
      if ($scope.selectedUserIndex !== index) {
        $scope.selectedUserIndex = index;
      }
      else {
        $scope.selectedUserIndex = undefined;
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


  app.controller('iconChanger', function($scope, $mdToast){
    this.icon = 0;
    this.heartChange = false;
    this.menuChange = false;
    this.plusChange = false;
    this.changeIcon = function(newIconVal)
    {
      this.icon = newIconVal;
      if(this.icon ==1)
      {
        this.heartChange =true;
          $mdToast.show($mdToast.simple().textContent('Item added to wishlist'));
      }
      if(this.icon ==2)
      {
        this.heartChange =false;
          $mdToast.show($mdToast.simple().textContent('Item removed from wishlist'));
      }
      if(this.icon ==5)
      {
        this.plusChange =true;
        $mdToast.show($mdToast.simple().textContent('Item added to shoppinglist'));
      }
      if(this.icon ==6)
      {
        this.plusChange =false;
        $mdToast.show($mdToast.simple().textContent('Item removed from shoppinglist'));
      }
    };


  });

  app.controller('timelineController', function($scope){

  });

/*  app.directive('headToolbar', function(){
    return{
      restrict : 'E',
      templateUrl :'template/head-toolbar.html'
    };
  });*/
