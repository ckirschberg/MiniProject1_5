/**
 * Created by christiankirschberg on 26/09/15.
 */

angular.module("internship").filter("showInternship", function() {
    return function(data, search) {
        if (search === undefined || search === "") //if no search is active
        {
            return data;
        }

        data = _.filter(data, function(internship) {
            return internship.initials.toLowerCase().indexOf(search) > -1 ||
                internship.studentName.toLowerCase().indexOf(search) > -1 ||
                internship.companyPeople.toLowerCase().indexOf(search) > -1 ||
                internship.studentId.toLowerCase().indexOf(search) > -1 ||
                internship.companyName.toLowerCase().indexOf(search) > -1
        });

        return data;
    }
});
