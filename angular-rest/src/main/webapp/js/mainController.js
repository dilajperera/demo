angular.module('controllers', [/*'ngResource'*/,/* 'ngCookies'*/'ngRoute','studentService', 'underscore'])
    .controller('mainCtrl', ['$scope', '$route', function ($scope, $route) {
        $scope.$route = $route;
    }])
    .controller('loginCtrl', ['$scope', '$location',/* '$resource', '$http', '$httpParamSerializer', '$cookies',*/
        function ($scope, $location/*, $resource, $http, $httpParamSerializer, $cookies*/) {

            $scope.login = function (userDetails) {
                 $location.path("/profiles");
            };
    }]);