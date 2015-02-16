angular.module('AppModule', ["ui.router"])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "partials/home.html"
            })
            .state("about", {
                url: "/about",
                templateUrl: "partials/about.html"
            });
    })
    .controller("MenuCtrl", function ($scope) {
        $scope.list = [
            {label: "Home", url: "home"},
            {label: "About", url: "about"}
        ];
    });