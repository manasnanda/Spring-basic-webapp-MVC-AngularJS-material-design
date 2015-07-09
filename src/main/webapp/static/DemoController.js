
  //angular.module('app', ['ngMock']);
  var app = angular.module('progressLinearDemo1', ['ngMaterial'])
  app.value('version', '1.0-snap');
  //app.config(function($mdThemingProvider) {
  //});
  app.controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
    /*
    $scope.mode = 'query';
    $scope.determinateValue = 30;
    $scope.determinateValue2 = 30;
    $interval(function() {
      $scope.determinateValue += 1;
      $scope.determinateValue2 += 1.5;
      if ($scope.determinateValue > 100) {
        $scope.determinateValue = 30;
        $scope.determinateValue2 = 30;
      }
    }, 100, 0, true);
    $interval(function() {
      $scope.mode = ($scope.mode == 'query' ? 'determinate' : 'query');
    }, 7200, 0, true);
    */
  }]);

