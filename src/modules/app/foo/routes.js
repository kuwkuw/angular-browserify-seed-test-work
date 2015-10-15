'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'app/foo/templates/viewing.html',
                controller: 'viewingController as viewCntr'
            })
            .when('/photo/:id', {
                templateUrl: 'app/foo/templates/photo.html',
                controller: 'photoController as photoCntr'
            })
            .when('/album/:id', {
                templateUrl: 'app/foo/templates/album.html',
                controller: 'albumController as albumCntr'
            })
            .otherwise({
                redirectTo: '/'
            });
    };