wineApp.controller('redCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.wineData = data

	})
}]);

wineApp.controller('whiteCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.wineData = data
	})
}]);


// wineApp.controller( "redCtrl", ['$scope', '$http', function($scope, $http) {
//     $http({
//         url: 'js/data.json',
//         dataType: 'json',
//         method: 'GET',
//         data: ''
//         }

//     }).success(function(response){
//         $scope.wineData = response;
//     }).error(function(error){
//         $scope.names = 'error';
//     }]);