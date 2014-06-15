(function () {
    var app;

    app = angular.module('express_test.create_person', ['ngResource']);

    app.factory('CallPerson', [
        '$resource', function ($resource) {
            return $resource('/people.json');
        }
    ]);

    app.controller('CreateController', [
        '$scope', 'CallPerson', function ($scope, CallPerson) {
            $scope.newPerson = new CallPerson();
            return $scope.save = function () {
                var tmp = $scope.newPerson;
                if (tmp.firstname == undefined || tmp.lastname == undefined) {
                    $scope.errors=["Firstname and Lastname cannot be empty"]
                    return;
                }
                $scope.newPerson = new CallPerson();
                return CallPerson.save(tmp, function () {});
            };
        }
    ]);

}).call(this);