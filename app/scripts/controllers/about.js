'use strict';

/**
 * @ngdoc function
 * @name angularsiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularsiteApp
 */
angular.module('angularsiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
