angular.module("internship").factory("testService", function() {
    var counter = 0;

    return {
      add: function(numberToAdd) {
          counter += numberToAdd;
      },
      get: function() {
         return counter;
      }
    };
}).factory("logService", function() {

    return {
        log: function(msg, object) {
            console.log(msg);

            if (object) {
                console.log(object);
            }
        }

    }
});
