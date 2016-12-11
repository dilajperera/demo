angular.module('core')
    .controller('mainCtrl', ['$scope', '$route', function ($scope, $route) {
        $scope.$route = $route;
    }])
    .controller('loginCtrl', ['$scope', '$location', '$http', '$cookies', 'authorizationService',
        function ($scope, $location, $http, $cookies, authorizationService) {

            $scope.login = function (userDetails) {

                //need to remove
                $cookies.put('access_token', 'access_token_123');

                $location.path('/profiles');
                authorizationService.requestAccessToken(userDetails).then(function (data) {
                    $http.defaults.headers.common.Authorization = 'Bearer ' + data.data.access_token;
                    // $cookies.put("access_token", data.data.access_token);
                }, function (error) {
                    console.log('Authentication Fail' + error.data);
                    $cookies.put('access_token', 'access_token_123');
                });
            };
   }]);