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
    })
    .filter("skip", function () {
        return function (data, count) {
            if (angular.isArray(data) && angular.isNumber(count)) {
                if (count > data.length || count < 1) {
                    return data;
                } else {
                    return data.slice(count);
                }
            } else {
                return data;
            }
        }
    })
    .filter("take", function ($filter) {
        return function (data, skipCount, takeCount) {
            var skippedData = $filter("skip")(data, skipCount);
            return $filter("limitTo")(skippedData, takeCount);
        }
    })
    .filter("labelCase", function() {
      return function(value, reverse) {
        if (angular.isString(value)) {
            var intermediate = reverse ? value.toUpperCase() : value.toLowerCase();

            return (reverse ? intermediate[0].toLowerCase() : intermediate[0].toUpperCase())
                    + intermediate.substr(1);
        }
        else {
            return value;
        }
      }
    }
);

