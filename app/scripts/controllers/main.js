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
        currentWrd = '',
        self = this,
        appMode = '',
        textAreaStr = '';

        self.APP_MODE = {};
        self.APP_MODE.WRITE = "writing";
        self.APP_MODE.BACKSPACE = "backspace";

  $scope.imagesDesc =  imageDesc.get();  
  $scope.dataTextArr = "One of the key components of this class is the Application portion of each Module. The Application takes the math and programming knowledge that you have learned in the first part of the Module and applies the knowledge in solving an interesting practical problem. Specifically, the goal of the Application is to encourage you to think.".split(' ');  
  $scope.typedText = ''; 
  
  $scope.keypress = function(event){
    appMode = self.APP_MODE.WRITE;   //TODO appMode should have getter and setter.
    $scope.typedText = $scope.typedText + String.fromCharCode(event.which);     
    if(event.which == 32 && currentWrd.length > 0)
    {
      nextWord();      
    }
    else
      currentWrd = (currentWrd + String.fromCharCode(event.which)).trim();    
  }

  $scope.keydown = function(event){
    if(event.which == 8)
      backspace();
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

    function backspace(){
    if(currentWrd.length > 0)      
      currentWrd = currentWrd.slice(0,-1);      
    
    
      if(appMode == self.APP_MODE.WRITE){        
        appMode = self.APP_MODE.BACKSPACE;// TODO appMode should have getter and setter.
       textAreaStr = angular.element('.inputArea').val();
       textAreaStr = textAreaStr.substring(0,textAreaStr.lastIndexOf(' '));        
      }

      angular.element('.inputArea').val(textAreaStr+' '+ currentWrd);
        
    }

    function nextWord(){

      if($scope.dataTextArr[currentIndex] == currentWrd)
        $scope.rightWrd(currentIndex);        
      else
        $scope.wrongWrd(currentIndex);

      currentWrd = '';
      $scope.currentWrd(++currentIndex);  
    }

  });
