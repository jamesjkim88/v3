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
    }).state("professional-bio", {
        url: "/professional-bio",
        templateUrl: "../templates/_resume.html",
        controller: "professional-bio"
    });
    $urlRouterProvider.otherwise("/");
});

app.controller("aboutCtrl", function($scope){
    $scope.message = "about";
});

app.controller("portfolioCtrl", function($scope){
    $scope.message = "portfolio";
});

app.controller("professional-bio", function($scope){
    $(".headerRow").click(function(){
      console.log("click");
      $(this).next(".show").toggleClass("hide");
      $(this).find(".fa-chevron-up").toggleClass("fa-chevron-down");
    })
});

app.controller("mainCtrl", function($scope, flickr){
    $scope.message = "Hello";
});
