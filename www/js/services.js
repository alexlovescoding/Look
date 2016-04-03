angular.module('starter.services', ["ionic", "firebase"])

.factory("Auth", function($firebaseAuth) {
  var usersRef = new Firebase("https://looksd.firebaseio.com/users");
  return $firebaseAuth(usersRef);
})
.factory('Camera', ['$q', function($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}])
