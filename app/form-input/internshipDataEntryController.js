/**
 * Created by christiankirschberg on 28/07/15.
 */

var internshipModule = angular.module("internship");

internshipModule.controller("internshipDateEntryController",
    function($scope) { //DI here..
        $scope.visit = {};

        $scope.saveVisit = function()
        {
            console.log("form");
            console.log($scope.visitForm);

            if ($scope.visitForm.$valid){
                alert("valid");
            }
            else {
                alert("invalid");
            }
            console.log($scope.visit);


        };
    }
);