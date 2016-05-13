angular.module("app")
.controller('aboutCtrl',['$scope',
	function($scope){
            $scope.title = "About";
            $scope.description = "Just ordinary people. I am not so sure am I a man or not. Sometimes I am afraid of anything.";
            $scope.items=["2016","2015", "2014", "2003"];
          }])