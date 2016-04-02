angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {})

.controller('LeaderboardCtrl', function($scope) {})

.controller('MeCtrl', function($scope, Auth) {})

.controller('SettingsCtrl', function($scope, Auth) {
  $scope.settings = {
    login: function() {

    },
    logout: function() {
      Auth.$unauth();
    }
  }
});
