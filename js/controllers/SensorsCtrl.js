angular.module('app.controllers')
.controller('SensorsCtrl', function($scope, $timeout){
$scope.slider = {
    minValue: 10,
    maxValue: 90,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        noSwitching: true
    }
};

$scope.slider2 = {
    minValue: 10,
    maxValue: 90,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        noSwitching: true
    }
};

$scope.slider3 = {
    minValue: 10,
    maxValue: 90,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        noSwitching: true
    }
};

$scope.slider4 = {
    minValue: 10,
    maxValue: 90,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        noSwitching: true
    }
};

$scope.slider5 = {
    minValue: 10,
    maxValue: 90,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        noSwitching: true
    }
};

$scope.slider6 = {
    minValue: 10,
    maxValue: 90,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        noSwitching: true
    }
};

$scope.slider7 = {
    minValue: 10,
    maxValue: 90,
    options: {
        floor: 0,
        ceil: 100,
        step: 1,
        noSwitching: true
    }
};

 $scope.refreshSlider = function () {
        $timeout(function () {
            $scope.$broadcast('rzSliderForceRender');
        });
    };	
})