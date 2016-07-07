angularPip.controller('PostListController', function PostListController($scope) {
    $scope.posts = [
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
});