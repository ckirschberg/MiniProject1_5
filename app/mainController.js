/**
 * Created by christiankirschberg on 29/07/15.
 */

var myApp = angular.module("internship");

myApp.controller("mainController", ['$scope', '$http', function($scope, $http) {
    console.log("hello from mainController");

    /*
    $http.get("internships/hardcodedInternships.json").
        success(function (data) {
            $scope.internshipVisits = data;
        }).
        error(function (data, status, headers, config) {
            console.log("error getting internships");
        });
    */

    //$http.get("http://localhost:8080/api/Internships").
    $http({ method: 'GET',
        url: "http://localhost:8080/api/Internships/getall"}).
        success(function (data) {
            $scope.internshipVisits = data;
            console.log("data");
            console.log(data);
        }).
        error(function (data, status, headers, config) {
            console.dir("error getting internships");
        });



}]);
