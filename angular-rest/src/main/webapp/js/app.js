angular.module('sms', ['controllers', 'ngRoute', 'directive']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/login', {
                templateUrl: 'views/partials/login.html'
            }).
            when('/profiles', {
                templateUrl: 'views/partials/studentList.html'
            }).when('/new', {
                templateUrl: 'views/partials/addStudent.html'
            }).otherwise({
                redirectTo: '/login'
            });
    });

