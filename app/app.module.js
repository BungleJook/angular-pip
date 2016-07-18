angular.module('angularPip', [
    'ngRoute',
    'ui.bootstrap',
    'core',
    'postList',
    'postDetail',
    'postTitleList'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .otherwise('/posts');
        }
    ]);