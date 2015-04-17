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
        self.DEFAULT_INTERVAL = 800;
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
    
  $scope.config = {
    title: 'W.P.M',
    tooltips: true,
    labels: false,
    mouseover: function() {},
    mouseout: function() {},
    click: function() {},
    legend: {
      display: true,
      //could be 'left, right'
      position: 'right'
    }
  };

  $scope.data = {
    series: ['v'],
    data: [{
      x: "1",
      y: [60]
    }, {
      x: "2",
      y: [65]
    }, {
      x: "2",
      y: [70]
    }, {
      x: "3",
      y: [80]
    }, {
      x: "4",
      y: [0]
    },{
      x: "5",
      y: [0]
    },{
      x: "6",
      y: [0]
    }, {
      x: "7",
      y: [65]
    }, {
      x: "8",
      y: [70]
    }, {
      x: "9",
      y: [80]
    }, {
      x: "10",
      y: [0]
    },{
      x: "11",
      y: [0]
    },{
      x: "12",
      y: [0]
    }, {
      x: "13",
      y: [65]
    }, {
      x: "14",
      y: [70]
    }, {
      x: "15",
      y: [80]
    }, {
      x: "16",
      y: [0]
    },{
      x: "17",
      y: [0]
    },{
      x: "18",
      y: [0]
    }, {
      x: "19",
      y: [65]
    }, {
      x: "20",
      y: [70]
    }, {
      x: "21",
      y: [80]
    }, {
      x: "22",
      y: [0]
    },{
      x: "23",
      y: [0]
    },{
      x: "24",
      y: [0]
    }, {
      x: "25",
      y: [65]
    }, {
      x: "26",
      y: [70]
    }, {
      x: "27",
      y: [80]
    }, {
      x: "28",
      y: [0]
    },{
      x: "29",
      y: [0]
    },{
      x: "30",
      y: [0]
    }, {
      x: "31",
      y: [65]
    }, {
      x: "32",
      y: [70]
    }, {
      x: "33",
      y: [80]
    }, {
      x: "34",
      y: [0]
    },{
      x: "35",
      y: [0]
    },{
      x: "36",
      y: [0]
    }, {
      x: "37",
      y: [65]
    }, {
      x: "38",
      y: [70]
    }, {
      x: "39",
      y: [80]
    }, {
      x: "40",
      y: [0]
    },{
      x: "41",
      y: [0]
    },{
      x: "42",
      y: [0]
    }, {
      x: "43",
      y: [65]
    }, {
      x: "44",
      y: [70]
    }, {
      x: "45",
      y: [80]
    }, {
      x: "46",
      y: [0]
    },{
      x: "47",
      y: [0]
    },{
      x: "48",
      y: [0]
    }, {
      x: "49",
      y: [65]
    }, {
      x: "50",
      y: [70]
    }, {
      x: "51",
      y: [80]
    }, {
      x: "52",
      y: [0]
    },{
      x: "53",
      y: [0]
    },{
      x: "54",
      y: [0]
    }, {
      x: "55",
      y: [65]
    }, {
      x: "56",
      y: [70]
    }, {
      x: "57",
      y: [80]
    }, {
      x: "58",
      y: [0]
    },{
      x: "59",
      y: [0]
    },{
      x: "60",
      y: [0]
    }]
  };

  });
