'use strict';

/**
 * @ngdoc function
 * @name persistentInterViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the persistentInterViewApp
 */
angular.module('persistentInterViewApp')
  .controller('MainCtrl', function ($scope,$timeout,imageDesc) {

    var currentIndex = 0,
        currentWrd = '',
        self = this,
        appMode = '',
        textAreaStr = '';

        self.APP_MODE = {};
        self.APP_MODE.WRITE = "writing";
        self.APP_MODE.BACKSPACE = "backspace";
        self.PROGRESS_BAR_TYPE = {};
        self.PROGRESS_BAR_TYPE.SUCCESS = 'sucess';
        self.PROGRESS_BAR_TYPE.INFO = 'info';
        self.PROGRESS_BAR_TYPE.WARNING = 'warning';
        self.PROGRESS_BAR_TYPE.ERROR = 'error';
        self.DEFAULT_MAX_TIME = 60;
        self.DEFAULT_INTERVAL = 1000;
        self.DEFAULT_TEXT = "One of the key components of this class is the Application portion of each Module. The Application takes the math and programming knowledge that you have learned in the first part of the Module and applies the knowledge in solving an interesting practical problem. Specifically, the goal of the Application is to encourage you to think.";  

  $scope.imagesDesc =  imageDesc.get();  
  $scope.dataTextArr = self.DEFAULT_TEXT.split(' ');  
  $scope.typedText = ''; 
  $scope.dynamic = self.DEFAULT_MAX_TIME;
  $scope.max = self.DEFAULT_MAX_TIME;
  $scope.progessBarType = self.PROGRESS_BAR_TYPE.WARNING;
  $scope.timerRunning = false;
  $scope.timeoutId = false;
  $scope.currectWrdCount = 0;
  $scope.wrongWrdCount = 0;
  $scope.currectKeyStrock = 0;
  $scope.wrongKeyStrock = 0;
  $scope.testDone = false;
  $scope.wpm = 0;
  $scope.keypress = function(event){
    appMode = self.APP_MODE.WRITE;   //TODO appMode should have getter and setter.
    $scope.typedText = $scope.typedText + String.fromCharCode(event.which);     
     
     if(!$scope.timerRunning)
      calculateTime();
    if(event.which == 32 || event.which == 13 )
    {
      nextWord();      
    }
    
  }

//TODO no longer need of this function.
  $scope.keydown = function(event){
    if(event.which == 8)
      backspace();
  }

  $scope.wrongWrd = function(index){    
    $scope.wrongWrdCount++;
    $scope.wrongKeyStrock += currentWrd.length + 1; 
    angular.element(angular.element('.text-area span')[index]).removeClass('currentWrd');    
    angular.element(angular.element('.text-area span')[index]).addClass('wrongWrd');
  }

  $scope.rightWrd = function(index){ 
    $scope.currectWrdCount++;
    $scope.currectKeyStrock += currentWrd.length + 1;
    angular.element(angular.element('.text-area span')[index]).removeClass('currentWrd');    
    angular.element(angular.element('.text-area span')[index]).addClass('rightWrd');    
  }

  $scope.currentWrd = function(index){
      angular.element(angular.element('.text-area span')[index]).addClass('currentWrd');
    }

    function backspace(){
        
    }

    function nextWord(){      
      currentWrd = angular.element('.inputArea').val().trim();
      if($scope.dataTextArr[currentIndex] == currentWrd)
        $scope.rightWrd(currentIndex);        
      else
        $scope.wrongWrd(currentIndex);
      
      $scope.currentWrd(++currentIndex);  
      angular.element('.inputArea').val('');
    }

    function calculateTime(){
      $scope.timerRunning = true;
     $scope.timeoutId = $timeout(function(){
        $scope.dynamic--;        
        if($scope.dynamic <= 0)
        testDone();          
        else
        calculateTime();
      },self.DEFAULT_INTERVAL);
    }

    function testDone(){
      clearTimeout($scope.timeoutId);
      $scope.wpm = Math.floor($scope.currectKeyStrock/5);
      $scope.testDone = true;          
      angular.element('.inputArea').attr('disabled',true);      
      angular.element('.restart-btn').removeAttr('disabled');
    }

    $scope.restart = function(){
      $scope.testDone = false;
      $scope.timerRunning =false;
      $scope.currectWrdCount = 0;
      $scope.wrongWrdCount = 0;
      $scope.currectKeyStrock = 0;
      $scope.wrongKeyStrock = 0;
      $scope.wpm = 0; 
      $scope.dynamic = self.DEFAULT_MAX_TIME;
      $scope.dataTextArr = [];      
      $scope.dataTextArr = self.DEFAULT_TEXT.split(' ');  
      angular.element('.restart-btn').attr('disabled',true);      
      angular.element('.inputArea').removeAttr('disabled').val('');
      angular.element('.text-area span').removeClass('rightWrd wrongWrd currentWrd');
      currentIndex = 0;
    }

  });
