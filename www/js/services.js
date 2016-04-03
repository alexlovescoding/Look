angular.module('starter.services', ["ionic", "firebase"])

.factory("Auth", function($firebaseAuth) {
  var usersRef = new Firebase("https://looksd.firebaseio.com/users");
  return $firebaseAuth(usersRef);
})

