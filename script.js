angular
  .module('app',['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider,$stateProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home',{
          url:'/',
          templateUrl:'templates/home.html',
          controller: 'homeCtrl',
          resolve : {
            friends:['Friends', function(Friends){
            return Friends.get();
          }]
          }
        })
        .state('about',{
          url:'/about',
          templateUrl:'templates/about.html',
          controller: 'aboutCtrl'
        })
        .state('contact',{
          url:'/contact',
          templateUrl:'templates/contact.html'
        })
        .state('crud',{
          url:'/crud',
          templateUrl : 'templates/crud.html',
          controller : 'crudCtrl'
        })
  }])
  .controller('customerCtrl', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
    $scope.customer2 = {
      name: 'M Toha',
      address: '1700 Amphitheatre'
    };
    $scope.customer3 = {
      name: 'Alexandria',
      address: '1800 Amphitheatre'
    };
  }])
  .directive('myCustomer', function() {
    return {
      templateUrl: 'my-customer.html'
    };
  });