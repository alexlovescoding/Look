angular.module('starter.controllers', [])


.controller('LoginCtrl', function($scope, Auth) {
  $scope.login = function() {
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
  }
})


.controller('HomeCtrl', function($scope, Auth) {
  $scope.login = function() {
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
  }
})

.controller('StaringInterfaceCtrl', function($scope, Camera) {

$scope.opponentPhoto = function() {
                           console.log('Getting camera');
                           Camera.getPicture({
                             quality: 75,
                             targetWidth: 320,
                             targetHeight: 320,
                             saveToPhotoAlbum: false
                           }).then(function(imageURI) {
                             console.log(imageURI);
                             $scope.lastPhoto = imageURI;
                           }, function(err) {
                             console.err(err);
                           });
    }
})
.controller('LeaderboardCtrl', function($scope) {})

.controller('MeCtrl', function($scope, Auth) {

})

.controller('SettingsCtrl', function($scope, Auth) {
  $scope.logout = function() {
    Auth.$unauth();
  }
});
