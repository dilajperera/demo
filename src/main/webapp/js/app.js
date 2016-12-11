angular.module('sms', ['controllers', 'ngRoute', 'directive']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'views/home.html'
            }).
            when('/profiles', {
                templateUrl: 'views/partials/manageStudent.html'
            }).when('/new', {
                templateUrl: 'views/partials/addStudent.html'
            }).otherwise({
                redirectTo: '/home'
            });
    });

