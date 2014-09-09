'use strict';

/**
 * @ngdoc function
 * @name persistentInterViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the persistentInterViewApp
 */
angular.module('persistentInterViewApp')
  .controller('MainCtrl', function ($scope,imageDesc) {
  $scope.imagesDesc =  imageDesc.get();
  $scope.curImgDesc;
    $scope.keypress = function(event){
      console.log(event);
    }
  });
