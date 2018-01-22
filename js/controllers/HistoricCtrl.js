angular.module("app.controllers")
.controller("HistoricCtrl", function($scope, $timeout, toastr, $http, API, $state, $filter) {

  $scope.$watch('startDate', function (value) {
     console.log(value)
  });

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['PH', 'Dissolved Oxigen', 'Turbidity'];
  $scope.data = [
    [5, 9, 8, 8.1, 6, 5, 4],
    [28, 48, 40, 19, 86, 27, 90],
    [38, 18, 20, 9, 56, 17, 70]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
});
