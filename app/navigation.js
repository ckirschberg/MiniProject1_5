/**
 * Created by christiankirschberg on 29/07/15.
 */
var myApp = angular.module("internship");

myApp.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/all-internships");
    //
    // Now set up the states
    $stateProvider
        .state('new-internship', {
            url: "/new-internship",
            templateUrl: "internships/form-input.html",
            controller: "internshipDataEntryController",
            //controller: "internshipsResourceController",
            params: {internship: null}
        })
            .state('new-internship.subview1', {
                url: "/subview1",
                templateUrl: "internships/subview1.html"
            })
            .state('new-internship.subview2', {
                url: "/subview2",
                templateUrl: "internships/subview2.html"
            })
        .state('all-internships', {
            url: "/all-internships",
            templateUrl: "internships/all-internships.html",
            controller: 'internshipsAllController'
        });
});