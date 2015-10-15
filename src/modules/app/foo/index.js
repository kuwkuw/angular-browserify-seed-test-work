'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .controller('viewingController', require('./controllers/viewing.controller'))
        .controller('photoController', require('./controllers/photo.controller'))
        .controller('albumController', require('./controllers/album.controller'));