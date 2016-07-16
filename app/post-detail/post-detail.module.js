angular.module('postDetail', ['ngRoute', 'core.post'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/posts/:id', {
                    template: '<post-detail></post-detail>'
                });
        }
    ]);