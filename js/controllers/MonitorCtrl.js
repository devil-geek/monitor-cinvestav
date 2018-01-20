angular.module("app.controllers")
.controller("MonitorCtrl",function($scope, $timeout){
  console.log("MonitorCtrl");
  $scope.monitorData = {};
  $scope.monitorData.fecha = Date();
  $scope.monitorData.ph = 4;
  $scope.monitorData.do = 90;
  $scope.monitorData.tu = 70;

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
  // Simulate async data update
  $timeout(function () {
    $scope.data = [
      [5, 9, 8, 8.1, 6, 5, 4, 7],
      [28, 48, 40, 19, 86, 27, 90,25],
      [38, 18, 20, 9, 56, 17, 70, 45]
    ];

    $scope.monitorData.fecha = Date();
    $scope.monitorData.ph = 7;
    $scope.monitorData.do = 25;
    $scope.monitorData.tu = 45;
  }, 3000);

})
