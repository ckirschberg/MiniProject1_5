
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
                    //console.log("Item: " + data[i][propertyName]);
                    var itemElement = angular.element("<li>");
                    listElem.append(itemElement);

                    var index = i;

                    //new
                    var watcherFn = function(watchScope) {
                        //console.log("data");
                        //console.log(data);
                        return watchScope.$eval(propertyExpression, data[index]);
                    };

                    scope.$watch(watcherFn, function(newValue, oldValue) {
                       console.log("newValue : " + newValue);
                        itemElement.text(newValue);
                    });

                    var buttons = element.find("button");
                    buttons.on("click", function(e) {
                       element.find("li").toggleClass("bold");
                    });

                }());
            }

            //console.log(listElem);
        }
        else {
            console.log("Not an array");
        }
    }
}).directive("unorderedLists", function() {
    return {
        //scope: {
        //
        //},
        link: function(scope, element, attrs) {
            scope.data = scope[attrs["unorderedLists"]];
        },
        restrict: "A", //Allows use as E: Element, A: Attribute, C: Class, M: Comment
        templateUrl: "templates/editorFor/textTemplate.html"
    }
}).directive("editorFor", function() {
    return {
        scope: {
            modelData: '='
        },
        replace: true,
        link: function(scope, element, attrs) {
            scope.type = attrs["type"];
        },
        restrict: "E", //Allows use as E: Element, A: Attribute, C: Class, M: Comment
        templateUrl: function(elem, attrs) {
            if (attrs["type"] == "checkbox") {
                return "templates/editorFor/checkboxTemplate.html"
            }
            else if (attrs["type"] == "textarea") {
                return "templates/editorFor/textareaTemplate.html"
            }
            else {
                return "templates/editorFor/textTemplate.html"
            }
        }
    }}
);