'use strict';

module.exports = /*@ngInject*/
    function viewingController($scope, $http) {
        var vm = this;
        var last=0;
        var allPhotos=[];         
        vm.photos = [];
        
        $http.get('http://jsonplaceholder.typicode.com/photos')
        	 .success(function(data){
        	 	allPhotos = data;
        	 	console.log(data);
        	 	vm.addMoreItems();
        	 });

        vm.addMoreItems = function(){
        	vm.photos = vm.photos.concat(allPhotos.slice(last, last+10));
        	last+=10;
        	console.log(vm.photos);
        };	 
    };