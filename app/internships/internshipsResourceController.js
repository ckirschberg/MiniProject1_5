var myApp = angular.module("webservice", ['ngResource']);

myApp.constant("baseUrl", "http://angularkea.azurewebsites.net/api/Internships/")
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

            new $scope.internshipsResource(internship).$save(
                function(newInternship) {
                    that.internshipVisits.push(newInternship);
                    $state.go('all-internships');
                });
        };

        $scope.updateInternship = function(internship) {
            new $scope.internshipsResource(internship).$update( {id: internship._id},
                function() {
                    $state.go('all-internships');
                });
        };

        $scope.saveVisit = function(){
            var internship = $scope.visit;

            if ($scope.visitForm.$valid) {
                if (angular.isDefined(internship._id)) {
                    //update
                    $scope.updateInternship(internship);
                }
                else {
                    $scope.createInternship(internship);
                }
            }
        };
    }]);