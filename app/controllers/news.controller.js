(function () {
    "use strict";

    angular
        .module("myApp")
        .controller("newsController", NewsController);

    NewsController.$inject = ["$scope"
                            , "$window"
                            , "newsService"];

    function NewsController($scope
                            , $window
                            , newsService) {

        var vm = this;

        vm.title = "Golden State Killer News";

        _render();

        function _render() {
            newsService.getGoogleNews(_onGoogleNewsSuccess, _onGoogleNewsError);
        };

        function _onGoogleNewsSuccess(response) {
            vm.googleNews = response.data.articles;
        };
 
        function _onGoogleNewsError() {
            $window.alert('Google data not found.');
        };       

    }
})();