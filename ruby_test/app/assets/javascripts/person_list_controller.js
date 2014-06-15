(function () {
    var app;

    app = angular.module('express_test.person_connection', ['ngResource']);

    app.factory('CallPerson', [
        '$resource', function ($resource) {
            return $resource('/people/:id.json', {id: "@id"}, {})}
    ]);

    app.controller('PersonController', [
            '$scope', '$http', 'CallPerson', function ($scope, $http, CallPerson) {
                $scope.person_list = [];

                $scope.delete = function (person) {
                    if (confirm("Do you want to delete this person?")) {
                        CallPerson.delete(person, function () {
                            $scope.person_list= $scope.person_list.filter(function(item) {
                                return item !== person;
                            });
                        }, function () {
                            alert("Could not delete person");
                        });
                    }
                }

                $scope.showDetails = function (person) {
                    $scope.connections = [];
                    return $http.get('/connections/'+ person.id +'.json').then(function (result) {
                        return angular.forEach(result.data, function (item) {
                            return $scope.connections.push(item);
                        });
                    });
                }

                return $http.get('/people.json').then(function (result) {
                    return angular.forEach(result.data, function (item) {
                        return $scope.person_list.push(item);
                    });
                });
            }]
    );

}).call(this);