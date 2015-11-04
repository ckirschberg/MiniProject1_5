/*global describe, it */
'use strict';

//describe("Filter tests", function() {
//   var filterInstance;
//
//    beforeEach(module("internship"));
//
//    beforeEach(inject(function($filter){
//        filterInstance = $filter("labelCase");
//    }));
//
//    it("Changes case", function() {
//        var result = filterInstance("test phrase");
//        expect(result).toEqual("Test Phrase");
//    });
//
//    it("Reverse case", function() {
//       var result = filterInstance("test phrase", true);
//        expect(result).toEqual("tEST PHRASE");
//    });
//});




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
            var $scope, controller;

            beforeEach(function() { 
                $scope = {}; 
                controller = $controller("personController", {$scope: $scope}); 
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


        //describe("Mocks", function() {
        //    var mockScope, backend;
        //
        //    beforeEach(inject(function($httpBackend) {
        //        backend = $httpBackend;
        //        backend.expect("GET", "internships/hardcodedInternships.json").respond([
        //            {"name": "Apples", "category": "Fruit"},
        //            {"name": "Carlsberg", "category": "Beer"}
        //        ]);
        //
        //    }));
        //
        //    beforeEach(inject(function($controller, $rootScope, $http) {
        //        mockScope = $rootScope.$new();
        //        $controller("mainController", {
        //            $scope: mockScope,
        //            $http: $http
        //        });
        //        backend.flush();
        //    }));
        //
        //    it("Makes an AJAX request", function() {
        //        backend.verifyNoOutstandingExpectation();
        //    });
        //
        //    it("Processes the data", function() {
        //        expect(mockScope.internshipVisits).toBeDefined();
        //        expect(mockScope.internshipVisits.length).toEqual(2);
        //    });
        //
        //})
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