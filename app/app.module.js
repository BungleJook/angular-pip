angular.module('angularPip', [
    'ngRoute',
    'core',
    'postList'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .otherwise('/posts');
        }
    ]);