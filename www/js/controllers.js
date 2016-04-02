angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('LeaderboardCtrl', function($scope) {})

.controller('MeCtrl', function($scope, Auth) {})

.controller('SettingsCtrl', function($scope, Auth) {
  $scope.settings = {
    login: function() {

    Auth.$authWithOAuthRedirect("facebook").then(function(authData) {
    // User successfully logged in
    }).catch(function(error) {
      if (error.code === "TRANSPORT_UNAVAILABLE") {
        Auth.$authWithOAuthPopup("facebook").then(function(authData) {
          // User successfully logged in. We can log to the console
          // since we’re using a popup here
          console.log(authData);
        });
      } else {
        // Another error occurred
        console.log(error);
      }
      Auth.$onAuth(function(authData) {
        if (authData === null) {
          console.log("Not logged in yet");
        } else {
            console.log("Logged in as", authData.uid);
        }
          $scope.authData = authData;
        });
      });

    },
    logout: function() {
      Auth.$unauth();
    }
  }
});
