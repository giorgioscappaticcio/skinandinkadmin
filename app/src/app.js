'use strict';

angular.module('adminApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'src/common/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
