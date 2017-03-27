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
    function changeButtonToWhite(){
      $scope.physCol = {"background-color" : "white"};
      $scope.chemCol = {"background-color" : "white"};
      $scope.bioCol = {"background-color" : "white"};
      $scope.plasCol = {"background-color" : "white"};
      $scope.abtUs = {"background-color" : "white"};
      $scope.contUs = {"background-color" : "white"};
      $scope.pharCol = {"background-color" : "white"};
    }

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
        changeButtonToWhite();
        $scope.physCol = {"background-color" : "pink"};
      }
      else if(this.tab == 2)
      {
        this.showAboutUs = false;
        this.products = chemistry;
        changeButtonToWhite();
        $scope.chemCol = {"background-color" : "pink"};
      }
      else if(this.tab == 3)
      {
        this.showAboutUs = false;
        this.products = bio;
        changeButtonToWhite();
        $scope.bioCol = {"background-color" : "pink"};
      }
      else if(this.tab == 4)
      {
        this.showAboutUs = false;
        this.products = plasticWare;
        changeButtonToWhite();
        $scope.plasCol = {"background-color" : "pink"};
      }
      else if(this.tab == 5){
        this.showAboutUs = true;
        this.products = null;
        changeButtonToWhite();
        $scope.abtUs = {"background-color" : "pink"};
      }
      else if(this.tab == 6){
        this.products = null;
        this.showAboutUs = false;
        changeButtonToWhite();
        $scope.contUs = {"background-color" : "pink"};
      }
      else if(this.tab == 8){
        this.showAboutUs = false;
        this.products = pharmacy;
        changeButtonToWhite();
        $scope.pharCol = {"background-color" : "pink"};
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

  
