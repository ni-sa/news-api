(function () {
    'use strict';
 
    angular.module('myApp')
        .service('newsService', NewsService);
 
    NewsService.$inject = ['$http', '$location'];
 
    function NewsService($http, $location) {

        return {
            getGoogleNews: function (onSuccess, onError) {
                return $http({
                    method: 'GET'
                    , url: 'https://newsapi.org/v2/everything?' + 'q=golden%20state%20killer&' + 'apiKey=57ee4d471f644f568254cac91f1d284f'
                }).then(onSuccess, onError);
            }
        }

    }
})();