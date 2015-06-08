angular.module('signup', [])
    .directive('csSignupForm', function () {
        return {
            templateUrl: 'app/signon/registerTemplate.html',
            restrict: 'AE',
            replace: true,
            transclude: true
        }
    });