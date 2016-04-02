angular.module('starter.services', ["ionic", "firebase"])

.factory("Auth", function($firebaseAuth) {
  var usersRef = new Firebase("https://peregrine-falcon.firebaseio.com/users");
  return $firebaseAuth(usersRef);
})

