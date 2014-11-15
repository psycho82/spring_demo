/**
 * 
 */
app.controller("myNoteCtrl", function($scope,$http) {
    $scope.message = "";
    $scope.left  = function() {this.conteggio = $scope.message.length; return 100 - $scope.message.length;};
    $scope.prova  = function() {return conteggio;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {
    	$http.get('http://localhost:8080/demo/userDetails').
    	  success(function(data, status, headers, config) {
    	    $scope.username = data.userName;
    	    $scope.counter = data.position;
    	    console.log(data.userName);
    	    console.log(data.position);
    	  }).
    	  error(function(data, status, headers, config) {
    	    // called asynchronously if an error occurs
    	    // or server returns response with an error status.
    		  alert("Error");
    	  });
    	
    };
});