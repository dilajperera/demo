angular.module('directive', []).
    directive('stdDetail', function () {
        return {
            templateUrl: 'views/templates/std-details.html'
        };
    }).directive('header', function () {
        return {
            templateUrl: 'views/templates/header.html'
        };
    });