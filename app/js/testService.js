angular.module("internship").factory("testService", function($q) {
    var counter = 0;

    return {
      add: function(numberToAdd) {
          counter += numberToAdd;
      },
      get: function() {
         return counter;
      },
      test: function(){
          var deferred = $q.defer();

          if (counter > 2) {
              deferred.resolve("Data here");
          }
          else {
              deferred.reject("Aborted");
          }

          return deferred.promise;
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
