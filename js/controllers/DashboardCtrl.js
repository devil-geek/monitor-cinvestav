angular.module("app.controllers")
.controller("DasboardCtrl",function(ApiSvc){
  console.log("DasboardCtrl");

  ApiSvc.getAllSensors()
  .then(function(res){
    console.log(res);
  })
  .catch(function(err){
    console.log(err)
  })

  ApiSvc.getDeviceLogs(10)
  .then(function(res){
    console.log(res);
  })
  .catch(function(err){
    console.log(err)
  })

})
