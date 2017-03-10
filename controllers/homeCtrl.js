angular.module("app")
.controller('homeCtrl',['$scope','Friends',
	function($scope, Friends){
            $scope.title = "Welcome";
            $scope.items=["2016","2015", "2014"];
            //$scope.friends  = Friends.get();
            var x = Friends.get();
             x.then(function(data) { $scope.friends = data; });
            
            $scope.save = function(){
            	$http.post('/api/friends', friends);
            }

          }])