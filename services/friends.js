angular
.module('app')
.factory('Friends', ['$http',function($http){
	return {
		get: function(){
			return $http.get('api/friends.json')
              .then(function(response){
                return response.data;
              });
		}
	};
}])



/*
angular
.module('app')
.factory('Friends', ['$http','$q',function($http, $q){
	var self = {};
	self.get = function(){
		var defered = $q.defer();
		$http.get('api/friends.json')
			.success(defered.resolve)
			.error(defered.reject)

			return defered.promise;
              //.then(function(response){
              //  return response.data;
              //});
	}

	return self;
}])*/