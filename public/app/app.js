var app = angular.module("myApp", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state("about", {
        url: "/",
        templateUrl: "../templates/_about.html",
        controller: "aboutCtrl"
    }).state("portfolio", {
        url: "/portfolio",
        templateUrl: "../templates/_portfolio.html",
        controller: "portfolioCtrl"
    }).state("contact", {
        url: "/contact",
        templateUrl: "../templates/_contact.html",
        controller: "contactCtrl"
    });
    $urlRouterProvider.otherwise("/");
});

app.controller("aboutCtrl", function($scope){
    $scope.message = "about";
});

app.controller("portfolioCtrl", function($scope){
    $scope.message = "portfolio";
});

app.controller("contactCtrl", function($scope){
    $scope.message = "contact";
});

app.controller("mainCtrl", function($scope, flickr){
    $scope.message = "Hello";
});

//app.factory("flickr", function($http){
//    return{
//
//    }
//});