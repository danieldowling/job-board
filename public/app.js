angular.module('app', [])
	.controller('AppController', ['$http', '$scope', function($http, $scope){
		$http.get('/indeed').success(function(response){
			$scope.jobs = response.results;
			console.log(response);
		});
	}]);

