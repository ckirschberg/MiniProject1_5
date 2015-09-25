/**
 * Created by christiankirschberg on 28/07/15.
 */

var internshipModule = angular.module("internship");

internshipModule.controller("internshipDataEntryController",
    function($scope, $state, $stateParams, $http, $resource) { //DI here..
        $scope.visit = {};
        $('.datepicker').pickadate();

        //console.log($stateParams.internship);
        if ($stateParams.internship) {
            $scope.visit = $stateParams.internship;
        }

        $scope.deleteVisit = function(internship) {
            //console.log("visit");
            //console.log($scope.visit);

            //$http({ method: 'DELETE', url: '/Internships/' + $scope.visit.id}).

            $http({ method: 'POST', url: 'http://localhost:8080/api/Internships/Delete/' + $scope.visit._id}).
                success(function (data, status, headers, config) {

                    $scope.$parent.internshipVisits.splice(
                        $scope.$parent.internshipVisits.indexOf($scope.visit), 1);

                    //or with underscore
                    //var index = _.findIndex($scope.$parent.internshipVisits,

                    //    {id: $scope.visit.id});

                    //$scope.$parent.internshipVisits.splice(index, 1);

                    $state.go('all-internships');
                }).
                error(function (data, status, headers, config) {
                    console.log("error deleting internship")
                });

            /*
            internship.$delete().then(function() {
                $scope.internshipVisits.splice(
                    $scope.internshipVisits.indexOf(internship), 1);
            });
            */
        };

        $scope.saveVisit = function()
        {
            if ($scope.visitForm.$valid) {
                if ($stateParams.internship) {//edit
                    //find the index of the object we edited and then replace it
                    //with the new, user-edited object.

                    //If the api, as in my case, is a local api running on port 8080
                    $http({ method: 'POST', url: 'http://localhost:8080/api/Internships/Update',
                        data: $scope.visit }).
                        success(function (data, status, headers, config) {
                        }).
                        error(function (data, status, headers, config) {
                            console.log("error editing internship");
                        });

                    //Should this be if success?
                    var index = _.findIndex($scope.$parent.internshipVisits,
                        {id: $scope.visit.id});
                    $scope.$parent.internshipVisits[index] = $scope.visit;
                }
                else
                { //new
                    //accessing the parent scope (mainController)

                    //$http({ method: 'POST', url: '/api/Internships', data: $scope.visit }).
                    $http({ method: 'POST', url: 'http://localhost:8080/api/Internships/Create',
                        data: $scope.visit }).
                        success(function (data, status, headers, config) {
                            $scope.internshipVisits.push($scope.visit);
                        }).
                        error(function (data, status, headers, config) {
                            console.log("error creating internship")
                        });
                }

                //then navigate back to the list of internships.
                $state.go('all-internships');
            }
        };
    }
);