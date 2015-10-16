/**
 * Created by christiankirschberg on 29/07/15.
 */

var myApp = angular.module("internship");

myApp.controller("mainController", ['$scope', '$http', 'testService', 'logService',
    function($scope, $http, testService, logService) {
        console.log("hello from mainController");
        $scope.internshipVisits = [];

        $scope.products = [
            { name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
            { name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
            { name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
        ];

        $scope.exerciseData = [
            { type: "text", value: "Data 1"},
            { type: "text", value: "Data 2"},
            { type: "textarea", value: ""},
            { type: "checkbox", caption: "Take over the world", value: false},
            { type: "text", value: "Data 3"}
        ];


        $scope.incrementPrices = function() {
          for(var i= 0; i < $scope.products.length; i++) {
              $scope.products[i].price++;
          }
        };





        var testObj = { name: "Christian", email: "chrk@kea.dk" };


        testService.add(5);
        testService.test().then(function(result) {
            //alert(result);
        }, function(reason) {
            //alert(reason);
        });


        logService.log(testService.get(), testObj);

        logService.log(testService.get());

    $http.get("internships/hardcodedInternships.json").
        success(function (data) {
            $scope.internshipVisits = data;
        }).
        error(function (data, status, headers, config) {
            console.log("error getting internships");
        });

    //var baseUrl = "http://localhost:8080/api/Internships/";
/*
    var baseUrl = "http://angularkea.azurewebsites.net/api/Internships/";
    $scope.internshipsResource = $resource(baseUrl + ":id",
        { id: "@id"});

    $scope.internshipVisits = $scope.internshipsResource.query();
*/

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
