angular.
    module('services', ['ngResource', 'ngCookies', 'ngRoute']).
    factory('authorizationService', ['$http', '$q', '$cookies', '$httpParamSerializer',
        function ($http, $q, $cookies, $httpParamSerializer) {

            function getAccessToken() {
                return $cookies.get('access_token');
            };

            function requestAccessToken(userDetails) {
                var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: 'http://localhost:8080/spring-security-oauth-server/oauth/token',
                    headers: {
                        "Authorization": "Basic ", //+ $scope.encoded,
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                    },
                    data: $httpParamSerializer({
                        grant_type: "password",
                        username: userDetails.username,
                        password: userDetails.password,
                        client_id: "clientIdPassword"
                    })
                }).then(function success(response) {
                    deferred.resolve(response.data);
                }, function error(response) {
                    deferred.reject(response);
                });
                return deferred.promise;
            };

            return ({
                getAccessToken: getAccessToken,
                requestAccessToken: requestAccessToken
            });
        }]);