angular.
    module('postList').
    component('postList', {
        templateUrl: 'post-list/post-list.template.html',
        controller: ['$http',
            function PostListController($http) {
                var self = this;

                $http.get('posts/posts.json').then(function(response) {
                    self.posts = response.data;
                })
            }
        ]
    });