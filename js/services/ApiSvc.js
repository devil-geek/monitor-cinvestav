angular.module("app.services", [])
    .service("ApiSvc", function ($http, $q, API) {
        return {
            getAllSensors: function () {
                var defered = $q.defer();
                var promise = defered.promise;

                $http.get(API + 'network/sensors/all')
                    .then(function (res) {
                        defered.resolve(res.data);
                    })
                    .catch(function (err) {
                        defered.reject(err)
                    });

                return promise;
            },
            getAllDevices: function () {
                var defered = $q.defer();
                var promise = defered.promise;

                $http.get(API + 'devices/all')
                    .then(function (res) {
                        defered.resolve(res.data);
                    })
                    .catch(function (err) {
                        defered.reject(err)
                    });

                return promise;
            },
            getDeviceLogs: function (page) {
                var defered = $q.defer();
                var promise = defered.promise;

                $http.get(API + 'devices/device_logs/page/' + page)
                    .then(function (res) {
                        defered.resolve(res.data);
                    })
                    .catch(function (err) {
                        defered.reject(err.status + " " + err.statusText)
                    });

                return promise;
            }
        };
    })