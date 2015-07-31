/**
 * Created by christiankirschberg on 29/07/15.
 */

var myApp = angular.module("internship");

myApp.controller("mainController", ['$scope', function($scope) {
    console.log("hello from mainController");

    $scope.internshipVisits = [
        {
            id: "1",
            initials: "chrk",
            date: new Date(2015, 0, 1),
            studentName: "Per Persen",
            studentId: "123321",
            companyPeople: "Mads Madsen and Hans Hansen",
            companyName: "KEA",
            companyTrends: "Developers, developers, developers, developers, developers, developers, developers, developers, developers.",
            studentCompetencies: "Coding and 'people skills'",
            companyCompetencies: "Web applications",
            companyCooperation: "Yes, please send more interns, if they are any good",
            etc: "Nothing much.."
        },
        {
            id: "2",
            initials: "chrk",
            date: new Date(2015, 0, 1),
            studentName: "Test Testesen",
            studentId: "123322",
            companyPeople: "Jens Jensen",
            companyName: "Nordea",
            companyTrends: "Mobile payment?",
            studentCompetencies: "",
            companyCompetencies: "Apps",
            companyCooperation: "Perhaps..",
            etc: "Nothing much.."
        },
        {
            id: "3",
            initials: "asbc",
            date: new Date(2015, 0, 1),
            studentName: "Helle Hellesen",
            studentId: "123323",
            companyPeople: "Thomas Thomasen",
            companyName: "TV2",
            companyTrends: "Streaming TV content",
            studentCompetencies: "Network and coding",
            companyCompetencies: "Apps and Web - front end and back end",
            companyCooperation: "Yes",
            etc: "Nothing much again.."
        }
    ];

}]);
