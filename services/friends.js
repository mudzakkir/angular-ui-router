angular
.module('app')
.factory('Friends', ['$http',function($http){
	return {
		get: function(){
			return $http.get('api/friends.json')
              .then(function(response){
              	
        	alert(JSON.stringify( response.data));
                return response.data;
              });
		}
	};
}])