angular.module('signup', [])
    .directive('csSignupForm', function () {
        return {
            templateUrl: 'registerTemplate.html',
            restrict: 'AE',
            replace: true,
            transclude: true
        }
    });