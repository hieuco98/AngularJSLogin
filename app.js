//(function () {"use strict";
  angular.module("app", ["ngRoute", "ngCookies"]).config(config).run(run);
  config.$inject = ['$routeProvider','$locationProvider'];
  function config($routeProvider,$locationProvider){
      console.log('config run...');
      $routeProvider.when('/',{
              controller :"loginController",
              templateUrl : 'login.html',
              controllerAs: 'vm'
          }).when('/home',{
              controller: 'homeController',
              templateUrl:'home.html',
              controllerAs: 'vm'
          }).when('/register',{
              controller:'registerController',
              templateUrl:'register.html',
              controllerAs: 'vm'
          }).otherwise({
              redirectTo:'/'});}//login
      run.$inject = ['$rootScope'];
      function run(){//console.clear();
          console.log('ngjs1app...');
      }
//  })();