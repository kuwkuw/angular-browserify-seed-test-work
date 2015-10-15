'use strict';

module.exports = /*@ngInject*/
    function imageController($http, $routeParams) {
        var vm = this; 
        vm.name = "Image";
        vm.photo= [];
        vm.albumTitle='';
        $http.get('http://jsonplaceholder.typicode.com/photos/'+$routeParams.id)
        	 .success(function(photoData){
        	 	vm.photo = photoData;
        	 	console.log(photoData);
                $http.get('http://jsonplaceholder.typicode.com/albums/'+vm.photo.albumId)
                    .success(function(albumData){
                        vm.albumTitle=albumData.title;
                        console.log(albumData);
                    });
        	 });
    };