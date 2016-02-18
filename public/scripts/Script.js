var myApp = angular.module("myModule", []);

// var myController = function($scope) {
// 	$scope.message = "AngularJS Tutorial";

// };

// To register mController to the module
// myApp.controller("myController", myController);

// to short cot here
myApp.controller("myController", function($scope) {
	$scope.message = "AngularJS Tutorial";
	
	var employee = {
		firstName: "Dyo",
		lastName: "Bumi",
		gender: "Male"
	};
	$scope.employee = employee;

	// tuturial 4
	$scope.judul = "Bendera Marah Putih";

	var country = {
		name 	: "Indonesia",
		capital	: "Jakarta",
		flag 	: "/images/bendera.png" 		
	};
	$scope.country = country;

	// tuturial 5
	$scope.tutorial5 = "Two way databinding"
	$scope.pesan = "Hello Angular"

	// tutorial 6
	var students = [
		{firstName: "Ersya", lastName: "Prahesti", subjectRoom: "Math", mark: "A" },
		{firstName: "Brandon", lastName: "Bumi", subjectRoom: "Kimia", mark: "A" },
		{firstName: "Susan", lastName: "Nah", subjectRoom: "Biology", mark: "B" },
		{firstName: "John", lastName: "Doer", subjectRoom: "Geology", mark: "C" },
		{firstName: "Dyo", lastName: "Bumi", subjectRoom: "Programming", mark: "A" }
	];
	$scope.students = students;

	// nesting ng-repeat
	var countries = [
		{
			name: "Indonesia",
			cities: [
				{name: "Jakarta"},
				{name: "Bandung"},
				{name: "Semarang"}
			]
		},
		{
			name: "USA",
			cities: [
				{name: "California"},
				{name: "Lost Angels"},
				{name: "Chicago"}
			]
		},
		{
			name: "UK",
			cities: [
				{name: "London"},
				{name: "Liverpool"},
				{name: "Manchester"}
			]
		}

	];
	$scope.countries = countries;

});


