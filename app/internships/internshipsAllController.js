/**
 * Created by christiankirschberg on 31/07/15.
 */

var myApp = angular.module("internship");

myApp.controller("internshipsAllController",
    ['$scope','$state', function($scope, $state) {

        $scope.editInternship = function(visit){
            $state.go('new-internship', {internship: visit});
        };

        $scope.limitRange = [1, 10, 20, 50, 100];
        $scope.limitVal = $scope.limitRange[0];

    }]
);
