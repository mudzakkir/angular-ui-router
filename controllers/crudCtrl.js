angular.module("app")
.controller("crudCtrl", ['$scope', function($scope){
	$scope.emails = ['mudzakkirtoha@gmail.com', 'chameleon.rising@gmail.com']

	$scope.addCrud = function(){
		$scope.emails.push($scope.email);
	}

	$scope.deleteCrud = function(x){
		var indexEmail = $scope.emails.indexOf(x);
		if(indexEmail > -1 ){
			$scope.emails.splice(indexEmail,1);
		}
	}
}])