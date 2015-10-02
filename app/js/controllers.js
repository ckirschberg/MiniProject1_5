
angular.module("internship", []).controller("personController", function($scope, $http) {
    $scope.people = [
        {'name':       'Jens Jensen'},
        {'name':       'Hans Hansen'},
        {'name':       'Per Persen'}
    ];

    $scope.add = function(a, b) {
        if (a == undefined || b == undefined) {
            throw new Error("Missing parameter");
        }
        return a+b;
    };

    //$scope.internshipVisits = [];

    $http.get("internships/hardcodedInternships.json").
        success(function (data) {
            $scope.internshipVisits = data;
        }).
        error(function (data, status, headers, config) {
            console.log("error getting internships");
        });


});