angular.module("app")
.controller('homeCtrl',['$scope','Friends',
	function($scope, Friends){
            $scope.title = "Welcome";
            $scope.items=["2016","2015", "2014"];
            $scope.friends = Friends.get();
            $scope.save = function(){
            	$http.post('/api/friends', friends);
            }

          }])