angular.
    module('studentService', []).
    factory('studentFactory', ['$http', '$q', function ($http, $q) {

        function addStudent(student) {
            var deferred = $q.defer();
            $http({
                method: 'POST',
                url: 'students',
                data: student
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        function getAllStudents() {
            var deferred = $q.defer();
            $http({
                method: 'GET',
                url: 'students'
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        function deleteStudent(student) {
            var deferred = $q.defer();
            $http({
                method: 'DELETE',
                url: 'students/' + student.id,
                data: student
            }).success(function (data) {
                deferred.resolve(data);
            }).error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        return ({
            addStudent: addStudent,
            getAllStudents: getAllStudents,
            deleteStudent: deleteStudent
        });
    }]);