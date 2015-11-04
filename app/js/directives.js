
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
}).directive("unorderedList2", function() {
    return {
        link: function(scope, element, attrs) {
            scope.data = scope[attrs["unorderedList"]];
        },
        restrict: "A", //Allows use as E: Element, A: Attribute, C: Class, M: Comment
        templateUrl: "itemTemplate.html"
    }
}).directive("unorderedLists", function() {
    return {
        link: function(scope, element, attrs) {
            scope.data = scope[attrs["unorderedLists"]];
        },
        restrict: "A", //Allows use as E: Element, A: Attribute, C: Class, M: Comment
        templateUrl: function(elem, attrs) {
            if (attrs["type"] == "text") {
                return "templates/unorderedList3/tableTemplate.html"
            }
            return "itemTemplate.html"
        }
    }
}).directive("editorFor", function() {
    return {
        link: function(scope, element, attrs) {
            scope.data = scope[attrs["data"]];
        },
        restrict: "E", //Allows use as E: Element, A: Attribute, C: Class, M: Comment
        //scope: { local: "@nameprop" },
        templateUrl: function(elem, attrs) {

            if (elem.nameprop == "text") {
                return "templates/editorFor/textTemplate.html"
            }
            else if (elem.nameprop == "textarea") {
                return "templates/editorFor/textareaTemplate.html"
            }
            return "templates/editorFor/textTemplate.html";
        }
    }
});