angular.module("app",['app.controllers', 'app.services', 'ui.router', 'ui.bootstrap', 'ngAnimate', 'toastr', 'ngTouch', 'ds.clock', 'chart.js', 'angularjs-gauge','720kb.datepicker'])
.constant('API',"http://ttrservers.dyndns.org:9091/api/")
.config(function($stateProvider, $urlRouterProvider, ChartJsProvider){

  $stateProvider
  .state("login",{
      url:"/",
      templateUrl:"views/login.html",
      controller: "LoginCtrl"
  })

  .state("dashboard",{
      url:"/dashboard",
      abstract: true,
      templateUrl:"views/dashboard.html",
      controller: "DasboardCtrl"
  })

  .state("dashboard.monitor",{
      url:"/monitor",
      views: {
        'dash-view': {
          templateUrl: 'views/monitor.html',
          controller: 'MonitorCtrl'
        }
      }
  })

  .state("dashboard.historic",{
    url:"/historic",
    views: {
      'dash-view': {
        templateUrl: 'views/historic.html',
        controller: 'HistoricCtrl'
      }
    }
})

  $urlRouterProvider.otherwise('/dashboard/monitor');

  ChartJsProvider.setOptions({ chartColors : [ '#00c0ef', '#f39c12', '#00a65a', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });


});
