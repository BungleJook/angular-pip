angular.
    module('postList').
    component('postList', {
        templateUrl: 'post-list/post-list.template.html',
        controller: function PostListController() {
            this.posts = [
                {
                    title: 'Article One',
                    text: 'This is an example for Article One.'
                }, {
                    title: 'Article Two',
                    text: 'This is an example for Article Two.'
                }, {
                    title: 'Article Three',
                    text: 'This is an example for Article Three.'
                }
            ];
        }
    });