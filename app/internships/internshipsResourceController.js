var myApp = angular.module("webservice", ['ngResource']);

myApp.constant("baseUrl", "http:/yoururlhere/")
    .controller("internshipsResourceController",
    ['$scope','$resource', 'baseUrl', '$stateParams',
    function($scope, $resource, baseUrl, $stateParams) {

        $scope.visit = {};
        $('.datepicker').pickadate();

        console.log($stateParams.internship);
        if ($stateParams.internship) {
            $scope.visit = $stateParams.internship;
        }




        $scope.internshipsResource = $resource(baseUrl + ":id",
        { id: "@id"});

        $scope.listInternships = function() {
            $scope.internships = $scope.internshipsResource.query();
        };

        $scope.deleteInternship = function(internship){
          internship.$delete().then(function() {
              $scope.internships.splice(
                  $scope.internships.indexOf(internship), 1);
          });
        };

        $scope.createInternship = function(internship) {
            $scope.internshipsResource(internship).$save().then(
                function() {
                    $scope.internships.push(internship);
                }
            )
        };

        $scope.updateInternship = function(internship) {
            internship.$save();
        };

        $scope.saveVisit = function(){
            var internship = $scope.visit;
            if (angular.isDefined(internship.id)) {
                //update
                $scope.updateInternship(internship);
            }
            else {
                $scope.createInternship(internship);
          }
        };


        $scope.listInternships();
    }]);