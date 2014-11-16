/**
 * 
 */
app.controller("userHomeCtrl", function($scope,$http) {
	$http.get('http://localhost:8080/demo/userDetails').
	  success(function(data, status, headers, config) {
	    $scope.username = data.userName;
	    $scope.counter = data.position;
	  }).error(function(data, status, headers, config) {
		  alert("Errore");
	  });
    $scope.message = "";
    $scope.left  = function() {this.conteggio = $scope.message.length; return 100 - $scope.message.length;};
    $scope.prova  = function() {return conteggio;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {
    	$http.get('http://localhost:8080/demo/userDetails').
    	  success(function(data, status, headers, config) {
    	    $scope.username = data.userName;
    	    $scope.counter = data.position;
    	  }).error(function(data, status, headers, config) {
    		  alert("Errore");
    	  });
    	
    };
});