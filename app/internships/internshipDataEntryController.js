/**
 * Created by christiankirschberg on 28/07/15.
 */

var internshipModule = angular.module("internship");

internshipModule.controller("internshipDataEntryController",
    function($scope, $state, $stateParams) { //DI here..
        $scope.visit = {};
        $('.datepicker').pickadate();

        console.log($stateParams.internship);
        if ($stateParams.internship) {
            $scope.visit = $stateParams.internship;
        }


        $scope.saveVisit = function()
        {
            if ($scope.visitForm.$valid){
                if ($stateParams.internship) {//edit
                    //fint the index of the object we edited and then replace it
                    //with the new, user-edited object.
                    /*
                    for (var i=0; i < $scope.$parent.internshipVisits.length; i++){
                        if ($scope.$parent.internshipVisits[i].id == $scope.visit.id){
                            $scope.$parent.internshipVisits[i] = $scope.visit;
                        }
                    }
                    */

                    //or with underscore
                    var index = _.findIndex($scope.$parent.internshipVisits,
                        {id: $scope.visit.id});

                    $scope.$parent.internshipVisits[index] = $scope.visit;
                }
                else
                { //new
                    //accessing the parent scope (mainController)
                    $scope.$parent.internshipVisits.push($scope.visit);
                }

                //then navigate back to the list of internships.
                $state.go('all-internships');
            }
        };
    }
);