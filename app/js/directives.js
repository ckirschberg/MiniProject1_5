
angular.module("internship").directive("unorderedList", function() {
    return function(scope, element, attrs) {
        var data = scope[attrs["unorderedList"]];
        var propertyName = attrs["listProperty"];

        if (angular.isArray(data)) {
            var listElem = angular.element("<ul>");
            element.append(listElem);


            var propertyExpression = attrs["listProperty"]; //new

            for (var i=0; i < data.length; i++) {
                (function() {
                    console.log("Item: " + data[i][propertyName]);
                    var itemElement = angular.element("<li>");
                    listElem.append(itemElement);

                    var index = i;

                    //new
                    var watcherFn = function(watchScope) {
                        console.log("data");
                        console.log(data);
                        return watchScope.$eval(propertyExpression, data[index]);
                    };

                    scope.$watch(watcherFn, function(newValue, oldValue) {
                       console.log("newValue : " + newValue);
                        itemElement.text(newValue);
                    });
                }());
            }

            console.log(listElem);
        }
        else {
            console.log("Not an array");
        }
    }
});