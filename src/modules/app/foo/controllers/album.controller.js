'use strict';

module.exports = /*@ngInject*/
    function albumController($scope, $http, $routeParams) {
        var vm = this; 
        vm.albumTitle = '';
        $http.get('http://jsonplaceholder.typicode.com/albums/'+$routeParams.id)
        	 .success(function(albumData){
        	 	vm.albumTitle = albumData.title;
        	 	console.log(albumData);
                $http.get('http://jsonplaceholder.typicode.com/albums/'+$routeParams.id+'/photos')
                .success(function(albumPhotosData){
                    vm.album = albumPhotosData;
                    console.log(albumPhotosData);
                });
        	 });
    };