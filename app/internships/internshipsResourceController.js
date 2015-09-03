var myApp = angular.module("webservice", ['ngResource']);

myApp.constant("baseUrl", "http://localhost:8080/api/Internships/")
    .controller("internshipsResourceController",
    ['$scope','$resource', 'baseUrl', '$stateParams', '$state',
    function($scope, $resource, baseUrl, $stateParams, $state) {

        $scope.visit = {};
        $('.datepicker').pickadate();

        console.log($stateParams.internship);
        if ($stateParams.internship) {
            $scope.visit = $stateParams.internship;
        }


        $scope.internshipsResource = $resource(baseUrl + ":id",
        { id: "@id"},{
                update: {
                    method: 'PUT'
                }
            }
        );
//        console.log("scope parent");
//        console.log($scope.$parent);

        /*
        $scope.listInternships = function() {
            $scope.internshipVisits = $scope.internshipsResource.query();
        };
        */

        $scope.deleteVisit = function(internship){
            var that = $scope.$parent;

            internship.$delete({ id: internship._id }, function() {
                that.internshipVisits.splice(
                    that.internshipVisits.indexOf(internship), 1);

                $state.go('all-internships');
            });
        };

        $scope.createInternship = function(internship) {
            var that = $scope.$parent; //get a ref to parent controllers scope
            //to be used inside $save - function

            new $scope.internshipsResource(internship).$save({ id: internship._id },
                function(newInternship) {

                    //console.log("newInternship");
                    //console.log(newInternship);

                    //console.log("scope");
                    //console.log(that);

                    that.internshipVisits.push(newInternship);
                    $state.go('all-internships');
                });
        };

        $scope.updateInternship = function(internship) {
            console.log(internship);

            var that = $scope.$parent; //get a ref to parent controllers scope
            //to be used inside $save - function

            new $scope.internshipsResource(internship).$update(
                function() {
                    $state.go('all-internships');
                });
        };

        $scope.saveVisit = function(){
            var internship = $scope.visit;

            if ($scope.visitForm.$valid) {
                if (angular.isDefined(internship._id)) {
                    //update
                    console.log("update called");
                    $scope.updateInternship(internship);
                }
                else {
                    console.log("insert called");
                    $scope.createInternship(internship);
                }
            }
        };
    }]);