'use strict';

/**
 * @ngdoc function
 * @name persistentInterViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the persistentInterViewApp
 */
angular.module('persistentInterViewApp')
  .controller('MainCtrl', function ($scope,$log,imageDesc) {
    var currentIndex = 0,        
        currentWrd = '';


  $scope.imagesDesc =  imageDesc.get();  
  $scope.dataTextArr = "One of the key components of this class is the Application portion of each Module. The Application takes the math and programming knowledge that you have learned in the first part of the Module and applies the knowledge in solving an interesting practical problem. Specifically, the goal of the Application is to encourage you to think.".split(' ');  
  $scope.typedText = ''; 
  
  $scope.keypress = function(event){    
    $scope.typedText = $scope.typedText + String.fromCharCode(event.which);      
    console.log(event);
    if(event.which == 32)
    {
      if($scope.dataTextArr[currentIndex] == currentWrd)
        $scope.rightWrd(currentIndex);        
      else
        $scope.wrongWrd(currentIndex);

      currentWrd = '';
      $scope.currentWrd(++currentIndex);      
    }
    else
      currentWrd = currentWrd + String.fromCharCode(event.which);

    console.log(String.fromCharCode(event.which));
  }

  $scope.wrongWrd = function(index){    
    console.log(angular.element('.text-area span')[index]);
    angular.element(angular.element('.text-area span')[index]).css("background-color","red");
    console.log(angular.element('.text-area span')[index]);
  }

  $scope.rightWrd = function(index){
    angular.element(angular.element('.text-area span')[index]).css("background-color","green");    
  }

  $scope.currentWrd = function(index){
      angular.element(angular.element('.text-area span')[index]).css("background-color","yellow");
    }
  });
