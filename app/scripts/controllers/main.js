'use strict';

/**
 * @ngdoc function
 * @name persistentInterViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the persistentInterViewApp
 */
angular.module('persistentInterViewApp')
  .controller('MainCtrl', function ($scope) {

  $scope.myInterval = 5000;
  var slides = $scope.slides = [
  								{image:'http://storage.googleapis.com/vinaymavi/garrotxa.jpg'},
  								{image:'http://storage.googleapis.com/vinaymavi/pvi-header.jpg'},
  								{image:'http://storage.googleapis.com/vinaymavi/treefrog1.jpg'},
  								{image:'http://storage.googleapis.com/vinaymavi/tumblr_static_slide2_butterfly.jpg'}
  								];
  
  });
