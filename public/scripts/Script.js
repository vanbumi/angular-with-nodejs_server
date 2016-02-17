var myApp = angular.module("myModule", []);

var myController = function($scope) {
	$scope.message = "AngularJS Tutorial";
};

// To register mController to the module
// myApp.controller("myController", myController);

// to short cot here
myApp.controller("myController", function($scope) {
	$scope.message = "AngularJS Tutorial";
});

