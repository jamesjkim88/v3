var app = angular.module("myApp", [ui.router]);

app.controller("mainCtrl", function($scope, flickr){
    $scope.message = "Hello";
});

app.factory("flickr", function($http){
    return{

    }
});