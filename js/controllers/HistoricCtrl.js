angular.module("app.controllers")
.controller("HistoricCtrl", function($scope, $timeout, toastr, $http, API, $state, $filter) {

  $scope.$watch('startDate', function (value) {
     console.log(value)
  });
});
