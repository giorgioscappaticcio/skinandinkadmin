'use strict';

angular.module('adminApp')
  .controller('MainCtrl', function ($scope, $window) {
    
    $scope.popupHeight = $window.innerHeight + 'px';
    $scope.popupWidth = $window.innerWidth + 'px';

    $scope.isVisible = false;

    $scope.showFullPage = function(color) {
        $scope.fullpagestyle = {
            'background-color' : color
        }
        $scope.isVisible = !$scope.isVisible;
    }
    

    





  });
