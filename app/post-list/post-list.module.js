angular.module('postList', ['core.post', 'ngRoute'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/posts', {
                    template: "<post-list></post-list>"
                });
        }
    ]);