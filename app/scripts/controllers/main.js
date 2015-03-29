'use strict';

/**
 * @ngdoc function
 * @name angularsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularsiteApp
 */
angular.module('angularsiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
