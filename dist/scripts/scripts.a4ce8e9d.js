"use strict";angular.module("persistentInterViewApp",["ui.bootstrap","ngResource"]),angular.module("persistentInterViewApp").controller("MainCtrl",["$scope","imageDesc",function(a,b){a.myInterval=5e3;a.slides=[{image:"http://storage.googleapis.com/vinaymavi/garrotxa.jpg"},{image:"http://storage.googleapis.com/vinaymavi/pvi-header.jpg"},{image:"http://storage.googleapis.com/vinaymavi/treefrog1.jpg"},{image:"http://storage.googleapis.com/vinaymavi/tumblr_static_slide2_butterfly.jpg"}];a.imagesDesc=b.get(),a.curImgDesc,a.$on("SLIDE_CHANGE",function(b,c){a.curImgDesc=a.imagesDesc[a.slides[c].image],console.log(a.curImgDesc)}),a.submitForm=function(a){a&&alert("our form is amazing")}}]),angular.module("persistentInterViewApp").service("imageDesc",["$resource",function(a){return a("/imageDesc.json")}]);