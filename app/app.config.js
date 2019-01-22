(function () {
    'use strict';

    angular
        .module('myApp')
        .config(config);

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/news');
        $stateProvider

            .state('home', {
                name: 'home',
                url: '/home',
                template: 'Home'
            })

            .state('news', {
                name: 'news',
                url: '/news',
                templateUrl: 'app/views/news.html'
            })

    }
})();