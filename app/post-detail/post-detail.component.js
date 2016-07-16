angular
    .module('postDetail')
    .component('postDetail', {
        templateUrl: 'post-detail/post-detail.template.html',
        controller: ['Post', '$routeParams',
            function PostDetailController(Post, $routeParams) {
                var self = this;

                Post.query().$promise.then(function(data) {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i]["id"] == $routeParams.id) {
                            self.post = data[i];
                            break;
                        }
                    }
                });
            }
        ]
    })