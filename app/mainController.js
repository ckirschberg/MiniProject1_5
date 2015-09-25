/**
 * Created by christiankirschberg on 29/07/15.
 */

var myApp = angular.module("internship");

myApp.controller("mainController", ['$scope', '$http', '$resource',
    function($scope, $http, $resource) {
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

    //var baseUrl = "http://localhost:8080/api/Internships/";

    var baseUrl = "http://angularkea.azurewebsites.net/api/Internships/";
    $scope.internshipsResource = $resource(baseUrl + ":id",
        { id: "@id"});

    $scope.internshipVisits = $scope.internshipsResource.query();


    /*
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
    */
}]);
