/*global describe, it */
'use strict';

describe('Person controller', function () {
    beforeEach(module('internship'));

    describe('personController', function () {

        it('should create people array with 3 people', inject(function ($controller) {
            var scope = {};
            var ctrl = $controller('personController', { $scope: scope });

            expect(scope.people.length).toBe(3);
        }));
    });


    describe("personController add", function()
    {
        var $controller, $httpBackend;

        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_;
        }));

        describe("personController.add", function() {
            var controller, $scope;

            beforeEach(inject(function($injector) {
                $scope = {};
                controller = $controller("personController", {$scope: $scope});

                $httpBackend  = $injector.get('$httpBackend');
                $httpBackend.when('GET', 'internships/hardcodedInternships.json').respond([
                    { id: 1, name: "Entry 1" },
                    { id: 2, name: "Entry 2" }
                ]);
            }));

            it("initially has no entries", function(){
                //expect($scope.internshipVisits.length).toBe(0);
            });

            it("loads entries with http", function(){
                $httpBackend.expectGET('internships/hardcodedInternships.json').respond([
                    { id: 1, name: "Entry 1" },
                    { id: 2, name: "Entry 2" }
                ]);;
                //controller.load(function(){
                    expect($scope.internshipVisits.length).toBe(2);
                //});
                $httpBackend.flush();
            });


            it("should add 2 and 5 = 7", function() {
                var result = $scope.add(2, 5);
                expect(result).toBe(7);
            });

            it("should add 0 and 0 = 0", function() {
                var result = $scope.add(0, 0);
                expect(result).toBe(0);
            });

            it("should add 2 and undefined = NaN", function() {
                expect(function() {$scope.add(2)}).toThrow(new Error("Missing parameter"));
            });
        });
    });

});



describe("ResourceController", function() {
/*
//    beforeEach(module("internship"));

    var scope, controller, $httpBackend;

    beforeEach(function(){

        inject(function($rootScope, $controller, $injector) {
            scope         = $rootScope.$new();
            controller    = $controller("personController", { $scope: scope });

            $httpBackend  = $injector.get('$httpBackend');
            $httpBackend.when('GET', 'internships/hardcodedInternships.json').respond([
                { id: 1, name: "Entry 1" },
                { id: 2, name: "Entry 2" }
            ]);
        });
    });

    afterEach(function() {
        //$httpBackend.verifyNoOutstandingExpectation();
        //$httpBackend.verifyNoOutstandingRequest();
    });

    it("initially has no entries", function(){
        expect(scope.internshipVisits.length).toBe(0);
    });

    it("loads entries with http", function(){
        $httpBackend.expectGET('/app/internships');
        controller.load(function(){
            expect(scope.internshipVisits.length).toBe(2);
        });
        $httpBackend.flush();
    });

*/

/*
    describe("internshipsAllController", function() {
        var scope, httpBackend;

        it("should have 3 movies", inject(function ($rootScope, $controller, $httpBackend, $http) {
            console.log("fake");
            console.log($httpBackend);
            scope = $rootScope.$new();
            httpBackend = $httpBackend;
            httpBackend.when("GET", "/api/internships").respond([{}, {}, {}]);
            $controller('mainController', {
                $scope: scope,
                $http: $http //$http uses httpBackend
            });

            console.log(httpBackend);
            httpBackend.flush();
            expect(scope.internshipVisits.length).toBe(3);
        }));
    });

*/

});