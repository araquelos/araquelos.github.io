

  angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
    .config(function ($mdIconProvider) {
      $mdIconProvider.iconSet('device', 'img/icons/sets/device-icons.svg', 24);
    })
    .controller('AppCtrl', function ($scope) {
      $scope.color = {
        red: Math.floor(Math.random() * 255),
        green: Math.floor(Math.random() * 255),
        blue: Math.floor(Math.random() * 255)
      };
    });
    